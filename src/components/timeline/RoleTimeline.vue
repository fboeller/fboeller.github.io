<template>
  <div>
    <RoleSection v-bind:roles="roles" v-bind:activeTarget="activeTarget" class="my-8" />
    <Timeline @activeTarget="activeTarget = $event" class="my-8" />
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
