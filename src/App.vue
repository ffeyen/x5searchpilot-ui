<template>
  <b-container id="app" class="mw-100 wrapper">
    <b-row class="max-height" no-gutters>
      <b-col class="mx-0"><ContainerLectures 
        ref="containerLectures"
        :jsonData="jsonData" 
        :completedLectures="completedLectures"
        @updateLecturePageToApp="changeLecturePage($event)"
      /></b-col>
      <b-col class="mx-0"><ContainerResults 
        :jsonData="jsonData" 
        :lecturePage="lecturePage"
        :resultsPage="resultsPage"
        :uuid="uuid"
        @updateResultsPageToApp="changeResultsPage($event)"
        @findNextLecturePage="findNextLecturePage($event)"
      /></b-col>
    </b-row>
  </b-container>
</template>

<script>
import ApiService from '@/services/ApiService.js'
import { uuid } from 'vue-uuid';

import ContainerLectures from '@/components/ContainerLectures'
import ContainerResults from '@/components/ContainerResults'

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
      keyUpdateProps: 1,
      localStorageKeyUuid: 'x5pilot-uuid',
      uuid: uuid.v1(),
      completedLectures: []
    } 
  },
  methods: {
    changeLecturePage(value) {
      this.lecturePage = value;
    },
    changeResultsPage(value) {
      this.resultsPage = value;
    },
    createUID() {
      if (localStorage.getItem(this.localStorageKeyUuid) === null) {
        localStorage.setItem(this.localStorageKeyUuid, this.uuid);
      } else {
        this.uuid = localStorage.getItem(this.localStorageKeyUuid)
      }
    },
    getDataFromApi() {
      ApiService.getLectures()
      .then(response => {
        this.jsonData = JSON.parse(JSON.stringify(response.data))
        this.checkForCompletedLectures ()
      })
      .catch(error => {
        console.log("Error: Could not get data from API (App.vue:getDataFromApi():getLectures())")
        this.errors.push(error)
      })
    },
    checkForCompletedLectures() {
      for (let lectureId = 0; lectureId < this.jsonData.length; lectureId++) {
        let notAllResultCompleted = false
        for (let resultId = 0; resultId < this.jsonData[lectureId].attributes.results.length; resultId++) {
          let keyName = "x5pilot" + "-l" + Number(lectureId) + "-r" + Number(resultId)
          if (!notAllResultCompleted) {
            if (localStorage.getItem(keyName) === null) {
              notAllResultCompleted = true
            } 
          } 
        }
        if (notAllResultCompleted) {
          this.completedLectures[lectureId] = false
        } else {
          this.completedLectures[lectureId] = true
        }
      }
    },
    findNextLecturePage() {
      this.$refs.containerLectures.findNextLecturePage()
    }
  },
  created() {
    this.getDataFromApi()
    this.createUID()
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
