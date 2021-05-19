<template>
  <div :class="`mr-3 text-white  element-info ` + handlePictureBg(elementDesc)">
    {{ elementDesc }}
  </div>
</template>

<script>
export default {
  name: 'ElementInfo',
  props: {
    elementDesc: String,
  },
  methods: {
    handlePictureBg(maintype) {
      switch (maintype) {
        case 'dark':
        case 'rock':
        case 'stile':
          return 'bg-rock';

        case 'bug':
        case 'grass':
          return 'bg-grass';

        case 'ice':
        case 'water':
          return 'bg-ice';

        case 'fighting':
        case 'dragon':
        case 'fire':
          return 'bg-fire';

        case 'flying':
        case 'gosth':
        case 'normal':
          return 'bg-normal';

        case 'psychic':
        case 'fairy':
        case 'ghost':
        case 'poison':
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

<style lang="scss">
.element-info {
  padding: 0px 10px;
  border-radius: 20px;
  font-size: 12px;
}
</style>
