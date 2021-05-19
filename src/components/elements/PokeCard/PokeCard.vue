<template>
  <b-col
    sm
    md
    class="col-12 col-sm-12 col-md-5  col-lg-3  mb-3 shadow-sm bg-white d-flex p-0  card-poke text-dark mr-3 "
  >
    <div class="w-50 p-2">
      <h3 class="text-left">Pyroar</h3>
      <div class="stat-wrap">
        <stat-info :statDesc="`Attack`" :statValue="419" />
        <stat-info :statDesc="`Defend`" :statValue="41" />
      </div>

      <div class="d-flex mt-2">
        <element-info :elementDesc="`Poison`" />
        <element-info :elementDesc="`Grass`" />
      </div>
    </div>

    <div
      class="bg-info w-50 d-flex align-items-center justify-content-center p-0"
    >
      <img src="../../../assets/image 1.png" alt="poke" class="img-poke" />
    </div>
  </b-col>
</template>

<script>
import ElementInfo from './ElementInfo.vue';
import StatInfo from './StatInfo.vue';
export default {
  components: { StatInfo, ElementInfo },
  name: 'PokeCard',
};
</script>

<style lang="scss" scoped>
.card-poke {
  height: 150px;
  box-sizing: border-box;
  border-radius: 20px;
  overflow: hidden;
}

.img-poke {
  display: flex;
  width: 100%;
  height: 100%;
  object-fit: scale-down;
}

.skill-info {
  padding: 0px 10px;
  border-radius: 20px;
  font-size: 12px;
}

.stat-wrap {
  display: flex;
}
</style>
