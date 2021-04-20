<template>
  <section class="px-8">
    <div>
      <router-link to="/"> <img src="../assets/back.svg" width="20" height="20"></router-link>
      <router-link to="/avatars"> <button @click="saveAvatar()" class="btn float-right"><img src="../assets/done.svg" width="30" height="30"></button></router-link>
      <div class="flex">
        <div class="w-72 mr-12">
          <AvatarBody :avatar="form" />
        </div>

        <div class="absolute inset-x-0 bottom-0 w-72 bg-white border-gray-200 border shadow-xl p-8">
          <div>
            <label for="hair_color">Hair Color</label>
            <input type="color" v-model="form.hair_color" />
          </div>

          <div>
            <label for="head_color">Head Color</label>
            <input type="color" v-model="form.head_color" />
          </div>
          <div>
            <label for="body_color">Body Color</label>
            <input type="color" v-model="form.body_color" />
          </div>
          <div>
            <label for="hair_shape">Hair Shape</label>
            <select name="hair_shape" id="hair_shape" v-model="form.hair_shape">
              <option value="triangle">Triangle</option>
              <option value="hexagon">Hexagon</option>
            </select>
          </div>
          <div>
            <label for="eye_color">Eye Color</label>
            <input type="color" v-model="form.body_color" />
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
        hair_color: "black",
        head_color: "green",
        body_color: "blue",
        hair_shape: "triangle",
      },
    };
  },
  components: {
    AvatarBody,
  },
  methods: {
    saveAvatar() {
      db.collection("avatars").add(this.form);

      // window.location.replace("/avatars");
    },
  },
};
</script>
