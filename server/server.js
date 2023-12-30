import express from "express";
import cors from "cors";
import morgan from "morgan";
import connect from "./database/connection.js";
import router from "./router/route.js";

const app = express(); //create express app

/**middlewares */

app.use(express.json()); //body parser
app.use(cors()); //cross origin resource sharing
app.use(morgan("tiny")); //logging
app.disable("x-powered-by"); //security-less hackers know we are using express

const port = 8080; //port number

/**HTTP get requests */
app.get("/", (req, res) => {
  //get request
  res.status(201).json("Home get request"); //send json response
});

/**API routes */
app.use("/api", router);

/**start server only when have a valid connection*/
connect()
  .then(async (db) => {
    try {
      app.listen(port, () => {
        //start server
        console.log(`Server is running on http://localhost:${port}`); //log message
      });
    } catch (error) {
      console.log("can't connect to database");
    }
  })
  .catch((error) => {
    console.log("Invalid database connection");
  });
