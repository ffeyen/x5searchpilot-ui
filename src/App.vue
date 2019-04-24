<template>
  <b-container id="app" class="mw-100 wrapper">
    <b-row class="max-height" no-gutters>
      <b-col><ContainerLectures 
        :jsonData="jsonData" 
        @updateLecturePageToApp="changeLecturePage($event)"
      /></b-col>
      <b-col><ContainerResults 
        :jsonData="jsonData" 
        :lecturePage="lecturePage"
        :resultsPage="resultsPage" 
        @updateResultsPageToApp="changeResultsPage($event)"
      /></b-col>
    </b-row>
  </b-container>
</template>

<script>
import axios from 'axios'

import ContainerLectures from '@/components/ContainerLectures'
import ContainerResults from '@/components/ContainerResults'

//import lectures from './model/dummy-lectures.json'
//import results from './model/dummy-results.json'
//import jsonData from './model/dummy-combined.json'

import jsonEmpty from './model/empty.json'
import { json } from 'body-parser';

export default {
  name: 'App',
  components: {
    ContainerLectures,
    ContainerResults
  },
  data() { 
    return {
      jsonData: jsonEmpty,
      lecturePage: 1,
      resultsPage: 1,
      keyUpdateProps: 1
    } 
  },
  methods: {
    changeLecturePage(value) {
      this.lecturePage = value;
    },
    changeResultsPage(value) {
      this.resultsPage = value;
    }
  },
  beforeCreate() {
    axios.get('http://localhost:3030/lectures/')
      .then(response => {
        this.jsonData = JSON.parse(JSON.stringify(response.data));
      })
      .catch(error => {
        this.errors.push(error)
    })
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
