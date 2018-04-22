<template>
  <v-card>
    <v-card-title>
      Contacts
      <v-spacer></v-spacer>
      <v-text-field
        append-icon="search"
        label="Search"
        single-line
        hide-details
        v-model="search"
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="users"
      :loading="loading"
      :search="search"
      v-model="selected"
      item-key="name"
      select-all
      class="elevation-4"
      sort-icon="arrow_drop_down"
    >
    <v-progress-linear slot="progress" color="deep-orange darken4" indeterminate></v-progress-linear>
      <template slot="items" slot-scope="props">
        <td>
          <v-checkbox
            primary
            hide-details
            v-model="props.selected"
          ></v-checkbox>
        </td>
        <td class="text-xs-left">{{ props.item.id }}</td>
        <td class="text-xs-left">
        <v-edit-dialog
          :return-value.sync="props.item.name"
          lazy
        > {{ props.item.name }}
          <v-text-field
            slot="input"
            label="Edit"
            v-model="props.item.name"
            single-line
            counter
            :rules="[max25chars]"
          ></v-text-field>
        </v-edit-dialog>
        <td class="text-xs-left">{{ props.item.email }}</td>
        <td class="text-xs-left">{{ props.item.company.name }}</td>
        <td class="text-xs-left">{{ props.item.phone }}</td>
        <td class="text-xs-left">{{ props.item.website }}</td>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>

import axios from 'axios';

export default {
  name: 'about',
  data() {
    return {
      search: '',
      selected: [],
      max25chars: (v) => v.length <= 25 || 'Input too long!',
      headers: [
        { text: 'ID', value: 'id', align: 'left' },
        { text: 'Name', value: 'name', align: 'left' },
        { text: 'Email', value: 'email', align: 'left' },
        { text: 'Company', value: 'company.name', align: 'left' },
        { text: 'Phone', value: 'phone', align: 'left' },
        { text: 'Website', value: 'website', align: 'left' },
      ],
      users: [],
      errors: [],
      loading: true,
    };
  },
  async created() {
    try {
      const response = await axios.get(
        `http://jsonplaceholder.typicode.com/users`,
      );
      this.users = response.data;
      // fake delay
      const delay = (ms) => new Promise((res) => setTimeout(() => res(), ms));
      await delay(1000);
      this.loading = false;
    } catch (e) {
      this.errors.push(e);
    }
  },
};
</script>
