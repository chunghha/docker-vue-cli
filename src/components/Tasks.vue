<template>
  <div>
    <v-card>
      <v-btn absolute dark fab top right color="pink lighten-1"
        @click=toggleNewTaskCard()>
        <v-icon>add</v-icon>
      </v-btn>
      <v-card-text v-show="newTaskCard">
        <h4>New Task</h4>
        <v-text-field
          id="task-input"
          name="task-input"
          label="Task description"
        ></v-text-field>
        <v-btn color="primary" @click=inputTask()>Add Task</v-btn>
      </v-card-text>
    </v-card>
    <h4>Tasks</h4>
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex md12 v-for="(task, key) in tasks">
          <draggable :id="key" v-model="tasks" :options="{group: { name:'tasks', pull:'clone', put:'false'}}"
            @start="drag=true" @end="drag=false" :move="chooseTask">
            <v-card>
              <v-card-title>
                <div class="task-tasks">{{ task.description }}</div>
              </v-card-title>
            </v-card>
          </draggable>
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
      tasks: [
        { id: 0, description: 'add hasShadowRoot' },
        { id: 1, description: 'support object syntax' },
        { id: 2, description: 'add compiler types' },
        { id: 3, description: 'render async css' },
        { id: 4, description: 'invoke handlers' },
        { id: 5, description: 'allow style element' },
        { id: 6, description: 'add browser ESM' },
      ],
      targetTask: '',
      targetStatus: '',
      newTaskCard: false,
    };
  },
  components: {
    draggable,
  },
  created() {
    eventBus.$on('statusSelected', (status) => {
      this.targetStatus = status;
      this.sendTaskData(this.targetTask);
    });
  },
  methods: {
    chooseTask(event) {
      this.targetTask = event.from.id;
    },
    sendTaskData(id) {
      let myTask = this.tasks.filter((task) => {
        return task.id == id;
      });
      let taskData = {
        status: this.targetStatus,
        task: myTask,
      };
      eventBus.$emit('sendingTask', taskData);
    },
    inputTask() {
      let elem = document.getElementById('task-input');
      let taskId = this.tasks.length;
      console.log('id: ' + taskId);
      console.log('value: ' + elem.value);
      this.tasks.push({ id: taskId, description: elem.value });
    },
    toggleNewTaskCard() {
      this.newTaskCard = !this.newTaskCard;
    },
  },
};
</script>
