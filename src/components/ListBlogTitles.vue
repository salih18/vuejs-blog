<template>
  <div v-theme:column="'narrow'" id="show-blogs">
    <h1>Blog Titles</h1>
    <input
      id="blog-search"
      type="text"
      v-model="search"
      placeholder="search blogs"
    />
    <div v-for="blog in filteredBlogs" :key="blog.id" class="single-blog">
      <h2 v-rainbow="">{{ blog.title | toUppercase }}</h2>
      <router-link :to="{ name: 'blog', params: { id: blog.id } }"
        >Go to Blog
      </router-link>
    </div>
  </div>
</template>

<script>
import searchMixin from "./../mixins/searchMixin";

export default {
  data() {
    return {
      blogs: [],
      search: "",
    };
  },
  methods: {},
  computed: {},
  created() {
    this.$http
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((data) => {
        console.log({ data });
        this.blogs = data.body.slice(0, 10);
      });
  },
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    },
  },
  directives: {
    rainbow: {
      bind(el, binding, vnode) {
        el.style.color = `#${Math.random().toString().slice(2, 8)}`;
      },
    },
  },
  mixins: [searchMixin],
};
</script>

<style>
#show-blogs {
  max-width: 800px;
  margin: 0px auto;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>
