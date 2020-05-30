<template>
  <div class="relative h-96">
    <RoleInfo
      v-for="(role, index) of roles"
      v-bind:key="role.organization"
      v-bind:class="[translateXClass(index)]"
      v-bind:position="role.position"
      v-bind:description="role.description"
      v-bind:time="role.time"
      v-bind:image="role.image"
      v-bind:highlights="role.highlights"
      class="absolute transition transform ease-in-out duration-1000"
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
  methods: {
    translateXClass: function(index) {
      const vw = (index - this.activeTarget) * 100;
      return vw >= 0 ? "translate-x-" + vw : "-translate-x-" + Math.abs(vw);
    },
  },
  props: {
    roles: Array,
    activeTarget: Number,
  },
};
</script>
