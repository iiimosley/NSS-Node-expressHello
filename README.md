# Express.Js: Hello World! + Current Time

### Goals
+ Pass an environment variable of `PORT` into the first argument of a terminal command to determine the server port 
+ Set url routing with Express.Js `GET` method 

### Directives
+ Create a server with using the `LISTEN` Express.Js method 
+ Provide two URL routes with the Express `GET` method
  + `/`:  print the simple phrase 'Hello World' 
  + `/time`: print the current date & time in ISO format

Implement the environment variable `PORT` to establish a defined port on the command line:
```
$ PORT=1337 node express-hello-world.js
```

or have the port default to 8080, when no `PORT` value is established:
```
$ node express-hello-world.js
```
