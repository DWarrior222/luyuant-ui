<template>
  <div class="">
    <p>
      点击按钮可以创建一个盒子
    </p>
    <button @click="$emit('next', 1)">创建一个</button>
    <button @click="$emit('close')">算了</button>
  </div>
</template>