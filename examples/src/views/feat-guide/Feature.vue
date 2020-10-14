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
      <div v-if="visible">
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
      v-if="guideName === 0"
      ref="feat-guide"
      @next="next"
      :target-selector="selector"
    >
      <div>这是功能点一</div>
      <button @click="openFirst(1)"> 查看 </button>
      <button @click="next"> 下一个 </button>
    </feat-guide>
    <feat-guide
      v-if="guideName === 1"
      ref="feat-guide"
      @next="next"
      :target-selector="selector"
    >
      <div>这是功能点二</div>
      <button @click="close"> 关闭 </button>
    </feat-guide>
    <feat-guide
      v-if="guideName === 2"
      ref="feat-guide"
      @next="next"
      :target-selector="selector"
    >
      <div>这是功能点一详情</div>
      <button @click="next"> 下一个 </button>
    </feat-guide>
    <feat-guide
      v-if="guideName === 3"
      ref="feat-guide"
      @next="next"
      :target-selector="selector"
    >
      <div>这是功能点一详情2</div>
      <button @click="closeFirst"> 下一个 </button>
    </feat-guide>
  </div>
</template>

<script>
export default {
  data() {
    return {
      guideName: null,
      mainControler: null,
      firstChildrenControler: null,
      selector: null,
      visible: false,
      mainList: [],
      firstChildrenList: [],
    };
  },
  mounted() {
    // this.selector = [this.$refs['guid-1'], this.$refs['guid-2'], this.$refs['guid-3']]
    // this.selector = ['.demo-webfont .guid-1', '.demo-webfont .guid-2', '.demo-webfont .guid-3'];

    this.mainList = [
      { guideName: 0, el: this.$refs["guid-1"] },
      { guideName: 1, el: this.$refs["guid-4"] },
    ];
    this.mainControler = this.stepGen(
      this.mainList,
      (item, i) => {
        this.selector = item.el;
        this.guideName = item.guideName;
      },
      () => {
        console.log("mainControler over");
        this.mainControler = null;
      }
    );
    this.mainControler.next();
  },
  methods: {
    *stepGen(list = [], cb, overCb) {
      let i = -1;
      while (i < list.length) {
        i++;
        cb(list[i], i);
        if (i === list.length - 1) overCb && overCb(i, list[i]);
        yield;
      }
      return false;
    },
    next() {
      console.log("close");
      if (this.firstChildrenControler) this.firstChildrenControler.next();
      else if (this.mainControler) this.mainControler.next();
    },
    openFirst(v) {
      console.log("open");
      this.visible = true;
      this.$nextTick().then(() => {
        this.firstChildrenList = [
          { guideName: 2, el: this.$refs["guid-2"] },
          { guideName: 3, el: this.$refs["guid-3"] },
        ];
        this.firstChildrenControler = this.stepGen(
          this.firstChildrenList,
          (item, i) => {
            this.selector = item.el;
            this.guideName = item.guideName;
          },
          () => {
            console.log("firstChildrenControler over");
            this.firstChildrenControler = null;
          }
        );
        this.firstChildrenControler.next();
      });
    },
    close() {
      this.$refs["feat-guide"].next();
      this.guideName = null;
    },
    closeFirst() {
      this.visible = false;
      this.next();
    },
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
