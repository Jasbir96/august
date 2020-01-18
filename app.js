const express = require("express");
const app = express();
const users = require("./data/users");
const planRouter = require("./routers/planRouter");
const userRouter = require("./routers/userRouter");
// converts buffer to json
// => static files
app.use(express.static("public"));


// pug => render
app.set("view engine", "pug");
app.set("views", "views");
app.use(express.json());
app.get("/", function(req, res) {
  console.log(req.url);
  res.render("base.pug");
});





app.use("/api/plans", planRouter);
app.use("/api/users", userRouter);

// app.get("/plans",);
// createPlans
// plans/1
// plans/2
// app.patch("/plans/:id", );
// createPlan
// app.post("/plans");

// user
app.get("/users");

app.listen(3000, () => {
  console.log("Server is listening at port 3000");
});
