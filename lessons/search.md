---
title: "Searching for an Element in an Array"
path: "/search"
order: 7
---

This is a bit of a glaring omission from part one but we're going to fix it now: searching! This very similar to sorting, as you'll quickly figure out. Search is the act of looking for a particular element in an array.

There are essentially two common ways of doing search: linear search and binary search. The former is the simplest code and really only useful if the list you're searching on is not sorted in any way. You just go through from 0 to the length of the array and ask "is the is the element I'm looking for?" No frills here. Its complexity is O(n).

Binary search is a bit more interesting. It only works if the array is already sorted. To explain it, let's take the example of how you find a name in a telephone book (if you even know what that is anymore!) A telephone book is a sorted list of names. You'll open the book more or less to the middle (or say you do, for argument's sake.) From there, if the name you're looking for is smaller/earlier in the alphabet, you'll go halfway to the smaller/earlier side of the book, and so-on-and-so-forth, keeping going halfway until eventually you land on the name you're looking for. Let's see how that works in practice.

```
[0, 5, 10, 12, 15, 19, 21, 22, 24, 30]

search for 12

start in the middle, is 19 === 12? no, smaller, go left

look in the middle of the smaller half, 10 === 12? no, larger, go right

look in the middle of the larger half (which is now just one number), is 12 === 12? yes, found element
```

This turns out to work quickly even on extremely large datasets. Its complexity is O(log n). Let's implement them!

* [Exercise][exercise]
* [Completed][completed]

If you'd like to see how binary vs linear search performs, [check out this JSPef benchmark][perf]. I threw in Lodash's find function as well to show you something: you need to understand the tools you're using. While Lodash's find function works and works well, it's not made for the situation we're throwing at it: finding an element in a large sorted array. Because of this, it's not going to perform well in this situation. However if you're only operating occasionally on a small array, it doesn't matter if your algorithm is O(log n) or O(n), just use whatever find method that's easiest to use. Just make sure you're making the trade-offs consciously!

[exercise]: https://codepen.io/btholt/pen/wydwQg?editors=0010
[completed]: https://codepen.io/btholt/pen/ZrKzea?editors=0010
[perf]: https://jsperf.com/linear-vs-binary-search-4cs
