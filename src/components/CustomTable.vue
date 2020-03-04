<template>
  <div class="table-responsive container">
    <table class="table">
      <thead>
        <tr>
          <slot name="tableHeader"></slot>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(data, dataIndex) in dataList"
          :key="`dataList${dataIndex}`"
          data-toggle="collapse"
          :data-target="`#level1${dataIndex}`"
        >
          <slot name="tableData" :result="data" :rowIndex="dataIndex"></slot>
        </tr>
        <slot name="noTableData" v-if="dataList < 1"></slot>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  props: {
    dataList: Array
  },
  mounted() {
    console.log(this.dataList);
  }
};
</script>

<style>
</style>