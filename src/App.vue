<template>
  <v-app dark>
    <v-navigation-drawer app class="blue-gray darken-4" dark
      stateless hide-overlay :mini-variant.sync="mini" v-model="drawer">
      <v-toolbar flat class="transparent">
        <v-list>
          <v-list-tile avata>
            <v-list-tile-avatar>
              <img src="./assets/logo.png" >
            </v-list-tile-avatar>
            <v-list-tile-action>
              <v-btn icon @click.native.stop="mini = !mini">
                <v-icon>chevron_left</v-icon>
            </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-divider></v-divider>
      <v-list dense class="pt-0">
        <v-list-tile v-for="item in items" :key="item.title" @click="">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/table">Table</router-link> |
        <router-link to="/form">Form</router-link> |
        <router-link to="/chart">Chart</router-link> |
        <router-link to="/carousel">Carousel</router-link> | 
        <router-link to="/picker">Picker</router-link> | 
        <router-link to="/snackbar">Snackbar</router-link> | 
        <router-link to="/tabs">Tabs</router-link>
      </div>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app>
      <v-spacer></v-spacer>
      <div id="year">&copy; {{ new Date().getFullYear() }}</div>
      </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' }
        ],
        right: null,
        drawer: true,
        mini: true,
      }
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #a6bdd4;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #a6bdd4;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#year {
  padding-right: 20px;
}
</style>
