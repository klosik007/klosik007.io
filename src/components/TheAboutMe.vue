<script setup lang="ts">

</script>

<template>
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
        <div id="stack">

          <p class="lead text-decoration-underline">Stack</p>
          <p class="lh-1">
            • Programming languages: Kotlin, PHP7, JavaScript, HTML5/CSS
          </p>
          <p>
            • Frameworks:
            Android (Jetpack Compose, Hilt, Room, Retrofit), Vue.js
          </p>
          <p>
            • Databases:
            MySQL, SQLite
          </p>
          <p>
            • Unit testing:
            JUnit, Selenium, PHPUnit
          </p>
          <p>
            • Virtualization/Contanerization:
            VirtualBox, VMWare, Docker
          </p>
          <p>
            • API tools:
            Postman, Swagger
          </p>
          <p>
            • Monitoring tools:
            Wireshark
          </p>
          <p>
            • VCS:
            Git
          </p>
          <p>
            • Task manangement:
            Trello, MantisBT
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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