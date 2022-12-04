<template>
  <div>
    上班~~有空再聊
    <NuxtLink to="/home"><div>ToHome</div></NuxtLink>
    <hr />
    <a-steps :current="1">
      <a-step>
        <!-- <span slot="title">Finished</span> -->
        <template #title>Finished</template>
        <template #description>
          <span>This is a description.</span>
        </template>
      </a-step>
      <a-step
        title="In Progress"
        sub-title="Left 00:00:08"
        description="This is a description."
      />
      <a-step title="Waiting" description="This is a description." />
    </a-steps>
  </div>
</template>
<script lang="ts" setup></script>
<style scoped lang="scss"></style>
