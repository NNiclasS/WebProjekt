
<template>
  <div class="home" id="test1">
    <h1>Welcome to our new recipe website.</h1>
    <h1>We hope you'll enjoy it!</h1>
    <div id="app">
      <h2>{{getReceipe.data['recipes'][0]['title']}}</h2>
      
      <img v-bind:src="getReceipe.data['recipes'][0] ['image']" alt="bild">
      <ul>
        <li v-for="ingredients in getReceipe.data['recipes'][0] ['extendedIngredients']" v-bind:key="ingredients">
          {{ ingredients.originalString }}
        </li>
      </ul>
      <ul>
        <li v-for="x in getReceipe.data['recipes'][0] ['analyzedInstructions'][0] ['steps']" v-bind:key="x">
          {{ x.step }}
        </li>
      </ul>
    
      <!-- <p>{{ getReceipe.data["recipes"][0] ['analyzedInstructions'][0] ['steps']}}</p> -->
      
    </div>
  </div>
</template>
<script>
//var ingredientsnumber = 0;

import axios from "axios";
export default {
  data: function () {
    return {
      getReceipe: []
      // apiKey: 'b3c625b11e164184811ae35c1bb092ee'
      //11e91f20e6504df3b2ff755941cfabef
    };
  },
  mounted() {
    axios
      .get(
        "https://api.spoonacular.com/recipes/random?apiKey=11e91f20e6504df3b2ff755941cfabef"
      )

      .then(
        (response) =>
          (this.getReceipe = response),
          
      );
     //.then(JSON.parse(this.getReceipe));
  }
/*
    axios
      .get(
        "https://api.spoonacular.com/recipes/random?apiKey=11e91f20e6504df3b2ff755941cfabef"
      )

      .then(
        (response) =>
          (this.instruction = response.data["recipes"][0]["instructions"])
      );

      axios
      .get(
        "https://api.spoonacular.com/recipes/random?apiKey=11e91f20e6504df3b2ff755941cfabef"
      )

      .then(
        (response) =>
          (this.image = response.data['recipes'][0] ['image'])
      );

       axios
      .get(
        "https://api.spoonacular.com/recipes/random?apiKey=11e91f20e6504df3b2ff755941cfabef"
      )

      .then(
        (response) =>
          (this.title = response.data['recipes'][0]['title'])
      );

    
  },
};
*/
}
</script>
<style scoped>
h1 {
  text-align: center;
  font-family: "Courier New", Courier, monospace;
  font-size: 25px;
  color: black;
}
</style>
