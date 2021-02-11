<template>
  <div v-theme:narrow id="single-blog">
    <h1 v-rainbow>{{ blog.title | toUppercase }}</h1>
    <article>{{ blog.content }}</article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      blog: {
        title: "",
        body: "",
      },
    };
  },
  created() {
    this.$http
      .get(
        `https://vue-blog-abfd7-default-rtdb.firebaseio.com/posts/${this.id}.json`
      )
      .then((response) => response.json())
      .then((data) => (this.blog = data));
  },

  directives: {
    rainbow: {
      bind(el, binding, vnode) {
        el.style.color = `#${Math.random().toString().slice(2, 8)}`;
      },
    },
  },
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    },
  },
};
</script>

<style scoped>
#single-blog {
  max-width: 600px;
  margin: 2rem auto;
}
</style>