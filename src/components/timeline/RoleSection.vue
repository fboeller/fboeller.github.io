<template>
  <div class="relative h-168 md:h-84">
    <RoleInfo
      v-for="(role, index) of roles"
      v-bind:key="role.organization"
      v-bind:class="[translateXClass(index)]"
      v-bind:role="role"
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
