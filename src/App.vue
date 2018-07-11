<template>

  <div id="app">
    <header>  
      
      <div class="container">
        <div class="header">
          <h1><a href="#">WorkSpace</a></h1>
          
        <div class="header__user">
              <img src="http://moziru.com/images/leaf-clipart-green-leaf-14.png" alt="user_name">
          </div>
        </div>
      </div>
      
      
    </header>
    <div class="menu" id="menu_col">
      <router-link to="/" class="logo"><img src="./assets/logo.png" ></router-link>
      <nav class="menu__nav">
        <ul class="menu__list">
          <li class="menu__item">
            <router-link to="/task">Work Time</router-link>
          </li>
          <li class="menu__item">
            <router-link to="/">Work Time</router-link>
          </li>
          <li class="menu__item">
            <router-link to="/">Work Time</router-link>
          </li>
          <li class="menu__item">
            <router-link to="/">Work Time</router-link>
          </li>
        </ul>
      </nav>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
@import "./styles/main"
</style>
