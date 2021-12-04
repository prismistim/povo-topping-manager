<template>
  <div class="container mx-auto px-10 md:px-60">
    <div class="mt-16 mb-10 text-center">
      <slot name="page-title" />
    </div>
    <div class="mb-10 border-b border-gray-400" />
    <div>
      <slot name="content" />
    </div>
  </div>
</template>

<style lang="postcss">
@import '../../assets/index.css';
</style>
