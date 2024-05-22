/*
    Tree
    1. A tree is a collection of nodes connected by directed (or undirected) edges.
    2. A tree is a nonlinear data structure, compared to arrays, linked lists, stacks and queues which are linear data structures.
    3. The node at the top of the tree is called the root. If this node is connected by another node, the root is a parent node and the connected node is a child.
    4. A node with no children is called a leaf node.
    5. The maximum number of children a node can have is called the degree of the node.
    6. Following are the types of trees:
        - Binary Tree
        - Binary Search Tree
        - AVL Tree
        - Red-Black Tree
        - B-Tree
        - B+ Tree
        - Splay Tree
        - Segment Tree
        - K-D Tree
        - Trie
        - Suffix Tree
        - Suffix Array
*/


/*
    Time Complexity:
    - Insertion: O(log n)
    - Deletion: O(log n)
    - Traversal: O(n)
    - Searching: O(log n)
    - Sorting: O(n log n)
    - Get Nth node: O(n)
    - Get middle node: O(n)
    - Count nodes: O(n)
    - Height of tree: O(n)
    - Diameter of tree: O(n)
    - Lowest common ancestor: O(n)
    - Check if tree is balanced: O(n)
    - Check if tree is symmetric: O(n)
    - Check if tree is binary search tree: O(n)
    - Check if tree is complete binary tree: O(n)
    - Check if tree is full binary tree: O(n)
    - Check if tree is perfect binary tree: O(n)
    - Check if tree is balanced binary tree: O(n)
    - Check if tree is AVL tree: O(n)
    - Check if tree is Red-Black tree: O(n)
    - Check if tree is B-Tree: O(n)
    - Check if tree is B+ Tree: O(n)
    - Check if tree is Splay Tree: O(n)
    - Check if tree is Segment Tree: O(n)
    - Check if tree is K-D Tree: O(n)
    - Check if tree is Trie: O(n)
    - Check if tree is Suffix Tree: O(n)
    - Check if tree is Suffix Array: O(n)

    Space Complexity: O(n)
    In-Place: No
    Stable: Yes
*/


/*
    JavaScript Implementation of Binary Tree
*/


class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    // Insert a value into the binary tree
    insert(value) {
        const newNode = new BinaryTreeNode(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    // Helper method to recursively insert a node
    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }



    // search a node in the tree
    search(value) {
        let currentNode = this.root;

        while (currentNode) {
            if (value === currentNode.value) {
                console.log(`The value ${value} is in the tree:-`);
                return currentNode
            } else if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }

        return `${value} is not found in the tree`;
    }


    // In-order traversal: Left, Root, Right
    inOrderTraversal(node = this.root, result = []) {
        if (node !== null) {
            this.inOrderTraversal(node.left, result);
            result.push(node.value);
            this.inOrderTraversal(node.right, result);
        }
        return result;
    }

    // Pre-order traversal: Root, Left, Right
    preOrderTraversal(node = this.root, result = []) {
        if (node !== null) {
            result.push(node.value);
            this.preOrderTraversal(node.left, result);
            this.preOrderTraversal(node.right, result);
        }
        return result;
    }

    // Post-order traversal: Left, Right, Root
    postOrderTraversal(node = this.root, result = []) {
        if (node !== null) {
            this.postOrderTraversal(node.left, result);
            this.postOrderTraversal(node.right, result);
            result.push(node.value);
        }
        return result;
    }
}


// Example usage
const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(20);
tree.insert(15);
tree.insert(25);

console.log(tree.search(20)); // true
console.log(tree.search(21)); // false

console.log(tree.inOrderTraversal()); // [3, 5, 7, 10, 15]
console.log(tree.preOrderTraversal()); // [10, 5, 3, 7, 15]
console.log(tree.postOrderTraversal()); // [3, 7, 5, 15, 10]