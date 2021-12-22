<template>
  <main class="flex items-center justify-center h-screen text-gray-500">
    <div class="p-4 space-y-4">
      <div
        class="flex items-start space-y-3 sm:flex-row sm:space-y-0 sm:items-center sm:space-x-3"
      >
        <p class="font-semibold text-red-500 text-9xl">404</p>
        <div class="space-y-2">
          <h1 class="flex items-center space-x-2">
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
      </div>
    </div>
  </main>
</template>
