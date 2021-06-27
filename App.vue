<template>
  <div id="app">

    <div id="head">
      <h1>DailyBread</h1>
    </div>

    <div id="nav">
      <router-link id="home" to="/">Home</router-link>
      <router-link id="finder" to="/recipeFinder">Recipe Finder</router-link>
      <router-link id="collection" to="/recipeCollection">Recipe Collection</router-link>
      <router-link id="builder" to="/recipeBuilder">Recipe Builder</router-link>
    </div>
    <router-view/>

    <!-- <div id="footer">
       <router-link id="contact" to="/">Contact us</router-link>
       <br>
      <router-link id="impressum" to="/">Site notice</router-link>
    </div> -->
  <div class='sidenav'>
  <a></a>
  </div>
  </div>
</template>

<style>

body{
  margin:0px;
  background-color: rgb(206, 228, 231);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;

}

#head{
  height: 100px;
  border-bottom:  black solid 2px;
}

#head h1{
 color: black;
 font-style: bold;
 text-align: left;
 margin:45%;
 margin-top: 50px;
 margin-bottom: 15px;
 font-size: 200%;
 display: inline-block;
 font-family: 'Courier New', Courier, monospace;
}
#nav a {
  font-weight: bold;
  color: black;
  height: 40px;
  width:25%;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  padding-top: 20px;
  border-bottom: black solid 2px;
  font-family: 'Courier New', Courier, monospace;
}

#nav a.router-link-exact-active {
  color:rgba(146, 139, 139, 0.685) ;
  font-style:italic;
  font-weight: bold;
}

/* #footer{
  border-top:  black solid 2px;
  width: 100%;
  height: 50px;
  position: absolute;
  bottom: 0%;
  text-align: center;
  padding: 10px;
} */
#footer a{
  font-weight: bold;
  color: black;
  height: 40px;
  text-decoration: underline;
  font-family: 'Courier New', Courier, monospace;
}
.sidenav {
  height: 70%;
  width: 13%;
  position: fixed;
  z-index: 1;
  top: 30%;
  left: 87%;
  background-color: rgb(16, 124, 79);
  overflow-x: hidden;
  padding-top: 20px;
}
.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
}
</style>
