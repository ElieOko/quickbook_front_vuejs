<script setup lang="ts">
//@ts-ignore
import LoadingUi from '@/components/LoadingUi.vue';
</script>

<template>
  <div>
    <LoadingUi/>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
