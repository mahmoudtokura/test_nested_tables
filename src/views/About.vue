<template>
  <div>
    <custom-table :dataList="usersData">
      <template slot="tableHeader">
        <th class="first-header-column" style="width: 10px;"></th>
        <th>name</th>
        <th>username</th>
        <th>email</th>
        <th>phone</th>
        <th>website</th>
      </template>
      <template slot-scope="{ result, rowIndex }" slot="tableData">
        <!-- level 1 -->
        <tr data-toggle="collapse" :data-target="`#user${rowIndex}`">
          <td class="text-center">
            <span>+</span>
          </td>
          <td>{{ result.name }}</td>
          <td>{{ result.username }}</td>
          <td>{{ result.email }}</td>
          <td>{{ result.phone }}</td>
          <td>{{ result.website }}</td>
        </tr>
        <tr>
          <td colspan="6" class="hiddenRow">
            <div
              :id="`user${rowIndex}`"
              class="collapse"
              style="padding-left: 30px;"
            >
              <!-- level 2 -->
              <tr data-toggle="collapse" :data-target="`#address${rowIndex}`">
                <td class="text-center">
                  <span>+</span>
                </td>
                <td>{{ result.address.street }}</td>
                <td>{{ result.address.suite }}</td>
                <td>{{ result.address.city }}</td>
                <td>{{ result.address.zipcode }}</td>
              </tr>
              <tr>
                <td colspan="12" class="hiddenRow">
                  <div :id="`address${rowIndex}`" style="padding-left: 60px;">
                    <tr
                      data-toggle="collapse"
                      :data-target="`#company${rowIndex}`"
                    >
                      <h3>{{ result.company.name }}</h3>
                      <p>{{ result.company.catchPhrase }}</p>
                    </tr>
                  </div>
                </td>
              </tr>
            </div>
          </td>
        </tr>
      </template>
    </custom-table>
  </div>
</template>

<script>
import { data } from "../services/testData";
import CustomTable from "../components/CustomTable";

export default {
  components: {
    CustomTable
  },
  data() {
    return {
      usersData: []
    };
  },
  created() {
    this.getDataList();
  },
  methods: {
    getDataList() {
      this.usersData = data;
    }
  }
};
</script>

<style scoped>
table {
  width: 100%;
}
th {

}
.table-responsive {
  overflow: auto;
}
.first-header-column {
  max-width: 0%;
  padding-left: 0%;
}
</style>
