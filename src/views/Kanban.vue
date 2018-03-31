<template>
    <v-container fluid fill-height>
      <v-layout>
        <v-card id="tasks-card" class="ma-2 pa-2" height="100%">
          <taskcomp></taskcomp>
        </v-card>
        <v-card id="board-card" class="ma-2 pa-2" height="100%">
          <board></board>
        </v-card>
      </v-layout>
    </v-container>
</template>

<script>
  import draggable from 'vuedraggable'
  import Tasks from '../components/Tasks.vue'
  import Board from '../components/Board.vue'
  export default {
    data: () => ({
      drawer: false
    }),
    props: {
      source: String
    },
    components: {
      draggable,
      taskcomp: Tasks,
      board: Board
  },
  }
</script>

<style>
  #tasks-card {
    min-height: 500px;
    width: 20%;
  }
  #board-card {
    min-height: 500px;
    width: 80%
  }

  .card__title .status {
    font-size: 15px !important;
    color: lightgreen;
  }

  .card__title .task-board {
    font-size: 15px !important;
    color: lightblue;
  }

  .card__title .task-tasks {
    font-size: 15px !important;
    color: cyan;
  }
</style>
