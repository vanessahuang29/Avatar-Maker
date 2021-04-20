<template>
  <section class="px-8">
    <div>
      <router-link to="/avatars"> Back</router-link>
      <div class="flex">
        <div class="w-1/4">
          <AvatarBody :avatar="avatar" />
        </div>
        <div>
          <h1>{{ avatar.name }}</h1>
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
      form: {},
      avatar: null,
    };
  },
  components: {
    AvatarBody,
  },
  firestore: {
    // avatars: db.collection("avatars"),
  },
  methods: {
    getAvatar() {
      db.collection("avatars")
        .doc(this.$route.params.id)
        .get()
        .then((snapshot) => {
          // console.log(snapshot.data());
          this.avatar = snapshot.data();
          // do something with document
        });
    },
  },
  // do on load
  mounted() {
    this.getAvatar();
    // retrieve a document
  },
};
</script>
