<template>
  <div class="demo">
    <button ref="create-box" @click="boxVisible=true">创建一个盒子</button>

    <div class="box" :class="{'pink': fill, 'rotate': rotate}" ref="box" v-show="boxVisible">
      <button ref="fill" @click="fill=true">填充颜色</button>
      <button ref="rotate" @click="rotate=true">旋转90度</button>
    </div>

    <feat-guide
      v-if="visible"
      ref="feat-guide"
      :guideName.sync="guideName"
      :target-selector="mainList"
    >
      <component @next="next" @close="close" :is="guideName"></component>
    </feat-guide>
  </div>
</template>

<script>
import FirstGuide from "./first-guide";
import SecondGuide from "./second-guide";
import ThirdGuide from "./third-guide";
export default {
  data() {
    return {
      guideName: null,
      mainList: [],
      visible: true,
      boxVisible: false,
      fill: false,
      rotate: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.mainList = [
        { guideName: "first-guide", el: this.$refs["create-box"] },
        { guideName: "second-guide", el: this.$refs["fill"] },
        { guideName: "third-guide", el: this.$refs["rotate"] },
      ];
    }, 2000);
  },
  methods: {
    next(arg) {
      if (arg) this.boxVisible = true;
      this.$nextTick().then(() => {
        this.$refs["feat-guide"].next();
      })
    },
    close() {
      this.guideName = null;
      this.visible = false;
    },
  },
  components: {
    FirstGuide,
    SecondGuide,
    ThirdGuide
  },
};
</script>

<style lang="scss" scoped>
.demo {
  height: 1000px;

  .box {
    width: 200px;
    height: 200px;
    margin: 100px;
    border: 1px solid #ccc;

    &.pink {
      background: pink;
    }
  }
}
</style>