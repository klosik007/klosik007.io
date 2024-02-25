<script setup lang="ts">

</script>

<template>
  <div class="row">
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
</template>

<style scoped>
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

</style>
