<template>
    <div class="Joke">

        <p>{{getJoke['text']}}</p>
        <p>{{getTrivia['text']}}</p>

    </div>
</template>
<script>
import axios from "axios";
export default {
  data: function () {
    return {
      getJoke:[],
      getTrivia:[]

      // apiKeys: 'b3c625b11e164184811ae35c1bb092ee'
      // 11e91f20e6504df3b2ff755941cfabef
      // 39cfd85581994d5e9e982129cccdb30d
    }
  },
 mounted() {
    axios
      .get(
        'https://api.spoonacular.com/food/jokes/random?apiKey=39cfd85581994d5e9e982129cccdb30d'
      )
      .then((response) => (this.getJoke = response.data));
  
    axios
      .get(
        'https://api.spoonacular.com/food/trivia/random?apiKey=39cfd85581994d5e9e982129cccdb30d'
      )
      .then((response) => (this.getTrivia = response.data));
  },
  
};
</script>