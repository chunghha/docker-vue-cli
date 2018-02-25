<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<template>
  <el-table
    v-loading="loading"
    :data="users"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <p>Street: {{ props.row.address.street }}</p>
        <p>Suite: {{ props.row.address.suite }}</p>
        <p>City: {{ props.row.address.city }}</p>
        <p>Zip: {{ props.row.address.zipcode }}</p>
      </template>
    </el-table-column>
    <el-table-column
      label="ID"
      prop="id"
      width=40>
    </el-table-column>
    <el-table-column
      label="Name"
      prop="name">
    </el-table-column>
    <el-table-column
      label="Email"
      prop="email">
    </el-table-column>
    <el-table-column
      label="Company"
      prop="company.name">
    </el-table-column>
    <el-table-column
      label="Phone"
      prop="phone">
    </el-table-column>
    <el-table-column
      label="Website"
      prop="website">
    </el-table-column>
  </el-table>
</template>

<script>
import axios from 'axios';

export default {
  name: 'about',
  data() {
    return {
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

<style>
.el-table {
  text-align: left;
}
</style>