<template>
  <div v-theme:column="'narrow'" id="show-blogs">
    <h1>All Blog Articles</h1>
    <input
      id="blog-search"
      type="text"
      v-model="search"
      placeholder="search in title"
    />
    <div v-for="blog in filteredBlogs" :key="blog.id" class="single-blog">
      <h2 v-rainbow="">{{ blog.title | toUppercase }}</h2>
      <article>{{ blog.content | snippet }}</article>
      <router-link :to="{ name: 'blog', params: { id: blog.id } }"
        >Show more
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
      .get("https://vue-blog-abfd7-default-rtdb.firebaseio.com/posts.json")
      .then((response) => response.json())
      .then((data) => {
        this.blogs = Object.keys(data).map((id) => {
          return { id, ...data[id] };
        });
        console.log(this.blogs);
        return this.blogs;
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
.single-blog * {
  margin: 1rem;
}
input {
  max-width: 500px;
}
</style>
