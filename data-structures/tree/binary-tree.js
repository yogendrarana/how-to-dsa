
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