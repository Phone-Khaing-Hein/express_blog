const Blog = require("../model/blog");

const index = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("blog/index", { blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
};

const create = (req, res) => {
  res.render("blog/create");
};

const add = (req, res) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => {
      console.log(err);
    });
};

const detail = (req, res) => {
  Blog.findById(req.params.id)
    .then((result) => {
      res.render("blog/detail", { blog: result });
    })
    .catch((err) => {
      res.status(404).render("404", { title: "404" });
    });
};
const edit = (req, res) => {
  Blog.findById(req.params.id)
    .then((result) => {
      res.render("blog/edit", { blog: result });
    })
    .catch((err) => {
      res.status(404).render("404", { title: "404" });
    });
};

const update = (req, res) => {
  Blog.findByIdAndUpdate(req.params.id, req.body)
    .then((result) => {
      res.redirect("/blogs/" + result._id);
    })
    .catch((err) => console.log(err));
};

const deleteBlog = (req, res) => {
  Blog.remove({ _id: req.params.id })
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => {
      res.status(404).render("404", { title: "404" });
    });
};

module.exports = {
  index,
  create,
  add,
  detail,
  edit,
  update,
  deleteBlog,
};
