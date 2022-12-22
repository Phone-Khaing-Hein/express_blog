const express = require("express");
const res = require("express/lib/response");
const mongoose = require("mongoose");
const blogRoutes = require("./route/blogRoute");

const app = express();

const dbURI =
  "mongodb+srv://phonekhainghein:test123@cluster0.ioajknj.mongodb.net/blogs";
mongoose.set("strictQuery", false);
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.redirect("/blogs");
});
app.use("/blogs", blogRoutes);

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
