// Copyright 2019 Andy Pan. All rights reserved.
// Use of this source code is governed by an MIT-style
// license that can be found in the LICENSE file.

package gnet

import (
	"container/heap"
	"sync"
)

// LoadBalancing represents the the type of load-balancing algorithm.
type LoadBalancing int

const (
	// RoundRobin assigns the next accepted connection to the event-loop by polling event-loop list.
	RoundRobin LoadBalancing = iota

	// LeastConnections assigns the next accepted connection to the event-loop that is
	// serving the least number of active connections at the current time.
	LeastConnections

	// SourceAddrHash assignes the next accepted connection to the event-loop by hashing socket fd.
	SourceAddrHash
)

type (
	// loadBalancer is a interface which manipulates the event-loops group.
	loadBalancer interface {
		register(*eventloop)
		next(int) *eventloop
		iterate(func(int, *eventloop) bool)
		len() int
		calibrate(*eventloop, int32)
	}

	// roundRobinEventLoopSet with Round-Robin algorithm.
	roundRobinEventLoopSet struct {
		nextLoopIndex int
		eventLoops    []*eventloop
		size          int
	}

	// leastConnectionsEventLoopSet with Least-Connections algorithm.
	leastConnectionsEventLoopSet struct {
		sync.RWMutex
		minHeap minEventLoopHeap
	}

	// sourceAddrHashEventLoopSet with Hash algorithm.
	sourceAddrHashEventLoopSet struct {
		eventLoops []*eventloop
		size       int
	}
)

// ==================================== Implementation of Round-Robin load-balancer ====================================

func (set *roundRobinEventLoopSet) register(el *eventloop) {
	el.idx = set.size
	set.eventLoops = append(set.eventLoops, el)
	set.size++
}

// next returns the eligible event-loop based on Round-Robin algorithm.
func (set *roundRobinEventLoopSet) next(_ int) (el *eventloop) {
	el = set.eventLoops[set.nextLoopIndex]
	if set.nextLoopIndex++; set.nextLoopIndex >= set.size {
		set.nextLoopIndex = 0
	}
	return
}

func (set *roundRobinEventLoopSet) iterate(f func(int, *eventloop) bool) {
	for i, el := range set.eventLoops {
		if !f(i, el) {
			break
		}
	}
}

func (set *roundRobinEventLoopSet) len() int {
	return set.size
}

func (set *roundRobinEventLoopSet) calibrate(el *eventloop, delta int32) {
	el.adjustConnCount(delta)
}

// ================================= Implementation of Least-Connections load-balancer =================================

// Leverage min-heap to optimize Least-Connections load-balancing
type minEventLoopHeap []*eventloop

// Implement heap.Interface: Len, Less, Swap, Push, Pop.
func (h *minEventLoopHeap) Len() int {
	return len(*h)
}

func (h *minEventLoopHeap) Less(i, j int) bool {
	//return (*h)[i].loadConnCount() < (*h)[j].loadConnCount()
	return (*h)[i].connCount < (*h)[j].connCount
}

func (h *minEventLoopHeap) Swap(i, j int) {
	(*h)[i], (*h)[j] = (*h)[j], (*h)[i]
	(*h)[i].idx, (*h)[j].idx = i, j
}

func (h *minEventLoopHeap) Push(x interface{}) {
	el := x.(*eventloop)
	el.idx = len(*h)
	*h = append(*h, el)
}

func (h *minEventLoopHeap) Pop() interface{} {
	i := len(*h) - 1
	x := (*h)[i]
	*h = (*h)[0:i]
	return x
}

func (set *leastConnectionsEventLoopSet) register(el *eventloop) {
	set.Lock()
	heap.Push(&set.minHeap, el)
	set.Unlock()
}

// next returns the eligible event-loop by taking the root node from minimum heap based on least-connections algorithm.
func (set *leastConnectionsEventLoopSet) next(_ int) (el *eventloop) {
	set.RLock()
	//el = heap.Pop(&set.minHeap).(*eventloop)
	el = set.minHeap[0]
	set.RUnlock()
	return
}

func (set *leastConnectionsEventLoopSet) iterate(f func(int, *eventloop) bool) {
	set.RLock()
	for i, el := range set.minHeap {
		if !f(i, el) {
			break
		}
	}
	set.RUnlock()
}

func (set *leastConnectionsEventLoopSet) len() (size int) {
	set.RLock()
	size = set.minHeap.Len()
	set.RUnlock()
	return
}

func (set *leastConnectionsEventLoopSet) calibrate(el *eventloop, delta int32) {
	//el.adjustConnCount(delta)
	set.Lock()
	el.connCount += delta
	heap.Fix(&set.minHeap, el.idx)
	set.Unlock()
}

// ======================================= Implementation of Hash load-balancer ========================================

func (set *sourceAddrHashEventLoopSet) register(el *eventloop) {
	el.idx = set.size
	set.eventLoops = append(set.eventLoops, el)
	set.size++
}

// next returns the eligible event-loop by taking the remainder of a given fd as the index of event-loop list.
func (set *sourceAddrHashEventLoopSet) next(hashCode int) *eventloop {
	return set.eventLoops[hashCode%set.size]
}

func (set *sourceAddrHashEventLoopSet) iterate(f func(int, *eventloop) bool) {
	for i, el := range set.eventLoops {
		if !f(i, el) {
			break
		}
	}
}

func (set *sourceAddrHashEventLoopSet) len() int {
	return set.size
}

func (set *sourceAddrHashEventLoopSet) calibrate(el *eventloop, delta int32) {
	el.adjustConnCount(delta)
}
