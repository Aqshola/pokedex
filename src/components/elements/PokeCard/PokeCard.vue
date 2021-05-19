<template>
  <b-col
    sm
    md
    class="col-12 col-sm-12 col-md-5  col-lg-3  mb-3 shadow bg-white d-flex p-0  card-poke text-dark mr-3 "
  >
    <div class="w-50 p-2">
      <h4 class="text-left">{{ pokeData.name }}</h4>
      <div class="stat-wrap">
        <stat-info
          :statDesc="stat.name"
          :statValue="stat.base_stat"
          v-for="stat in pokeData.stats"
          :key="stat.name"
        />
      </div>

      <div class="d-flex mt-2">
        <element-info
          :elementDesc="type.type.name"
          v-for="type in pokeData.types"
          :key="type.type.name"
        />
      </div>
    </div>

    <div
      :class="
        `w-50 d-flex align-items-center justify-content-center p-0 ` +
          handlePictureBg(pokeData.types[0].type.name)
      "
    >
      <img :src="pokeData.picture" alt="poke" class="img-poke" />
    </div>
  </b-col>
</template>

<script>
import ElementInfo from './ElementInfo.vue';
import StatInfo from './StatInfo.vue';
export default {
  components: { StatInfo, ElementInfo },
  name: 'PokeCard',
  props: {
    url: String,
  },
  data() {
    return {
      pokeData: {
        name: '',
        stat: [],
        types: [{ type: { name: 'white' } }],
        picture: '',
      },
    };
  },
  created() {
    this.getPokeData();
  },
  methods: {
    async getPokeData() {
      const result = await (await fetch(this.url)).json();
      this.pokeData = {
        name: result.name,
        types: result.types,
        stats: [
          {
            base_stat: result.stats[1].base_stat,
            name: result.stats[1].stat.name,
          },
          {
            base_stat: result.stats[2].base_stat,
            name: result.stats[2].stat.name,
          },
        ],
        picture: result.sprites.other['official-artwork'].front_default,
      };
    },
    handlePictureBg(maintype) {
      switch (maintype) {
        case 'dark':
        case 'stile':
        case 'rock':
          return 'bg-stile';

        case 'bug':
        case 'grass':
          return 'bg-grass';

        case 'ice':
        case 'water':
        case 'flying':
          return 'bg-ice';

        case 'fighting':
        case 'dragon':
        case 'fire':
          return 'bg-fire';

        case 'normal':
        case 'gosth':
          return 'bg-normal';

        case 'poison':
        case 'psychic':
        case 'fairy':
        case 'ghost':
          return 'bg-poison';
        case 'ground':
          return 'bg-ground';
        case 'electric':
          return 'bg-electric';

        default:
          return 'bg-white';
      }
    },
  },
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
