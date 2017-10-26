<template>
  <div class="patient">
  <el-table
    :data="patients"
    border
    :default-sort = "{prop: 'id', order: 'ascending'}"
    row-key = 'id'
    style = "width: 100%"
    v-on:row-click = "filterPatient">
    <el-table-column
      prop="id"
      label="ID"
      sortable
      width="100"
      id="id">
    </el-table-column>
    <el-table-column
      prop="age"
      label="Age"
      sortable>
    </el-table-column>
    <el-table-column
      prop="risk_score"
      sortable
      label="Risk">
    </el-table-column>
    <el-table-column
      prop="sex"
      sortable
      label="Sex">
    </el-table-column>
  </el-table>
  </div>
</template>

<script>

export default {
  name: 'Patient',
  data() {
    return {
      patients: [],
      pid: '',
    }
  },
  methods: {
    // This function is attached to the table row above, it passes PID to
    // filterPatientRecords where it lives in App.vue
    // filterPatientRecords is listening for a PID change hence the this.$emit call
    filterPatient: function (e) {
      this.pid = e.id;
      this.$emit('filterPatientRecords', this.pid);
    },
    // See comments in chart.vue
    fetch_patients: function () {
      this.$http.get('http://localhost:3000/patients?_sort=id&_order=desc').then((response) => {
        // get body data
        this.patients = response.body;
        // console.log(this.patients);
      }, (response) => {
        // error callback
        console.log('error', response);
      });
    },
  },
  // Fetch the patients dats Once when component is loaded. This is lazy load sort of
  // way to go about it.
  created: function () {
    this.fetch_patients();
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
