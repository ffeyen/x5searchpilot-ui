<template>
  <b-container id="app" class="mw-100 wrapper">
    <b-row class="max-height" no-gutters>
      <b-col><ContainerLectures 
        :jsonLectures="jsonLectures" 
        @updateLecturePageToApp="changeLecturePage($event)"
      /></b-col>
      <b-col><ContainerResults 
        :jsonLectures="jsonLectures" 
        :jsonResults="jsonResults" 
        :lecturePage="lecturePage"
        :resultsPage="resultsPage" 
        @updateResultsPageToApp="changeResultsPage($event)"
      /></b-col>
    </b-row>
  </b-container>
</template>

<script>
import ContainerLectures from '@/components/ContainerLectures'
import ContainerResults from '@/components/ContainerResults'

import lectures from './dummy-lectures.json'
import results from './dummy-results.json'

export default {
  name: 'App',
  components: {
    ContainerLectures,
    ContainerResults
  },
  data() { 
    return {
      jsonLectures: lectures,
      jsonResults: results,
      lecturePage: 1,
      resultsPage: 1
    } 
  },
  methods: {
    changeLecturePage(value) {
      this.lecturePage = value;
    },
    changeResultsPage(value) {
      this.resultsPage = value;
    }
  }
}
</script>

<style>
#app {
  margin-top: 0px;
  height: 100vh;
  overflow: auto;

  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;

  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #343a40;
}

.max-height {
  height: 100vh;
}

.wrapper {
  padding: 0px !important;
}
</style>
