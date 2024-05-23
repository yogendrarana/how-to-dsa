/*
    Heap Data Structure
    1. Heap is a special tree-based data structure that satisfies the heap property.
    2. In max heap, the key at a node is greater than the keys at its children.
    3. In min heap, the key at a node is smaller than the keys at its children.
    4. The root node is the element with the highest key in a max heap and the smallest key in a min heap.
    5. Heaps are typically implemented as binary trees (complete binay tree).
    5. Heap can also be implemented using an array where the root element will be at arr[0].
    6. The parent node at index i has left child at index 2i + 1 and right child at index 2i + 2 and parent node at Math.floor((i-1)/2).
*/