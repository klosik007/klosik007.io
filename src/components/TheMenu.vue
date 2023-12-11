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
  <li class="nav-item">
    <RouterLink to="/contact" class="nav-link align-middle px-0">
      <i class="bi bi-person-lines-fill"></i><span class="ms-1 d-none d-sm-inline">Contact</span>
    </RouterLink>
  </li>
</template>

<style scoped>

</style>
