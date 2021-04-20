<template>
  <div class="home">
    <div class="flex justify-center p-8 mt-20">
      <h1>Avatar Maker</h1>
    </div>
    <div class="flex justify-center">
      <p class="text center">Welcome to Avatar Maker!</p>
    </div>
    <div class="flex justify-center">
      <p class="text center">Create your own avatar for free</p>
    </div>
    <div class="flex justify-center mt-10">
      <p>Please select a gender</p>
    </div>
    <div class="flex justify-center">
      <p>by clicking on the image</p>
    </div>
    <section class="grid grid-cols-2 gap-8 p-8">
      <router-link to="/create-male-avatar">
        <img src="../assets/male avatar-icon.svg" />
      </router-link>
      <router-link to="/create-female-avatar">
        <img src="../assets/female avatar-icon.svg" />
      </router-link>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>
<style scoped>
</style>
