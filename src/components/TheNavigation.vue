<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      activeSections: ['active', '', '', '', ''],
      blogSectionAvailable: localStorage.getItem("blogSection") === "true"
    }
  },

  methods: {
    setSectionAsActive(idx: number) {
      for (let i = 0; i < this.activeSections.length; i++) {
        this.activeSections[i] = ''
      }

      this.activeSections[idx] = 'active'
    },
  }
})
</script>

<template>
  <nav class="navbar sticky-top navbar-expand-lg bg-black row">
    <div class="col-4">
      <a class="navbar-brand text-white" href="#">klosik007.io</a>
    </div>
    <div class="collapse navbar-collapse d-flex justify-content-center col-8">
      <ul class="nav nav-underline lh-1">
        <li class="nav-item px-1">
          <a
            @click="setSectionAsActive(0)"
            class="nav-link text-white"
            :class="[activeSections[0]]"
            href="#"
            >Home</a
          >
        </li>
        <li class="nav-item px-1">
          <a
            @click="setSectionAsActive(1)"
            class="nav-link text-white"
            :class="[activeSections[1]]"
            href="#aboutMe"
            >About Me</a
          >
        </li>
        <li class="nav-item px-1">
          <a
            @click="setSectionAsActive(2)"
            class="nav-link text-white"
            :class="[activeSections[2]]"
            href="#myProjects"
            >My Projects</a
          >
        </li>
        <li v-if="blogSectionAvailable" class="nav-item px-1">
          <a
            @click="setSectionAsActive(3)"
            class="nav-link text-white"
            :class="[activeSections[3]]"
            href="#blog"
            >Blog</a
          >
        </li>
        <li class="nav-item px-1">
          <a
            @click="setSectionAsActive(4)"
            class="nav-link text-white"
            :class="[activeSections[4]]"
            href="#contact"
            >Contact</a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.nav-link.active {
  border-bottom: solid 0.25rem yellow;
}
</style>
