<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<template>
  <v-data-table
    :headers="headers"
    :items="users"
    class="elevation-4"
  >
    <template slot="items" slot-scope="props">
      <td>{{ props.item.id }}</td>
      <td>{{ props.item.name }}</td>
      <td>{{ props.item.email }}</td>
      <td>{{ props.item.company.name }}</td>
      <td>{{ props.item.phone }}</td>
      <td>{{ props.item.website }}</td>
  </template>
  </v-data-table>
</template>

<script>
import axios from 'axios';

export default {
  name: 'about',
  data() {
    return {
      headers: [
        {
          sortable: false,
          text: 'ID',
          value: 'id'
        },
        { text: 'Name', value: 'name' },
        { text: 'Email', value: 'email' },
        { text: 'Company', value: 'company.name' },
        { text: 'Phone', value: 'phone' },
        { text: 'Website', value: 'website' }
      ],
      users: [],
      errors: []
    };
  },
  async created() {
    try {
      const response = await axios.get(
        `http://jsonplaceholder.typicode.com/users`
      );
      this.users = response.data;
    } catch (e) {
      this.errors.push(e);
    }
  }
};
</script>
