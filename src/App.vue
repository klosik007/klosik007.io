<script setup lang="ts">
  import AboutMeView from "@/views/AboutMeView.vue";
  import ProjectsView from "@/views/ProjectsView.vue";
  import BlogView from "@/views/BlogView.vue";
  import ContactView from "@/views/ContactView.vue";
  import HomeView from "@/views/HomeView.vue";
  import FooterView from "@/views/FooterView.vue";
  import TheNavigation from "@/components/TheNavigation.vue";
</script>

<template>
  <div class="container-fluid">
    <div class="row position-relative">
      <div class="col-9 position-absolute top-0 start-50 translate-middle-x">
        <TheNavigation />

        <section id="home">
          <HomeView />
        </section>

        <section id="aboutMe">
          <AboutMeView />
        </section>

        <section id="myProjects">
          <ProjectsView />
        </section>

        <section id="blog">
          <BlogView />
        </section>

        <section id="contact">
          <ContactView />
        </section>

        <section id="footer">
          <FooterView />
        </section>
      </div>
    </div>
  </div>
</template>
