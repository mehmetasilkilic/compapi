<template>
  <div class="home">
    <PostList v-if="showPosts" :posts="posts" />
    <button @click="showPosts = !showPosts">Toggle Posts</button>
    <button @click="posts.pop()">Delete a Post</button>
  </div>
</template>

<script>
import PostList from "../components/PostList.vue";
import { ref } from "vue";

export default {
  name: "Home",
  components: { PostList },
  setup() {
    const posts = ref([
      {
        title: "welcome to the blog",
        body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit labore similique magni officiis consequatur iusto sequi, harum, quaerat qui possimus amet odio aliquam quibusdam excepturi reiciendis numquam, fuga provident quasi!  ",
        id: 1,
      },
      {
        title: "top 5 css tips",
        body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit labore similique magni officiis consequatur iusto sequi, harum, quaerat qui possimus amet odio aliquam quibusdam excepturi reiciendis numquam, fuga provident quasi!",
        id: 2,
      },
    ]);
    const showPosts = ref(true);

    return { posts, showPosts };
  },
};
</script>

<style>
</style>
