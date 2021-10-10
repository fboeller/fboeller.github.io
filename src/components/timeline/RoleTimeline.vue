<template>
  <div>
    <swiper
      ref="mySwiper"
      :options="swiperOptions"
      @slide-change="activeTarget = swiper.activeIndex"
      class="h-168 md:h-84"
    >
      <swiper-slide v-for="role of roles" :key="role.organization">
        <RoleInfo :role="role" :tools="tools" class="h-full" />
      </swiper-slide>
    </swiper>
    <Timeline
      :activeTarget="activeTarget"
      @activeTargetSelected="handleTimelineTargetSelected($event)"
      class="my-4 md:my-8"
    />
  </div>
</template>

<script>
import RoleInfo from "./RoleInfo.vue";
import Timeline from "./Timeline.vue";
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "RoleTimeline",
  data: function () {
    return {
      activeTarget: this.roles.length - 1,
      swiperOptions: {
        initialSlide: this.roles.length - 1,
        spaceBetween: 30,
      },
    };
  },
  methods: {
    handleTimelineTargetSelected: function (value) {
      this.activeTarget = value;
      this.swiper.slideTo(value, 1000, false);
    },
  },
  components: {
    RoleInfo,
    Timeline,
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
  props: {
    roles: Array,
    tools: Object,
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
};
</script>
