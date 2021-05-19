<template>
  <div
    class="d-flex flex-column justify-content-center mr-3"
    style="height:fit-content"
  >
    <div class="p-2 rounded-circle border border-dark">
      {{ statValue }}
    </div>
    <div>{{ statDesc }}</div>
  </div>
</template>

<script>
export default {
  name: 'StatInfo',
  props: {
    statValue: String,
    statDesc: String,
  },
};
</script>

<style>
.circle-info {
  min-width: 30px;
}
</style>
