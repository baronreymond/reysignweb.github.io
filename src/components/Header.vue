<template>

  <div class="app-Header">
  <label class="logo">DesignX</label>
 
    <nav>
    
      <ul>
      <ui>
        <li><router-link to="/">Home</router-link></li> 
        <li><router-link to="/About" >About</router-link></li>
        <li><router-link to="/Services" >Services</router-link></li>
        <li><router-link to="/Contact" >Contact</router-link></li>
        <li><router-link to="/Signin" >Account Settings</router-link></li>
      </ui>
      </ul>
      
    </nav>

  </div>
</template>

<script >



export default {
  name: 'App',
  props: {
    msg: String
  },
  

}



</script>



<style scoped>


.img-horse{
  margin: 0 auto;
  width: 1000px;
}

header {
  background:#34495e;
 
}

nav {
  height: 80px;
  width: 100%;
  background: #34495e;

}

nav ul {
  margin: 0;
  padding: 0;
  margin-Right: 40px;
}
nav li {
  display: inline-block;
  margin: 0px 8px;
  line-height: 80px;
  padding: top 25px;
  
}

nav a {
color: white;
text-decoration: none;
text-transform: uppercase;
font-size: 18px;
padding: 7px 10px;
border: 1px solid transparent;
border-radius: 2px;

}

nav a:hover {
  cursor: pointer;
  color:#FF0000;
}

@media (max-width: 1048px){
  labe.logo{
    font-size: 32px;
    padding-left: 60px;
  }
  nav ul {
    float: Right;
    margin-Right:40px;
  }
  nav router-link{
    font-size: 17px;
  }
}

@media (max-width: 909px){


}

label.logo {
  font-size: 35px;
  font-weight: bold;
  color: white;
  padding: 0 100px;
  line-height: 80px;
  float: left;
}

a.active,a:hover{
  border: 1px solid white;
  transition: .5s;
}

nav #icon{
color: white;
font-size: 30px;
line-height: 80px;
float: Right;
margin-Right: 40px;
cursor: pointer;
display: none;
}

@media (max-width: 1048px){
label.logo{
  font-size: 30px;
  padding-left: 60px;
}
nav ui{
  margin-Right: 20px;
}
nav a{
  font-size: 20px;
}
}
@media (max-width: 909px){
  nav #icon{
    display: block;
  }
  nav ul{
    position: fixed;
    width: 100%;
    height: 100vh;
    background: #2f3640;
    top: 80px;
    left: -100%;
    text-align: center;
    transition: all .5s;
  }
  nav li {
    display: block;
    margin: 50px 0;
    line-height: 30px;
  }
  nav router-link{
  font-size: 20px;
}
router-link.active,router-link:hover {
  border: none;
  color: #3498db;

}

}
.img-horse{
  float:left;
}
</style>