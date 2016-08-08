# node.express.utility.except
A helper utility for Express.JS routes, This can be used to stop middleware from being used on particular routes particular.

Inspired by [this answer on StackOverflow](http://stackoverflow.com/a/27118077).


## Usage
Simply add the path you want to exclude from having hte middleware.
The example below will exclude the admin section from recieving the middleware. 

```Javascript
this.app.use(except(/\/admin\/(.*)/, middleware));

```
