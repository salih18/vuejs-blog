<template>
  <div>
    <app-header> </app-header>
    <router-view> </router-view>
  </div>
</template>

<script>
import AddBlog from "./components/AddBlog.vue";
import ShowBlogs from "./components/ShowBlogs.vue";
import ListBlogTitles from "./components/ListBlogTitles.vue";
import Header from "./components/Header.vue";

export default {
  components: {
    "add-blog": AddBlog,
    "show-blogs": ShowBlogs,
    "list-blog-titles": ListBlogTitles,
    "app-header": Header,
  },
  data() {
    return {};
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: "Nunito SemiBold";
}
</style>
