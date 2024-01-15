<script setup lang='ts'>
import { RouterLink } from 'vue-router'
</script>

<template>
  <li class="nav-item">
    <RouterLink to="/" class="nav-link align-middle px-0">
      <i class="bi bi-house"></i><span class="ms-1 d-none d-sm-inline">Home</span>
    </RouterLink>
  </li>
  <li class="nav-item">
    <RouterLink to="/aboutme" class="nav-link align-middle px-0">
      <i class="bi bi-file-earmark-person"></i><span class="ms-1 d-none d-sm-inline">About me</span>
    </RouterLink>
  </li>
  <li class="nav-item">
    <RouterLink to="/projects" class="nav-link align-middle px-0">
      <i class="bi bi-grid"></i><span class="ms-1 d-none d-sm-inline">Projects</span>
    </RouterLink>
  </li>
  <!-- <li>
    <RouterLink to="/blog" class="nav-link align-middle px-0">
      <i class="bi bi-pen"></i><span class="ms-1 d-none d-sm-inline">Blog</span>
    </RouterLink>
  </li> -->
  <div class="align-items-center mt-3">  
    <a href="https://github.com/klosik007" target="_blank"><img class="float-lg-start  float-md-start float-sm-start px-2" src="../assets/icons/github.svg" alt="" /></a>
    <a href="https://www.linkedin.com/in/przemysław-kłos-5a524613a" target="_blank"><img class="float-lg-start float-md-start float-sm-start px-2" src="../assets/icons/linkedin.svg" alt="" /></a>
  </div>
</template>

<style scoped>

img:hover {
  filter: invert(100%);
}

</style>
