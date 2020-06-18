---
id: routing-architecture
title: Routing Architecture
sidebar_label: Routing Architecture
---
**In Gearbox** :gear:, we rely on **Radix Tree algorithm** for matching requests with user registered handlers (routing) and it's split in two phases
- Constructing Radix Tree
- Matching requests with user registered handlers using tree (our optimization focus is here to serve **as fast as** possible)

<br />
<p align="center">
<img src="https://user-images.githubusercontent.com/16365652/82431454-ef5b6800-9a8e-11ea-9a2a-717b19f29ff3.png" height="300px"/>
</p>

**When user starts service**, gearbox constructs a tree of prefixes by splitting each registered path by slash "/".
Each node in tree represents a URL part (Keyword) and contains all information needed for routing (e.g. is this node will be used for match all, available methods and user registered handlers, middlewares, etc.)

### References
- [Radix Tree](https://en.wikipedia.org/wiki/Radix_tree)