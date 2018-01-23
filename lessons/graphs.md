---
title: "Graphs"
path: "/graphs"
order: 30
---

Let's chat about a datastructure that is extremely useful, you probably interact with many on daily basis, but you may not use them in your code on a day-to-day: graphs. Graphs are all about modeling relations between many items. For example, think of Facebook's Social Graph. I'm friends with you and you're friends with me. But you're also friends with six hundred other people which is about five hundred fifty too many. Those people in turn also have too friends. But many of my friends are your friends, so the connections aren't linear, they're … well, they're graph-like.

In the Facebook example, each person would be a node. A node represents some entity, much like a row in an SQL database. Every so-called "friendship" would be called an edge. An edge represents some connection between two items. In this case, our Facebook friendship is bidirectional: if I'm friends with you then you're friends with me. Twitter would be an example of a unidirectional edge: just because I follow you doesn't mean you follow me.

Graphs are **everywhere**. Your various social networks, your Internet of Things devices that have relationships with each other, your neural-networks machine-learning libraries, everywhere. As we continue to model more-and-more of the natural world in virtual space graphs become ever-more important since relationships between things and beings exist all around us.

In your example, you'll be tracing a made-up social network. In this social network, you're going to be trying to find the most common job title amongst the people you follow. At the first level, it's easy, you just look at your immediate connections and loop over them and see what their jobs are. However, if we go further than that, we have to look at connections' connections! Hopefully this sounds vaguely familiar … it sort of sounds like trees. Or pathfinding. Aw 💩 we have to use those same algorithms again!! So let's visualize a basic graph

```
   Bob — Sally
  /    \
me    Alice
  \    /
   Maria
```

In this case, let's say I'm looking for what the job titles are for the people within my second degree network: my connections and their connections, or no more than two edges away from me.
