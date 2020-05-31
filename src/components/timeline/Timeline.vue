<template>
  <div id="timeline h-64">
    <div class="indent w-9/12"></div>
    <TimelineBlock
      size="w-3/12"
      v-bind:active="lastClickTarget === 5 || hoverTarget === 5"
      @click="lastClickTarget = 5"
      @mouseover="hoverTarget = 5"
      @mouseleave="hoverTarget = null"
    />
    <div class="clear-both"></div>
    <div class="indent w-4/12"></div>
    <TimelineBlock
      size="w-5/12"
      v-bind:active="lastClickTarget === 2 || hoverTarget === 2"
      @click="lastClickTarget = 2"
      @mouseover="hoverTarget = 2"
      @mouseleave="hoverTarget = null"
    />
    <div class="clear-both"></div>
    <div class="indent w-5/12"></div>
    <TimelineBlock
      size="w-1/12"
      v-bind:active="lastClickTarget === 3 || hoverTarget === 3"
      @click="lastClickTarget = 3"
      @mouseover="hoverTarget = 3"
      @mouseleave="hoverTarget = null"
    />
    <div class="indent w-1/12"></div>
    <TimelineBlock
      size="w-2/12"
      v-bind:active="lastClickTarget === 4 || hoverTarget === 4"
      @click="lastClickTarget = 4"
      @mouseover="hoverTarget = 4"
      @mouseleave="hoverTarget = null"
    />
    <div class="clear-both"></div>
    <TimelineBlock
      size="w-4/12"
      v-bind:active="lastClickTarget === 1 || hoverTarget === 1"
      @click="lastClickTarget = 1"
      @mouseover="hoverTarget = 1"
      @mouseleave="hoverTarget = null"
    />
    <div class="clear-both"></div>
    <TimelineBlock
      size="w-4/12"
      v-bind:active="lastClickTarget === 0 || hoverTarget === 0"
      @click="lastClickTarget = 0"
      @mouseover="hoverTarget = 0"
      @mouseleave="hoverTarget = null"
    />
    <div class="clear-both"></div>
  </div>
</template>

<script>
import TimelineBlock from "./TimelineBlock.vue";

export default {
  name: "Timeline",
  components: {
    TimelineBlock,
  },
  data: function() {
    return {
      lastClickTarget: 5,
      hoverTarget: null,
    };
  },
  computed: {
    activeTarget: function() {
      return this.hoverTarget !== null
        ? this.hoverTarget
        : this.lastClickTarget;
    },
  },
  watch: {
    activeTarget: function(value) {
      this.$emit("activeTarget", value);
    },
  },
};
</script>

<style scoped>
.indent {
  @apply h-8 mb-3 float-left;
}
</style>
