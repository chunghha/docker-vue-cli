<template>
  <div>
    <h4>Board</h4>
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 sm6 md3 v-for="(value, key) in statuses">
          <v-card>
            <draggable :id="key" v-model="tasks" :options="{group:'tasks'}"
              @start="drag=true" @end="drag=false" @add="newTask">
              <v-card-title>
                <div class="status">
                  <v-badge color="green" v-model="tasks" right>
                    <span slot="badge">{{ statuses[key].length }}</span>
                    <span>{{ capLetter(key) }}</span>
                  </v-badge>
                </div>
              </v-card-title>
            </draggable>
            <v-card v-for="task in value">
              <draggable :id="key" v-model="tasks" :options="{group:'tasks'}"
              @start="drag=true" @end="drag=false" @add="newTask">
                <v-card-title>
                  <div class="task-board">{{ task[0].description }}</div>
                </v-card-title>
              </draggable>
            </v-card>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { eventBus } from '../../src/main.ts';
import draggable from 'vuedraggable';

export default {
  data: () => {
    return {
      tasks: [],
      statuses: {
        new: [],
        progress: [],
        resolved: [],
        completed: []
      }
    };
  },
  components: {
    draggable
  },
  created() {
    eventBus.$on('sendingTask', taskData => {
      this.statuses[taskData.status].push(taskData.task);
    });
  },
  methods: {
    removeTask(id) {
      this.tasks = this.tasks.filter((task) => {
        return task.id != id;
      });
    },
    capLetter(input) {
      return input.charAt(0).toUpperCase() + input.slice(1);
    },
    newTask(event) {
      eventBus.$emit('statusSelected', event.to.id);
    }
  }
};
</script>
