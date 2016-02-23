This is a simple http server in Node with a blocking code.

Blocking code must be avoided in NodeJS because no one request can start on
the worker until the blocked code has finished. In real situation, every
developers care about this. Here, is just a try to show easily what happen if
your logic is heavy / too long / expensive.

To try it, run server :
`node simpleHttp.js`

Open browser and two tabs on this address :

- Tab1 : http://localhost:8080/?time=10
- Tab2 : http://localhost:8080/?time=1

Resulting :

In normal way, the Tab2 should respond into 1 seconds. But it respond into
11 seconds because the first tab block current thread of Node until 10 seconds
passed.

This is a case of blocking code, but in large project, blocking code arise
quickly.
