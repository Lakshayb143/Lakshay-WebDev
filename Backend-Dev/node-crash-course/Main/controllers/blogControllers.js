// blogs_index , blog_details , blog_create_get , blog_create_post , blog_delete
const Blog = require("../models/blog");

const blog_index = (request, response) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((blogs) => {
      response.render("index", { title: "All Blogs", blogs });
    })
    .catch((err) => console.log(err));
};

const blog_details = (request, response) => {
  const id = request.params.id;
  // console.log(id);
  Blog.findById(id)
    .then((result) => {
      response.render("details", { blog: result, title: "Blogs Details" });
    })
    .catch((err) => {
      response.status(404).render("404", { title: "blog not found" });
    });
};

const blog_create_get = (request, response) => {
  response.render("create", { title: "New Blog" });
};

const blog_create_post = (request, response) => {
  const blog = new Blog(request.body);

  blog
    .save()
    .then(() => response.redirect("/blogs"))
    .catch((err) => console.log(err));
};

const blog_delete = (request, response) => {
  const id = request.params.id;

  Blog.findByIdAndDelete(id)
    .then((result) => {
      // response.redirect("/blogs"); // can't do here because of ajax request
      response.json({ redirect: "/blogs" });
    })
    .catch((err) => console.log(err));
};

module.exports = {
  blog_index,
  blog_details,
  blog_create_get,
  blog_create_post,
  blog_delete,
};
