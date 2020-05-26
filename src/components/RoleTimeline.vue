<template>
  <div>
    <RoleSection v-bind:role="roles[activeTarget]" />
    <Timeline @activeTarget="activeTarget = $event" />
  </div>
</template>

<script>
import RoleSection from "./RoleSection.vue";
import Timeline from "./Timeline.vue";

export default {
  name: "App",
  data: function() {
    return {
      activeTarget: this.roles.length - 1,
    };
  },
  components: {
    RoleSection,
    Timeline,
  },
  props: {
    roles: Array
  }
};
</script>
