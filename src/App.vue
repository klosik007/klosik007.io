<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheMenu from './components/TheMenu.vue'
</script>

<template>
  <div class="container-fluid">
    <div class="row flex-nowrap">
      <div class="col-auto col-md4 col-xl-3 col-md-3 col-sm-3 bg-dark">
        <div class="d-flex flex-column align-items-center px-3 pt-2 text-white min-vh-100 sticky-top">
          <div>
            <img class="rounded-circle img-fluid" src="/src/assets/images/klosik007.jpg" alt="" loading="lazy"/>
            <a href="/" class="d-flex pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
              <span class="fs-5 d-none d-sm-inline">klosik007.io</span>
            </a>
          </div>
          <ul id="menu" class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center">
            <TheMenu />
          </ul>
        </div>
      </div>
      <div id="content" class="col py-3">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
