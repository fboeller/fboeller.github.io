<template>
  <div id="timeline h-64">
    <div class="timeline-block w-1/3"></div>
    <div class="clear-both"></div>
    <div class="timeline-block w-1/3"></div>
    <div class="clear-both"></div>
    <div class="timeline-indent w-1/3"></div>
    <div class="timeline-block w-5/12"></div>
    <div class="clear-both"></div>
    <div class="timeline-indent w-5/12"></div>
    <div class="timeline-block w-1/12"></div>
    <div class="clear-both"></div>
    <div class="timeline-indent w-7/12"></div>
    <div class="timeline-block w-1/6"></div>
    <div class="clear-both"></div>
    <div class="timeline-indent w-9/12"></div>
    <div class="timeline-block w-3/12"></div>
  </div>
</template>

<script>
export default {
  name: "Timeline",
};
</script>

<style scope>
.timeline-indent {
  @apply h-8 mb-3 float-left;
}

.timeline-block {
  @apply bg-blue-lighter rounded-full h-8 mb-3 float-left cursor-pointer;
}

.timeline-block:hover,
.timeline-block:active {
  @apply bg-blue shadow-lg;
  transform: translateY(-2px);
}
</style>
