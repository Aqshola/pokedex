<template>
  <div class="mr-3 bg-danger text-white element-info">
    {{ elementDesc }}
  </div>
</template>

<script>
export default {
  name: 'ElementInfo',
  props: {
    elementDesc: String,
  },
};
</script>

<style lang="scss">
.element-info {
  padding: 0px 10px;
  border-radius: 20px;
  font-size: 12px;
}
</style>
