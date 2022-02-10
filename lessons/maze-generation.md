---
title: "Generating a Maze"
path: "/maze-generation"
order: 6
---

We're going back to working on mazes but with slightly different twist. With pathfinding we were trying to find the shortest path between point A and point B. In this lesson we're going to be trying to generate a random and curvy maze. I find this to be a pretty fun exercise.

As you may imagine, there are many ways to accomplish this task, each with varying sets tradeoffs you need to make. Some produce very straight paths, some take less time to process, and others are easier to implement. Check out [here][algos] for an overview of many of the most common ones. I'd recommend checking it out because he has nice JavaScript demos of each algorithm.

In particular we will be focusing on the [recursive backtracking algorithm][buckblog]. The idea of this algorithm is similar to what we've done before. We're going to treat the maze as a graph. As opposed to before, each node will keep track of each of it's borders: north, east, south, and west. For this exercise, assume [0, 0] is the most southwestern corner of the grid. We will start with every node in the grid having walls on all four sides, and this algorithm will slowly take down walls.

We will start at an origin point (provided to you) and then we will call a function that will give us back a randomized list of directions to try. As opposed to processing a binary search tree where you always processed the left tree first, in this one you will call a function (in our example it's be called `randomizeDirections()`) that will give you back an array of `['n', 'e', 's', 'w']` in a random order. From there you will process your nodes in that order. If the next node to go to is unvisited, you will "knock down" the walls between the two nodes, remembering that if I go north on a node, I need to tear down the north wall of that node **and** the the south wall of the other node. If a node has been visited, you simply return and continue on processing the previous node.

Again, this is similar to something else we've already learned: depth-first traversal. The previous times we've used breadth-first but in this case depth-first will be more useful. There are other methods of maze generation that are more similar to breadth-first.

Let's do a simple example.

<table class="example-table">
  <tr>
    <td>
    <td>
    <td>
  </tr>
  <tr>
    <td>
    <td>
    <td>
  </tr>
  <tr>
    <td class="current">
    <td>
    <td>
  </tr>
</table>

In this example, we'll start our maze at [0,0] (colored pink.) First thing we'll do is mark this node as "visited" so we don't process it again later. Then we'll call `randomizeDirections()`. Let's assume it hands back `['w', 'n', 's', 'e']`. We'll try to go to [-1, 0] but since that's out of bounds, we'll go to the next direction, north. Since [1, 0] has not been processed, we'll tear down the north wall of [0, 0] and the south wall of [1, 0].

<table class="example-table">
  <tr>
    <td>
    <td>
    <td>
  </tr>
  <tr>
    <td class="s current">
    <td>
    <td>
  </tr>
  <tr>
    <td class="n">
    <td>
    <td>
  </tr>
</table>

Notice we've moved on to processing [1, 0] now; we did not finish processing [0, 0], just like what happened with depth-first traversal of binary search trees. Once we've completed the rest of the [1, 0] and its subsequent calls (which probably be the rest of the grid) _then_ it will process. Okay, so let's say `randomizeDirections()` hands back `['s', 'w', 'e', 'n']`. We try to go south but since [0, 0] is already marked as visited we won't process it again. West is out of bounds, we'll end up going east. We'll tear down the walls between the two, making it look like:

<table class="example-table">
  <tr>
    <td>
    <td>
    <td>
  </tr>
  <tr>
    <td class="s e">
    <td class="w current">
    <td>
  </tr>
  <tr>
    <td class="n">
    <td>
    <td>
  </tr>
</table>

Okay, let's fast forward a bit. Next `randomizeDirectionCall()` gives us `['e', 's', 'n', 'w']` so we go right.

<table class="example-table">
  <tr>
    <td>
    <td>
    <td>
  </tr>
  <tr>
    <td class="s e">
    <td class="w e">
    <td class= "w current">
  </tr>
  <tr>
    <td class="n">
    <td>
    <td>
  </tr>
</table>

Then `['s', 'n', 'e', 'w']`.

<table class="example-table">
  <tr>
    <td>
    <td>
    <td>
  </tr>
  <tr>
    <td class="s e">
    <td class="w e">
    <td class= "w s">
  </tr>
  <tr>
    <td class="n">
    <td>
    <td class="current n">
  </tr>
</table>

Then `['w', 'e', 'n', 's']`.

<table class="example-table">
  <tr>
    <td>
    <td>
    <td>
  </tr>
  <tr>
    <td class="s e">
    <td class="w e">
    <td class= "w s">
  </tr>
  <tr>
    <td class="n">
    <td class="current e">
    <td class="w n">
  </tr>
</table>

Okay, now that we're here, we've run out of places to go, so we'll return and go up our recursion to previous we were.

<table class="example-table">
  <tr>
    <td>
    <td>
    <td>
  </tr>
  <tr>
    <td class="s e">
    <td class="w e">
    <td class= "w s">
  </tr>
  <tr>
    <td class="n">
    <td class="e">
    <td class="current w n">
  </tr>
</table>

This too has no where to go. So we'll go back up the stack.

<table class="example-table">
  <tr>
    <td>
    <td>
    <td>
  </tr>
  <tr>
    <td class="s e">
    <td class="w e">
    <td class= "current w s">
  </tr>
  <tr>
    <td class="n">
    <td class="e">
    <td class="w n">
  </tr>
</table>

Last time we were here, `randomizeDirection()` gave us `['s', 'n', 'e', 'w']`. We already went south, so we'll go the next one, north. You can probably see how this ends. So let's just leave you with the finished product here:

<table class="example-table">
  <tr>
    <td class="e">
    <td class="e w">
    <td class="s w">
  </tr>
  <tr>
    <td class="s e">
    <td class="w e">
    <td class= "n w s">
  </tr>
  <tr>
    <td class="n">
    <td class="e">
    <td class="w n">
  </tr>
</table>

There you have it! This algorithm will make sure that every node in the array is connected to one contiguous maze. It won't necessarily give you a "finish" but that's not terribly hard to do either: you'd just track the furthest point away and mark that as the end.

Let's have you go give it a shot. Make sure to read the comments in the CodePen! I've provided a lot of functionality for you so you can focus on the maze generation.

* [Exercise][exercise]
* [Completed][completed]

[completed]: https://codepen.io/btholt/pen/rJxOyK?editors=0010
[exercise]: https://codepen.io/btholt/pen/YeWjNO?editors=0010
[algos]: http://weblog.jamisbuck.org/2011/2/7/maze-generation-algorithm-recap
[buckblog]: http://weblog.jamisbuck.org/2010/12/27/maze-generation-recursive-backtracking
