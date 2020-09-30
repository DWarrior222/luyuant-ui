function queryEl(el) {
  if (!el) return
  if (typeof el === "string") {
    return document.querySelector(el)
  }
  if (Object.prototype.toString.call(el) === '[object HTMLDivElement]') {
    return el
  }
}

function ergodicElem(newEl, newRootEl, sourceRootEl) {
  if (!newEl.children || !newEl.children.length) {
    return styleCopy(newEl, newRootEl, sourceRootEl);
  }
  const childrenList = newEl.children;
  for (let i = 0; i < childrenList.length; i++) {
    ergodicElem(childrenList[i], newRootEl, sourceRootEl);
  }

  return styleCopy(newEl, newRootEl, sourceRootEl);
}

function styleCopy(newEl, newRootEl, sourceRootEl) {
  const inheritedStyle = getSameTagOfInheritedStyle(newEl.tagName);
  const selector = splitSelector(newEl, newRootEl);
  if (!selector) return;
  const sourceEl = sourceRootEl.querySelector(selector);
  const styleStr = getNewElStyles(sourceEl, inheritedStyle);
  newEl.style = styleStr;
}

function splitSelector(newEl, newRootEl) {
  const firstNthNumber = previousElemNumber(newEl);
  let parentElem = newEl.parentElement
  let selectorStr = parentElem && newRootEl !== parentElem ? `${newEl.tagName.toLowerCase()}:nth-child(${firstNthNumber})` : '';
  while(parentElem && newRootEl !== parentElem) {
    let nthNumber = previousElemNumber(parentElem);
    selectorStr = `${parentElem.tagName.toLowerCase()}:nth-child(${nthNumber})>${selectorStr}`;
    parentElem = parentElem.parentElement;
  }
  return selectorStr;
}

function previousElemNumber(parentElem) {
  let nthNumber = 1;
  let previousElem = parentElem.previousElementSibling;
  while (previousElem) {
    previousElem = previousElem.previousElementSibling;
    nthNumber++;
  }
  return nthNumber;
}
function getSameTagOfInheritedStyle(tagName) {
  const inheritedElem = document.createElement(tagName);
  document.body.appendChild(inheritedElem);
  const style = getComputedStyles(inheritedElem);
  setTimeout(() => {
    document.body.removeChild(inheritedElem);
  }, 0);
  return style;
}

function getNewElStyles(sourceEl, inheritedStyle) {
  const style = getComputedStyles(sourceEl);
  const keys = Object.keys(style);
  let styleStr = "";
  keys.forEach((item) => {
    const prop = style[item];
    const condition = style.getPropertyValue(prop) !== inheritedStyle.getPropertyValue(prop);
    if (!condition) return;
    styleStr += `${prop}:${style.getPropertyValue(prop)};`;
  });
  return styleStr;
}

function offsetTop(elem) {
  var top = elem.offsetTop;
  var parent = elem.offsetParent;
  while (parent) {
    top += parent.offsetTop;
    parent = parent.offsetParent;
  }
  return top;
}

function offsetLeft(elem) {
  var left = elem.offsetLeft;
  var parent = elem.offsetParent;
  while (parent) {
    left += parent.offsetLeft;
    parent = parent.offsetParent;
  }
  return left;
}

// 视口高度
function getViewPort() {
  if (document.compatMode == "BackCompat") {
    //浏览器嗅探，混杂模式
    return {
      width: document.body.clientWidth,
      height: document.body.clientHeight,
    };
  } else {
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
    };
  }
}

function getComputedStyles(el, pseudoElt = null) {
  return window.getComputedStyle(el, pseudoElt)
}

function getComputedProperty(el, prop) {
  return getComputedStyles(el).getPropertyValue(prop)
}

function easeInOutCubic(k) {
  return (k *= 2) < 1 ? 0.5 * k * k * k : 0.5 * ((k -= 2) * k * k + 2);
}

function moveTo (source, prop, moveFrom = 0, moveTo = 0, cb) {   // 返回的动画
  const displace = moveFrom - moveTo
  const time = 500
  let step
  let start
  let process
  let frame = 0

  return () => {
    window.cancelAnimationFrame(frame)
    var _animate = (timestamp) => {
      
      if (!start) start = timestamp
      process = timestamp - start
      step = displace * easeInOutCubic(process / time)
      let end = moveFrom - step
      if (process >= time) {
        end = moveTo
      }
      if (process < time) {
        cb(source, prop, end)
        frame = window.requestAnimationFrame(_animate);
      } else {
        cb(source, prop, end)
        window.cancelAnimationFrame(frame)
      }
    }
    frame = window.requestAnimationFrame(_animate);
  }
}

export default {
  queryEl,
  ergodicElem,
  getSameTagOfInheritedStyle,
  getNewElStyles,
  offsetTop,
  offsetLeft,
  getViewPort,
  getComputedStyles,
  getComputedProperty,
  easeInOutCubic,
  moveTo
}