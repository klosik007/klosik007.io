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

export default defineComponent({
  data() {
    return {
      posts: null
    }
  },

  async created() {
    await this.getPosts()
  },

  methods: {
    async getPosts() {
      this.posts = await axios.get(postsDataUrl).then((response) => response.data)

      if (this.posts !== null) {
        localStorage.setItem("blogSection", "true")
      } else {
        localStorage.setItem("blogSection", "false")
      }
    },

    getFormattedDate(date: string) {
      return moment(date).format('YYYY-MM-DD')
    }
  }
})
</script>

<style scoped></style>
