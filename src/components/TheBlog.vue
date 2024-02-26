<template>
  <div class="row bg-light">
    <div class="row align-items-start">
      <div class="col-10">
        <div v-for="(post, index) in posts" v-bind:key="index">
          <h1 class="fw-bold">{{ post.title }}</h1>
          <p>Created at: {{ getFormattedDate(post.created_at) }}</p>
          <p v-html="post.content"></p>
          <hr />
        </div>
      </div>
      <div class="col-2">
        <div v-if="posts != null">
          <div v-for="(post, index) in posts" v-bind:key="index">
            <a :href="'/blog#' + post.title">{{ post.title }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios'
import { defineComponent } from 'vue'
import moment from 'moment'
import { postsDataUrl } from '/src/constants'
import {useBlogSectionStore} from "@/stores/blogSection";

export default defineComponent({
  data() {
    return {
      posts: null
    }
  },

  setup() {
    const store = useBlogSectionStore();
    return { store };
  },

  async created() {
    await this.getPosts()
  },

  methods: {
    async getPosts() {
      let postsLocal = await axios.get(postsDataUrl)
      this.posts = postsLocal.data

      if (this.posts !== null) {
        this.store.setBlogSectionVisible();
      } else {
        this.store.setBlogSectionInvisible();
      }
    },

    getFormattedDate(date: string) {
      return moment(date).format('YYYY-MM-DD')
    }
  }
})
</script>

<style scoped></style>
