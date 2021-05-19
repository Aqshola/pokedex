<template>
  <div class="d-flex  flex-column justify-content-center mr-3">
    <div class="p-2 circle-info border border-dark">
      {{ statValue }}
    </div>
    <div>{{ statDesc }}</div>
  </div>
</template>

<script>
export default {
  name: 'StatInfo',
  props: {
    statValue: Number,
    statDesc: String,
  },
  created() {},
};
</script>

<style>
.circle-info {
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  border-width: 3px !important;
}
</style>
