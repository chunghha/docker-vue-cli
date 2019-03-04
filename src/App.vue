<template>
  <v-app dark>
    <v-navigation-drawer temporary v-model="drawer" :mini-variant="mini" dark absolute>
      <v-list class="pa-1">
        <v-list-tile v-if="mini" @click.stop="mini = !mini">
          <v-list-tile-action>
            <v-icon>chevron_right</v-icon>
          </v-list-tile-action>
        </v-list-tile>
        <v-list-tile avatar tag="div">
          <v-list-tile-avatar>
            <img src="./assets/logo.png">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Docker Vue CLI</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn icon @click.stop="mini = !mini">
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
      <v-list class="pt-0" dense>
        <v-divider light></v-divider>
        <v-list-tile ripple v-for="item in items" :key="item.title" @click>
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
        <router-link to="/">Home</router-link>|
        <router-link to="/table">Table</router-link>|
        <router-link to="/form">Form</router-link>|
        <router-link to="/chart">Chart</router-link>|
        <router-link to="/carousel">Carousel</router-link>|
        <router-link to="/picker">Picker</router-link>|
        <router-link to="/snackbar">Snackbar</router-link>|
        <router-link to="/stepper">Stepper</router-link>|
        <router-link to="/subheader">Subheader</router-link>|
        <router-link to="/tabs">Tabs</router-link>|
        <router-link to="/timeline">Timeline</router-link>|
        <router-link to="/youtube">Youtube</router-link>|
        <router-link to="/pdf">PDF</router-link>
      </div>
      <v-spacer></v-spacer>
      <v-btn flat icon color="amber" @click="goToRepo">
        <v-icon>fab fa-github</v-icon>
      </v-btn>
      <v-btn flat icon @click.stop="drawer = !drawer" color="white">
        <v-icon dark>menu</v-icon>
      </v-btn>
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

<script lang='ts'>
import { Component, Vue } from 'vue-class-decorator';

export default class App extends Vue {
  items = [
    { title: 'Home', icon: 'dashboard' },
    { title: 'About', icon: 'question_answer' }
  ];
  right = false;
  drawer = false;
  mini = false;
  isDark = true;

  goToRepo() {
    location.assign('https://github.com/chunghha/docker-vue-cli');
  }
}
</script>

<style>
#app {
  font-family: "Lato", Helvetica, Arial, sans-serif;
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
