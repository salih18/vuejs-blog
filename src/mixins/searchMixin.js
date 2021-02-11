export default {
  computed: {
    filteredBlogs() {
      return this.blogs.filter(blog => blog.title.toLowerCase().match(this.search));
    }
  }
};
