<template>
  <div id="interface">
      <patient v-on:filterPatientRecords="filterPatientRecords"></patient>
    <div class="clipboard">
      <charts v-bind:pid="pid"></charts>
      <diagnosis v-bind:pid="pid"></diagnosis>
    </div>
  </div>
</template>

<script>
import Patient from './components/patient';
import Diagnosis from './components/diagnosis';
import Charts from './components/chart';

export default {
  name: 'app',
  components: {
    Patient,
    Diagnosis,
    Charts,
  },
  data() {
    return {
      pid: '',
    }
  },
  methods: {
    // Call this function when a PID is selected from the left side and update
    // the app pid so we can use it elsewhere via the Props
    filterPatientRecords: function (pid) {
      this.pid = pid;
    },
  },
};
</script>

<style>
/* Using flex so we can reliably handle additional stuff when needed */
body, html {
  height: 99.9%;
  width: 100%;
  display: flex;
  margin:0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#interface {
  display: flex;
  flex-flow: row;
  width: 99%;
}
.patient {
  flex: 1 25%;
}
.clipboard {
  display: flex;
  flex-flow: column;
  flex: 1 75%;
}
.charts {
  flex: 1 100%;
  overflow: auto;
  max-width: 1500px;
}
.chart {
  max-width: 90%
}
.diagnosis {
  flex: 1 100%;
  overflow: auto;
  max-width: 1500px;
}
</style>
