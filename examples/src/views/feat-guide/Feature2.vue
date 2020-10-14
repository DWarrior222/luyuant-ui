<template>
  <div class="demo-webfont demo">
    <div class="abc">
      <div class="empty"></div>
      <div class="empty"></div>
      <div class="empty"></div>
      <div class="empty"></div>
      <div class="empty"></div>
      <div class="empty"></div>
      <div class="empty"></div>
      <div class="empty"></div>
      <div class="guid-1" ref="guid-1" style="width: 300px; overflow: hidden">
        <p>
          <span>guid-1</span>
        </p>
      </div>

      <div class="empty"></div>
      <div class="guid-4" ref="guid-4" style="width: 300px; overflow: hidden">
        guid-4
      </div>
      <div class="empty"></div>
      <div class="empty"></div>
      <div v-if="true">
        <div class="empty"></div>
        <div
          class="guid-2"
          ref="guid-2"
          style="
            width: 300px;
            height: 300px;
            overflow: hidden;
            background: pink;
          "
        >
          <p>guid-2</p>
        </div>
        <div class="empty"></div>
        <div class="wrap">
          <div
            class="guid-3"
            ref="guid-3"
            style="width: 300px; overflow: hidden; background: red"
          >
            <p>guid-3</p>
          </div>
        </div>
        <div class="empty"></div>
      </div>
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
export default {
  data() {
    return {
      guideName: null,
      mainList: [],
      visible: true,
    };
  },
  mounted() {
    this.mainList = [
      { guideName: "first-guide", el: this.$refs["guid-1"] },
      { guideName: "second-guide", el: this.$refs["guid-4"] },
    ];
  },
  methods: {
    next() {
      this.$refs["feat-guide"].next();
    },
    close() {
      this.guideName = null;
      this.visible = false;
    },
  },
  components: {
    FirstGuide,
    SecondGuide,
  },
};
</script>

<style lang='scss' scoped>
.demo-webfont {
  text-align: center;
  .abc {
    .guid-1 {
      color: red;
    }
  }

  .empty {
    height: 95px;
  }

  .wrap {
    width: 300px;
    margin: 0 auto;
  }
}
</style>
<style lang='scss'>
</style>
