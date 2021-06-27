<template>
  <div class="Collection">
    <input v-model="Id" placeholder="Id of your recipe" />
    <button @click="IdButtonHandler">Search</button>
    <p>{{ Id }}</p>
    <div class="Prices" v-if="f">
      <h2>{{ NamegetReceipe['title'] }}</h2>
      <h3>Ingrediant Price</h3>
      <table
        v-for="ingredients in getReceipe['ingredients']"
        v-bind:key="ingredients"
      >
        <tr>
          <td>
            {{ ingredients.name }}
          </td>
          <td>
            {{ ingredients.price }} cent
          </td>
        </tr>
      </table>
      <p>Total price: {{ getReceipe["totalCost"] }} cent </p>
      <button @click="math(getReceipe['totalCost'])">get Price in $</button>
      <p>{{Price}} $</p>
    </div>
  </div>
</template>
<script>
/eslint-disable/
// import axios from "axios";
import axios from "axios";
export default {
  data: function () {
    return {
      Id: [],
      getReceipe: [],
      NamegetReceipe: [],
      f: false,
      Price:[]


      // apiKeys: 'b3c625b11e164184811ae35c1bb092ee'
      // 11e91f20e6504df3b2ff755941cfabef
      // 39cfd85581994d5e9e982129cccdb30d
    };
  },

  methods: {
    IdButtonHandler: function () {
      var id = this.Id;
      axios
        .get(
          "https://api.spoonacular.com/recipes/" +
            id +
            "/priceBreakdownWidget.json?apiKey=b3c625b11e164184811ae35c1bb092ee"
        )
        .then((response) => (this.getReceipe = response.data));

      axios
        .get(
          "https://api.spoonacular.com/recipes/" +
            id +
            "/information?apiKey=b3c625b11e164184811ae35c1bb092ee"
        )
        .then((response) => (this.NamegetReceipe = response.data));
         this.f = true;
      return this.f;
    },
    math: function(price){
    this.Price = price / 100;
      return this.Price;
    


    }
  },
};
</script>