<template>
  <div>
    <div class="indent w-9/12"></div>
    <TimelineBlock
      class="w-3/12 mb-3"
      :active="activeTarget === 5"
      @click="lastClickTarget = 5"
      @mouseover="hoverTarget = 5"
      @mouseleave="hoverTarget = null"
    />
    <div class="clear-both"></div>
    <div class="indent w-4/12"></div>
    <TimelineBlock
      class="w-5/12 mb-3"
      :active="activeTarget === 2"
      @click="lastClickTarget = 2"
      @mouseover="hoverTarget = 2"
      @mouseleave="hoverTarget = null"
    />
    <div class="clear-both"></div>
    <div class="indent w-5/12"></div>
    <TimelineBlock
      class="w-1/12 mb-3"
      :active="activeTarget === 3"
      @click="lastClickTarget = 3"
      @mouseover="hoverTarget = 3"
      @mouseleave="hoverTarget = null"
    />
    <div class="indent w-1/12"></div>
    <TimelineBlock
      class="w-2/12 mb-3"
      :active="activeTarget === 4"
      @click="lastClickTarget = 4"
      @mouseover="hoverTarget = 4"
      @mouseleave="hoverTarget = null"
    />
    <div class="clear-both"></div>
    <TimelineBlock
      class="w-4/12 mb-3"
      :active="activeTarget === 1"
      @click="lastClickTarget = 1"
      @mouseover="hoverTarget = 1"
      @mouseleave="hoverTarget = null"
    />
    <div class="clear-both"></div>
    <TimelineBlock
      class="w-4/12"
      :active="activeTarget === 0"
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
    TimelineBlock
  },
  data: function() {
    return {
      lastClickTarget: 5,
      hoverTarget: null
    };
  },
  props: {
    activeTarget: Number
  },
  computed: {
    activeTargetSelected: function() {
      return this.hoverTarget !== null
        ? this.hoverTarget
        : this.lastClickTarget;
    }
  },
  watch: {
    activeTargetSelected: function(value) {
      this.$emit("activeTargetSelected", value);
    }
  }
};
</script>

<style scoped>
.indent {
  @apply h-8 mb-3 float-left;
}
</style>
