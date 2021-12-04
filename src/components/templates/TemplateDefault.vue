<template>
  <div>
    <slot name="page-title" />
    <div class="border-b border-gray-400" />
    <div class="container mx-auto px-10 md:px-60">
      <slot name="content" />
    </div>
  </div>
</template>

<style lang="postcss">
@import '../../assets/index.css';
</style>
