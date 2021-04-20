<template>
  <section class="px-8">
        <p class="text-xl text-center p-4">My Avatars</p>
        <router-link to="/"><button class="float-right -mt-12 -mr-5 rounded-full w-8 h-8 bg-white text-black">+</button></router-link>
        <button class="float-right -mt-22 -mr-5 rounded-full w-8 h-8 bg-white">
        <img class="ml-2.5" src="../assets/trash.svg" width="12"></button>
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
      <router-link
        :to="'/avatar/' + avatar.id"
        v-for="avatar in avatars"
        :key="avatar.id"
        class="bg-white shadow-lg thumbnail"
      >
        <div class="p-2">
          <AvatarBody :avatar="avatar" />
          <h2 class="font-bold">{{ avatar.name }}</h2>
        </div>
      </router-link>
    </div>
  </section>
</template>
<script>
import { db } from "@/db";
// import UploadImage from "@/components/UploadImage.vue";
import AvatarBody from "@/components/AvatarBody.vue";
export default {
  data: function () {
    return {
      form: {
        hair_color: "orange",
        skin_color: "pink",
        shirt_color: "green",
        pants_color: "black",
        shoes_color: "red",
      },
      createModal: false,
      avatars: [],
    };
  },
  components: {
    AvatarBody,
  },
  methods: {
    // create
    openCreateModal() {
      this.form.hair_color = null;
      this.form.skin_color = null;
      this.form.shirt_color = null;
      this.form.pants_color = null;
      this.form.shoes_color = null;
      // open the modal
      this.createModal = true;
    },
    // store
    storeAvatar() {
      // store in firebase
      db.collection("avatars").add({
        hair_color: this.form.hair_color,
        skin_color: this.form.skin_color,
        pants_color: this.form.pants_color,
        shoes_color: this.form.shoes_color,
        shirt_color: this.form.shirt_color,
      });
      // close the modal
      this.createModal = false;
    },
    // edit
    // update
    // delete
    removeAvatar(id) {
      db.collection("avatars").doc(id).delete();
    },
  },
  firestore: {
    avatars: db.collection("avatars"),
  },
};
</script>
<style scoped>
.thumbnail .overlay {
  opacity: 0;
}

.thumbnail:hover .overlay {
  opacity: 1;
}
</style>