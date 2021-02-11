import ShowBlogs from "./components/ShowBlogs.vue";
import AddBlog from "./components/AddBlog.vue";
import SingleBlog from "./components/SingleBlog.vue";
import ListBlogTitles from "./components/ListBlogTitles.vue";

export default [
  {
    path: "/",
    component: ShowBlogs,
    name: "home"
  },
  {
    path: "/add",
    component: AddBlog,
    name: "add"
  },
  {
    path: "/list",
    component: ListBlogTitles,
    name: "list"
  },
  {
    path: "/blog/:id",
    component: SingleBlog,
    name: "blog"
  }
];
