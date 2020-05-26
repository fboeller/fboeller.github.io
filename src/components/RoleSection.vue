<template>
  <div>
    <RoleInfo
      v-bind:position="role.position"
      v-bind:description="role.description"
      v-bind:time="role.time"
      v-bind:image="role.image"
      v-bind:highlights="role.highlights"
    />
  </div>
</template>

<script>
import RoleInfo from "./RoleInfo.vue";

export default {
  name: "RoleSection",
  components: {
    RoleInfo,
  },
  props: {
    role: Object,
  },
};
</script>
