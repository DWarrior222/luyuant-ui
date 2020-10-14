<template>
  <div class="">
    <p>
      firstGuide
    </p>
    <button @click="$emit('next')">下一步</button>
    <button @click="$emit('close')">退出</button>
  </div>
</template>