This is a basic server setup using Express step by step guide for beginners.
Steps Involved:
1. Create Directory -> mkdir backend
2. Create index.js file -> touch index.js
3. Initialize npm -> npm init -y
4. Install Express -> npm i express
5. Change file type of index.js in package.json to module -> go to package.json-> add this line after main: "index.js", -> type: "module",
6. Write code for server in index.js
   6.1 import express form "express"
   6.2 Define const app= express();
   6.3 Make server listen at port
       const port=3000
       app.listen(port, () => {
           console.log("server is running");
       });
7. Run your server->In terminal-> nodemon index.js (if nodemon is installed, otherwise-> node index.js)
8. Go to localhpst 3000, error recieved related to GET, in console, "server is running" message recieved
9. Now to get from server ->
    app.get("/",(req, res) => {
        res.send("Hello World, Home page");
    });  //here since the page specified to get is home page, we can add more pages like this
10. Save and go to localhost 3000, everything should work fine.
