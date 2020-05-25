<template>
  <div>
    <RoleInfo
      v-for="role of roles"
      v-bind:key="role.time"
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
    roles: Array,
  },
};
</script>
