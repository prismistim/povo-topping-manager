<template>
  <main class="flex items-center justify-center h-screen text-gray-500">
    <div class="p-4 space-y-4">
      <p class="font-semibold text-red-500 text-9xl text-center">404</p>
      <h1 class="space-x-2">
        <span class="text-xl font-medium text-gray-600 sm:text-2xl">
          お探しのページが見つかりません。
        </span>
      </h1>
      <p class="text-base font-normal text-gray-500">
        ホーム画面に戻る際は
        <router-link to="/" class="text-blue-600 hover:underline"
          >ホーム</router-link
        >
        をクリックして下さい
      </p>
    </div>
  </main>
</template>
