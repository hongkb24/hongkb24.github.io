<template>
  <a-layout class="main">
    <a-layout-header>Header</a-layout-header>
    <a-layout>
      <a-layout-sider class="in">Sider</a-layout-sider>
      <a-layout-content class="content">
        <slot />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script setup></script>

<style scoped lang="scss">
  .in{
    height: calc(100vh - 64px);
  }
  .content{
    padding: 30px;
  }
</style>
