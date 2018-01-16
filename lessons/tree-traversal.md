---
title: "Tree Traversals"
path: "/tree-traversals"
order: 1
---

Trees are an essential part of storing data, or at computer scientists like to refer them as, data structures. Among their benefits is that they're optimized to be searchable. Occasionally you need to serialize the entire tree into a flat data structure. Today we'll show you how to do that.

![BST](./images/bst.png)

The picture tree is a valid binary search tree (BST.) If you need a review of what a BST is, checkout [the previous course][bst]. We're going to show you four different ways serialization of this BST: three variations of depth-first traversal and one that is breadth-first traversal.

## Depth-first Traversal

Let's start with one variant depth-first traversals: pre-order traversal. The basic gist is that for each of the nodes, you process the node (in our case, save it to an array since we're serializing this tree,) then process the left subtree and then the right tree. Let's write out that works.

Given the above tree:

1. Call our method (let's call it preorderTraverse) on the root node, 8.
1. Add 8 to our array.
1. Call preorderTraverse on the left child, 3.
1. Add 3 to our array.
1. Call preorderTraverse on the left child, 1.
1. Add 1 to our array.
1. Has no children, returns.
1. Going back up the tree, we'll call preorderTraverse on 6.
1. Add 6 to our array.
1. Call preorderTraverse on the left child, 4.
1. Add 4 to our array.
1. No children, returns.
1. Going back up the tree, we'll call preorderTraverse on 7.
1. Add 7 to the array.
1. So on and so forth.

We end up with the array of `[8, 3, 1, 6, 4, 7, 10, 14, 13]`. This is called preorder traversal.

The other variants are quite similar; the only thing we do is change the order. When I say "process the node," I mean you do whatever operation you're going to do: add it to an array, copy the node, or whatever that may be.

In preorder traversal, you process the node, then recursively call the method on the left subtree and then the right subtree.

In inorder traversal, you first recursively call the method on the left tree, then process the node, and then call the method on the right tree.

Postorder traversal, as you have guessed, you recursively call the method on the left subtree, then the left subtree, then you process the node. The results of these are as follows:

```
// preorder
[8, 3, 1, 6, 4, 7, 10, 14, 13]

// inorder
[1, 3, 5, 6, 7, 8, 10, 13, 14]

// postorder
[1, 4, 7, 6, 3, 13, 14, 10, 8]
```

As you can see, it depends on what you're doing on which of these you use. For a sorted list out of a BST, you'd want to use inorder. If you're making a deep copy of a tree, preorder traversal is super useful since you'd copy a node, and then add its left child and then its right tree. Postorder would be useful if you're deleting a tree since you'd process the left tree, then the right, and only after the children had been deleted would you delete the node you're working on.

So let's go give this a shot!

* [Exercise][cp-depth-first]
* [Completed Pen][cp-depth-first-answer]

## Breadth-first Traversal

Now that you've done depth-first, let's tackle breadth-first. Breadth-first isn't recursive processing of subtrees like depth-first. Instead we want to process one layer at a time. Using the tree above, we want the resulting order to `[8, 3, 10, 1, 6, 14, 4, 7, 13]`. In other words, we start at the root, and slowly make our way "down" the tree.

The way we accomplish this is using our old friend, the queue. If you want to review what queues are, check out [the previous course's section on them here][queue]. The short of it is that queues are first-in first-out.

What we're going to do is process the node, then add the left child to the queue and then add the right child to the queue. After that, we'll just dequeue an item off of the queue and call our function recursively on that node. You keep going until there's no items left in the queue.

Let's do the exercise! This can be solved recursively or iteratively, with the iterative result being the preferred of the two.

* [Exercise][cp-breadth-first]
* [Completed Pen][cp-breadth-first-answer]

Breadth-first traversals are useful for many things and we'll be using the algorithm when we do path-finding, but the gist of when you use them is that you know the answer for what you're looking for is "closer" to the root node as opposed to far away when you would use depth-first. Again, it's all trade-offs.

[bst]: https://btholt.github.io/four-semesters-of-cs/
[queue]: https://btholt.github.io/four-semesters-of-cs/
[cp-depth-first-answer]: https://codepen.io/btholt/pen/rprwwm?editors=0010
[cp-depth-first]: https://codepen.io/btholt/pen/jYpwQV?editors=0010
[cp-breadth-first-answer]: https://codepen.io/btholt/pen/WdgRrB?editors=0010
[cp-breadth-first]: https://codepen.io/btholt/pen/wpEgdb?editors=0010
