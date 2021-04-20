<template>
  <section class="px-8 mt-10">
    <div>
  <button @click="saveAvatar()" class="float-right">Next</button>
  <router-link to="/">
  <img src="../assets/back.svg" width="16" height="16">
  </router-link>
      <div class="flex">
        <div class="w-72 mr-12 ml-20 mt-20 justify-center items-center trandform-scale-150">
          <AvatarBody :avatar="form" />
        </div>
        <div
          class="absolute inset-x-0 bottom-0 bg-white border-gray-200 border shadow-xl p-8"
        >
        <div class="flex justify-between">
          <div>
            <label for="hair_color"><img src="../assets/hair.svg" width="40"></label>
            <el-color-picker v-model="form.hair_color" size="mini"></el-color-picker>
          </div>

          <div>
            <label for="skin_color"><img src="../assets/skin.svg" width="35"></label>
            <el-color-picker v-model="form.skin_color" size="mini"></el-color-picker>
          </div>
          <div>
            <label for="shirt_color"><img src="../assets/shirt.svg" width="45"></label>
            <el-color-picker v-model="form.shirt_color" size="mini"></el-color-picker>
          </div>
          <div>
            <label for="pants_color"><img src="../assets/pants.svg" width="30"></label>
             <el-color-picker v-model="form.pants_color" size="mini"></el-color-picker>
          </div>
         <div>
            <label for="shoes_color"><img src="../assets/shoes.svg" width="40"></label>
             <el-color-picker v-model="form.shoes_color" size="mini"></el-color-picker>
          </div>
        </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { db } from "@/db";
import AvatarBody from "@/components/AvatarBody.vue";

export default {
  data: function () {
    return {
      form: {
        hair_color: "orange",
        skin_color: "pink",
        shirt_color: "green",
        pants_color: "black",
        shoe_color:"red",
      },
    };
  },
  components: {
    AvatarBody,
  },
  methods: {
    saveAvatar() {
      db.collection("avatars").add(this.form);
      this.$router.push("avatars");
    },
  },
};
</script>
