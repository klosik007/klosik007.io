<script setup lang="ts"></script>

<template>
  <div class="row bg-black">
    <div class="text-center mt-3">
      <h3 class="text-bg-warning inTouchTextInlineBlock">Let's get in touch!</h3>
      <h2 class="text-white">CONTACT ME</h2>
      <div class="row mt-4 mb-4">
        <div class="col-4">
          <img src="../assets/icons/envelope.svg" alt="Bootstrap" width="32" height="32" />
          <a href="mailto:pklos1992@gmail.com" class="link-light link-underline-opacity-0 ms-1" target="_blank">pklos1992@gmail.com</a>
        </div>
        <div class="col-4">
          <img src="../assets/icons/phone.svg" alt="Bootstrap" width="32" height="32" />
          <a href="tel:+48512655100" class="link-light link-underline-opacity-0 ms-1" target="_blank">+48 512 655 100</a>
        </div>
        <div class="col-4">
          <img  src="../assets/icons/geo-alt.svg" alt="Bootstrap" width="32" height="32" />
          <span class="text-white ms-1">Gdańsk</span>
        </div>
      </div>
      <div class="mb-3">
        <a href="https://github.com/klosik007" target="_blank"
          ><img class="px-2" src="../assets/icons/github.svg" alt=""
        /></a>
        <a href="https://www.linkedin.com/in/pklos" target="_blank"
          ><img class="px-2" src="../assets/icons/linkedin.svg" alt=""
        /></a>
      </div>
    </div>
  </div>
</template>

<style scoped>
img:hover {
  filter: invert(50%);
}

.inTouchTextInlineBlock {
  display: inline-block;
}
</style>
