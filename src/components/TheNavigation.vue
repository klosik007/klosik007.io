<script setup lang="ts">

</script>

<template>
  <nav class="navbar navbar-expand-lg bg-black col-4 d-flex justify-content-center sticky-top">
    <a class="navbar-brand text-white" href="#">klosik007.io</a>
  </nav>
  <nav class="navbar navbar-expand-lg bg-secondary col-8 sticky-top">
    <div class="collapse navbar-collapse d-flex justify-content-center">
      <ul class="nav nav-underline lh-1">
        <li class="nav-item px-1">
          <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item px-1">
          <a class="nav-link text-white" href="#aboutMe">About Me</a>
        </li>
        <li class="nav-item px-1">
          <a class="nav-link text-white" href="#myProjects">My Projects</a>
        </li>
        <li class="nav-item px-1">
          <a class="nav-link text-white" href="#blog">Blog</a>
        </li>
        <li class="nav-item px-1">
          <a class="nav-link text-white" href="#contact">Contact</a>
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