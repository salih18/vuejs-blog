<template>
  <div id="add-blog">
    <h2>Add a New Blog Post</h2>

    <form v-if="!submitted">
      <label> Blog Title </label>
      <input type="text" v-model.lazy="blog.title" required />
      <label> Blog Content </label>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        v-model.lazy="blog.content"
      ></textarea>
      <div id="checkboxes">
        <label>Food</label>
        <input type="checkbox" value="food" v-model="blog.categories" />
        <label>Travel</label>
        <input type="checkbox" value="travel" v-model="blog.categories" />
        <label>Music</label>
        <input type="checkbox" value="music" v-model="blog.categories" />
        <label>Sports</label>
        <input type="checkbox" value="sports" v-model="blog.categories" />
      </div>
      <label>Author</label>
      <select name="" id="" v-model="blog.author">
        <option v-for="(author, key) in authors" :key="key + 'author'">
          {{ author }}
        </option>
      </select>
      <button v-on:click.prevent="handleSubmit">Add Blog</button>
    </form>
    <div id="submitted" v-if="submitted">
      <h3>The post successfully posted</h3>
    </div>
    <div id="preview">
      <h3>Preview Blog</h3>
      <p>Blog Title: {{ blog.title }}</p>
      <p>Blog Content:</p>
      <p>{{ blog.content }}</p>
      <p>Blog Categories:</p>
      <ul>
        <li
          class="text-capitalize"
          v-for="(category, key) in blog.categories"
          :key="key"
        >
          {{ category }}
        </li>
      </ul>
      <p>Author: {{ blog.author }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        author: "",
      },
      authors: [
        "John Doe",
        "Demi Silva",
        "Randi Elsa",
        "Mahala Carley",
        "Kimball Shanelle",
        "Levi Loren",
        "Lark London",
      ],
      submitted: false,
    };
  },
  methods: {
    handleSubmit() {
      this.$http
        .post(
          "https://vue-blog-abfd7-default-rtdb.firebaseio.com/posts.json",
          this.blog
        )
        .then((data) => {
          this.submitted = true;
        });
    },
  },
};
</script>


<style>
#add-blog * {
  box-sizing: border-box;
}
#add-blog {
  margin: 20px auto;
  max-width: 500px;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],
textarea {
  display: block;
  width: 100%;
  padding: 8px;
}
#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3 {
  margin-top: 10px;
}
#checkboxes input {
  display: inline-block;
  margin-right: 10px;
}

#checkboxes label {
  display: inline-block;
}
.text-capitalize {
  text-transform: capitalize;
}
</style>
