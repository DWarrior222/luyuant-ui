<template>
  <div class="feat-guidee" v-show="guidShow">
    <div class="guide-overlay" @click="next"></div>
    <div class="guide-new-el" ref="guide-new-el"></div>
    <div class="guide-tooltip" ref="guide-tooltip">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { on, off } from "main/libs/dom";
import util from './uitl'

export default {
  name: 'FeatGuide',
  props: {
    targetSelector: [String, Array, HTMLDivElement],
  },
  data() {
    return {
      guidShow: false,
      selector: "",
      allowClick: true,
      stepControler: null,
      newRootEl: null
    };
  },
  watch: {
    targetSelector() {
      this.init()
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.stepControler = null
      const { targetSelector } = this;
      if (Array.isArray(targetSelector)) {
        const list = [...targetSelector].map(v => {
          const { guideName, el, ...args } = v
          return { guideName, el: util.queryEl(el), ...args }
        })
        this.stepControler = this.stepGen(list);
        this.stepControler.next();
      } else {
        this.selector = targetSelector;
        this.initFeature();
      }
      document.querySelector('body').style.overflow = 'hidden'
    },
    initFeature() {
      let sourceEl = util.queryEl(this.selector);
      if (sourceEl) {
        this.featureCopy();
        setTimeout(this.featurePosition);
        this.guidShow = true;
      }
      on(window, "resize", this.featurePosition);
      document.querySelector('body').style.overflow = 'hidden'
    },
    *stepGen(targetSelector = []) {
      for (let i = 0, len = targetSelector.length; i < len; i++) {
        const { el, guideName } = targetSelector[i];
        this.selector = el;
        this.$emit('update:guideName', guideName)
        let isContinue = yield this.initFeature();
        if (!isContinue) break;
      }
      // if (targetSelector.length) this.$emit('over')
      return
    },
    next() {
      this.guidShow = false;
      off(window, "resize", this.featurePosition);
      !this.stepControler && this.$emit("next");
      this.stepControler && this.stepControler.next(true);
      document.querySelector('body').style.overflow = ''
    },
    featureCopy() {
      const sourceEl = util.queryEl(this.selector);
      const newElContainer = this.$refs["guide-new-el"];
      if (!sourceEl || !newElContainer) return;
      newElContainer.innerHTML = "";

      // 创建一个相同的 dom，并且插入文档中，计算默认样式属性
      const inheritedStyle = util.getSameTagOfInheritedStyle(sourceEl.tagName);

      const styleStr = util.getNewElStyles(sourceEl, inheritedStyle);

      // 复制目标节点
      const newEl = sourceEl.cloneNode(true);
      this.newRootEl = newEl
      newEl.style = styleStr;

      // 在获取多层dom时，通过 document.querySelector,拼接类,从页面上获取dom。
      util.ergodicElem(newEl, newEl, sourceEl);

      // 是否允许点击事件
      if (!this.allowClick) {
        newEl.addEventListener("click", function (e) {
          console.log("禁止点击");
          let event = e || window.event;
          event.preventDefault();
          return false;
        });
      }

      newElContainer.appendChild(newEl);
    },
    /**
     * 待做：
     * 可以固定位置，不一定是 1/2
     * 所有涉及的数值，都改为变量，可控制
     */
    featurePosition() {
      const sourceEl = util.queryEl(this.selector);
      const newElContainer = this.$refs["guide-new-el"];
      const tooltipElem = this.$refs['guide-tooltip'];
      if (!sourceEl || !newElContainer) return;

      const offsetTop = util.offsetTop(sourceEl);
      const offsetLeft = util.offsetLeft(sourceEl);
      const viewPort = util.getViewPort();
      const realHeight = parseInt(util.getComputedProperty(sourceEl, 'height'));
      const realWidth = parseInt(util.getComputedProperty(sourceEl, 'width'));
      const htmlHeight = document.documentElement.offsetHeight;
      const tooltipHeight = parseInt(util.getComputedProperty(tooltipElem, 'height'));
      const margin = 20

      let modalLeft = offsetLeft;
      let modalTop = offsetTop;
      let scrollTop = 0;
      let tooltipMarginTop = realHeight + margin

      
      const contHeight = realHeight + tooltipHeight + margin
      modalTop = (viewPort.height - contHeight) / 2
      scrollTop = offsetTop - modalTop
      
      if (htmlHeight > viewPort.height) { // 大于一屏
        // 说明 target 下面的空间不足以让它居中展示
        if (scrollTop > htmlHeight - viewPort.height) {
          // modalTop 的值就是 target 在屏幕上垂直的距离
          modalTop = offsetTop - (htmlHeight - viewPort.height)
        }

        // 下面的空间不足以让 tooltip 展示
        if (contHeight > htmlHeight - offsetTop) {
          // 下面空间比上面空间的小的时候，反转 tooltip（朝上）
          if (htmlHeight - (offsetTop + contHeight) < offsetTop - contHeight) {
            tooltipMarginTop = -(tooltipHeight + margin)
          }
        }

        // 说明 target 上面的空间不足以让它居中展示
        if (scrollTop < 0) {
          modalTop = offsetTop
          scrollTop = 0
        }
      } else {  // 小于一屏
        modalTop = offsetTop
        scrollTop = 0
        if (contHeight > viewPort.height - offsetTop) {
          if (viewPort.height - (offsetTop + contHeight) < offsetTop - contHeight) { // 下面空间比上面小吗
            tooltipMarginTop = -(tooltipHeight + margin)
          }
        }
      }

      
      const list = [
        {
          source: newElContainer.style,
          prop: 'width',
          moveFrom: realWidth,
          moveTo: realWidth
        },
        {
          source: newElContainer.style,
          prop: 'height',
          moveFrom: parseInt(util.getComputedProperty(newElContainer, 'height')) || realHeight,
          moveTo: realHeight
        },
        {
          source: newElContainer.style,
          prop: 'left',
          moveFrom: parseInt(util.getComputedProperty(newElContainer, 'left')) || modalLeft,
          moveTo: modalLeft
        },
        {
          source: newElContainer.style,
          prop: 'top',
          moveFrom: parseInt(util.getComputedProperty(newElContainer, 'top')) || modalTop,
          moveTo: modalTop
        },
        {
          source: tooltipElem.style,
          prop: 'left',
          moveFrom: parseInt(util.getComputedProperty(tooltipElem, 'left')) || modalLeft,
          moveTo: modalLeft
        },
        {
          source: tooltipElem.style,
          prop: 'top',
          moveFrom: parseInt(util.getComputedProperty(tooltipElem, 'top')) || modalTop,
          moveTo: modalTop
        },
        {
          source: tooltipElem.style,
          prop: 'margin-top',
          moveFrom: parseInt(util.getComputedProperty(tooltipElem, 'margin-top')) || tooltipMarginTop,
          moveTo: tooltipMarginTop
        }
      ]
      
      this.featureGuideMove(list)
      this.htmlMove(scrollTop)
    },
    featureGuideMove(list) {
      list.forEach(item => {
        const { source, prop, moveFrom, moveTo } = item;
        const animateFn = util.moveTo(source, prop, moveFrom, moveTo, (source, prop, end) => {
          source[prop] = end + 'px'
        })
        animateFn()
      })
    },
    htmlMove(scrollTop) {
      const source = document.documentElement
      const prop = 'scrollTop'
      const animateFn = util.moveTo(source, prop, source.scrollTop, scrollTop, (source, prop, end) => {
        source[prop] = end
      })
      animateFn()
    }
  },
  beforeDestroy() {
    console.log('beforeDestroy');
    off(window, "resize", this.featurePosition);
    document.querySelector('body').style.overflow = ''
  },
};
</script>

<style lang="scss" scoped>
.feat-guidee {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  z-index: 1111;

  .guide-overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
    background: rgba(0, 0, 0, 0.7);
  }

  .guide-tooltip {
    min-width: 200px;
    max-width: 500px;
    min-height: 100px;
    background: white;
    position: absolute;
  }

  .guide-new-el {
    background: white;
    z-index: 1222;
    position: absolute;
    overflow: hidden;
  }
}
</style>
