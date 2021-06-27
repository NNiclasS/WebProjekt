<template>
  <div class="Finder">
    <h1>Recipe finder</h1>

    <div class="Beilagen">
      <h2>garnish</h2>

      <input type="checkbox" id="pasta" value="pasta" v-model="checkedFood" />
      <label for="pasta">pasta</label>

      <input type="checkbox" id="rice" value="rice" v-model="checkedFood" />
      <label for="rice">rice</label>

      <input type="checkbox" id="potato" value="potato" v-model="checkedFood" />
      <label for="potato">potato</label>
    </div>
    <div class="vegetables">
      <h2>vegetables</h2>
      <div>
        <input
          type="checkbox"
          id="paprika"
          value="paprika"
          v-model="checkedFood"
        />
        <label for="paprika">paprika</label>

        <input
          type="checkbox"
          id="tomato"
          value="tomato"
          v-model="checkedFood"
        />
        <label for="tomato">tomato</label>

        <input type="checkbox" id="lettuce" value="lettuce" v-model="checkedFood" />
        <label for="lettuce">lettuce</label>

        <input
          type="checkbox"
          id="asparagus"
          value="asparagus"
          v-model="checkedFood"
        />
        <label for="asparagus">asparagus</label>

        <input
          type="checkbox"
          id="carrots"
          value="carrots"
          v-model="checkedFood"
        />
        <label for="carrots">carrots</label>
      </div>

      <div>
        <input
          type="checkbox"
          id="Mushrooms"
          value="Mushrooms"
          v-model="checkedFood"
        />
        <label for="Mushrooms">Mushrooms</label>

        <input type="checkbox" id="Corn" value="Corn" v-model="checkedFood" />
        <label for="Corn">Corn</label>

        <input
          type="checkbox"
          id="kohlrabi"
          value="kohlrabi"
          v-model="checkedFood"
        />
        <label for="kohlrabi">kohlrabi</label>

        <input
          type="checkbox"
          id="Onions"
          value="Onions"
          v-model="checkedFood"
        />
        <label for="Onions">Onions</label>

        <input
          type="checkbox"
          id="garlic"
          value="garlic"
          v-model="checkedFood"
        />
        <label for="garlic">garlic</label>
      </div>

      <div>
        <input
          type="checkbox"
          id="pumpkin"
          value="pumpkin"
          v-model="checkedFood"
        />
        <label for="pumpkin">pumpkin</label>

        <input
          type="checkbox"
          id="broccoli"
          value="broccoli"
          v-model="checkedFood"
        />
        <label for="broccoli">broccoli</label>

        <input
          type="checkbox"
          id="cauliflower"
          value="cauliflower"
          v-model="checkedFood"
        />
        <label for="cauliflower">cauliflower</label>

        <input
          type="checkbox"
          id="cucumber"
          value="cucumber"
          v-model="checkedFood"
        />
        <label for="cucumber">cucumber</label>

        <input type="checkbox" id="Peas" value="Peas" v-model="checkedFood" />
        <label for="Peas">Peas</label>
      </div>
    </div>

    <div class="Meat">
      <h2>Meat</h2>
      <input type="checkbox" id="turkey" value="turkey" v-model="checkedFood" />
      <label for="turkey">turkey</label>

      <input
        type="checkbox"
        id="chicken"
        value="chicken"
        v-model="checkedFood"
      />
      <label for="chicken">chicken</label>

      <input type="checkbox" id="Beef" value="Beef" v-model="checkedFood" />
      <label for="Beef">Beef</label>

      <input type="checkbox" id="pig" value="pig" v-model="checkedFood" />
      <label for="pig">pig</label>

      <input type="checkbox" id="lamb" value="lamb" v-model="checkedFood" />
      <label for="lamb">lamb</label>
      <p>Haben sie noch andere Zutaten?</p>
      <p>pleas make sure to tipe correctly!</p>
       
       <div class="search">
      <input v-model="keyword" placeholder="what are you looking for?" />
      <button @click="Buttonkey">Add</button>
      <button @click ="clearCheckedFood">clearCheckedFood</button>
     
      <p>checked food: {{ checkedFood }}</p>

      <button @click="SearchButtonHandler">Search</button>
    </div>

    <div class="suggestedRecipes">
      <ol>
        <li v-for="x in getId['data']" v-bind:key="x">
          {{ x.title }} <br />
          <img v-bind:src="x['image']" alt="bild" /><br /> 
          <button @click="getButtonHandler(x.id)" value="x.id">get Recipe(after clicked you have to scroll down)</button>
          <!-- <ul>
            <li
              v-for="ingredients in x['usedIngredients']"
              v-bind:key="ingredients"
            >
              {{ ingredients.originalString }}
            </li>
          </ul>
          <ul>
            <li
              v-for="missedingredients in x['missedIngredients']"
              v-bind:key="missedingredients"
            >
              {{ missedingredients.originalString }}
            </li>
          </ul> -->
        </li>
      </ol>
    </div>
    <div v-if="c">   
      <h2>{{getReceipe['title']}} - {{getReceipe['id']}}</h2>
      <img v-bind:src="getReceipe['image']">
      <ul>
        <li v-for="ingredients in getReceipe['extendedIngredients']" v-bind:key="ingredients">
          {{ ingredients.originalString }}
        </li>
        <li v-for="x in getReceipe['analyzedInstructions'][0] ['steps']" v-bind:key="x">
          {{ x.step }}
        </li>
      </ul>  
    </div>
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
      checkedFood: [],
      getReceipe: [],
      getId: [],
      c: false

      // apiKeys: 'b3c625b11e164184811ae35c1bb092ee'
      // 11e91f20e6504df3b2ff755941cfabef
      //39cfd85581994d5e9e982129cccdb30d
    };
  },

  methods: {
    SearchButtonHandler: function () {
      var food = this.checkedFood;
      axios
        .get(
          "https://api.spoonacular.com/recipes/findByIngredients?ingredients=" +
            food +
            "&number=5&ranking=1&apiKey=11e91f20e6504df3b2ff755941cfabef"
        )
        .then((response) => (this.getId = response))

    },
    Buttonkey: function(){
       let key = this.keyword;
      this.checkedFood.push(key) ;

    },
    clearCheckedFood:function(){
      this.checkedFood= [];

    },



    getButtonHandler: function (id) {
      
      console.log(id);
      axios
        .get(
          "https://api.spoonacular.com/recipes/"+id+"/information?apiKey=11e91f20e6504df3b2ff755941cfabef"
        )
        .then((response) => (this.getReceipe = response.data));
        this.c= true;
        return this.c;
        
    },
    
  },
};
</script>