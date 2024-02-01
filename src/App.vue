<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheMenu from './components/TheMenu.vue'
</script>

<template>
  <div class="container-fluid">
    <div class="row position-relative">
      <div class="col-9 position-absolute top-0 start-50 translate-middle-x">
        <section id="card">
          <div class="row">
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
            <div class="col-4 bg-black position-relative">
              <div class="position-absolute start-0 top-0">

              </div>
              <div class="position-absolute start-50 top-50">
                <p class="text-white fs-1">MY NAME IS PRZEMYSŁAW</p>
                <p class="bg-warning fs-1 text-black text-nowrap">I'M A PHP DEVELOPER</p>
              </div>
            </div>
            <div class="col-8 bg-black">
              <!--my photo - compress it!!!-->
              <img src="/src/assets/images/IMG_7696.jpg" class="img-fluid" loading="lazy" alt="" />
            </div>
          </div>
        </section>

        <section id="aboutMe">

        </section>
        <section id="myProjects">

        </section>
        <section id="blog">

        </section>
        <section id="contact">

        </section>
        <section id="footer">

        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .nav-link.active {
    border-bottom: solid 0.25rem yellow;
  }


</style>
