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
        <td>{{ props.item.id }}</td>
        <td>{{ props.item.name }}</td>
        <td>{{ props.item.email }}</td>
        <td>{{ props.item.company.name }}</td>
        <td>{{ props.item.phone }}</td>
        <td>{{ props.item.website }}</td>
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
      headers: [
        { text: 'ID', value: 'id', align: 'center' },
        { text: 'Name', value: 'name', align: 'center' },
        { text: 'Email', value: 'email', align: 'center' },
        { text: 'Company', value: 'company.name', align: 'center' },
        { text: 'Phone', value: 'phone', align: 'center' },
        { text: 'Website', value: 'website', align: 'center' }
      ],
      users: [],
      errors: [],
      loading: true
    };
  },
  async created() {
    try {
      const response = await axios.get(
        `http://jsonplaceholder.typicode.com/users`
      );
      this.users = response.data;
      // fake delay
      const delay = ms => new Promise(res => setTimeout(() => res(), ms));
      await delay(1000);
      this.loading = false;
    } catch (e) {
      this.errors.push(e);
    }
  }
};
</script>
