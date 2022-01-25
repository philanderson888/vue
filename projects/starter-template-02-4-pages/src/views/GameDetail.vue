<template>
  <div class="game-detail">
    <GameDetail msg="Game Detail" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import GameDetail from "@/components/GameDetail.vue"; 

@Options({
  components: {
    GameDetail,
  },
})
export default class Home extends Vue {}
</script>
