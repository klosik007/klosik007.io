<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheMenu from './components/TheMenu.vue'
import TheProjects from "@/components/TheProjects.vue";
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
            <div class="col-4 bg-black position-relative">
              <div class="position-absolute circlesPos">
                <div id="circles"></div> <!--TODO: adjust to several screen sizes and resolutions-->
              </div>
              <div class="position-absolute nameAttr">
                <p class="text-white">MY NAME IS PRZEMYSŁAW</p>
                <p class="text-black bg-warning text-nowrap">I'M A PHP DEVELOPER</p>
              </div>
            </div>
            <div class="col-8 bg-black">
              <!--my photo - compress it!!!-->
              <img src="/src/assets/images/IMG_7696.jpg" class="img-fluid" loading="lazy" alt="" />
            </div>
          </div>
        </section>

        <section id="aboutMe">
          <div class="row bg-light">
            <div class="col-6 mt-5 d-flex justify-content-center align-items-center">
              <div id="aboutMePhotos"></div>
            </div>
            <div class="col-6 mt-5 px-5 d-flex justify-content-center align-items-center">
              <div>
                <div class="lh-1">
                  <h2 class="hello">HELLO!&nbsp;&nbsp;</h2>
                </div>
                <p>
                  Software developer with 2 years of experience in developing, maintaining and testing software applications.
                  Strong analytical background with over 3 years of data analysis and scripting. Being a quick learner and having problem solving attitude.
                  Team player at its best. Independent and goals-oriented work ethics.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="myProjects">
          <div class="row bg-secondary-subtle">
            <the-projects />
          </div>
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

  .circlesPos {
    left: 15%;
    top: 10%;
  }

  .nameAttr {
    left: 50%;
    top: 40%;
    font-size: 3vw;
  }

  #circles {
    width: 18vi;
    height: 10vi;
    max-width: 100%;
    max-height: 100%;
    background-image: radial-gradient(circle at 3px 3px, slategrey 3px, transparent 0);
    background-size: 15% 20%;
  }

  #aboutMePhotos {
    background-image: url("/src/assets/images/fff.png"), linear-gradient(90deg, rgba(2,0,36,1) 100%, rgba(9,9,121,1) 100%, rgba(0,212,255,1) 100%);
    background-size: 28vi 28vi;
    background-repeat: no-repeat;
    background-position: left 80% top 70%, left 60% top 50%;
    width: 32vi;
    height: 32vi;
    max-width: 100%;
    max-height: 100%;
  }

  .hello {
    display: inline-block;
    border-bottom: 12px solid yellow;
    line-height: 0.2;
  }

</style>
