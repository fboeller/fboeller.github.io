<template>
  <div>
    <RoleSection v-bind:roles="roles" />
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
      activeTarget: 0,
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
