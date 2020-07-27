<template>
  <b-container class="w-100 h-100">
    <b-col align-v="start">
      <b-row class="mx-0">
        <HeaderResults
          :jsonData="jsonData" 
          :resultsPageMax="resultsPageMax"
          :lecturePage="lecturePage"
          :resultsPage="resultsPage"
          @updateResultsPage="changeResultsPage($event)"
          @findNextLecturePage="findNextLecturePage($event)"
        />
      </b-row>
      <b-row class="mx-0">
        <ContentResults 
          :jsonData="jsonData" 
          :lecturePage="lecturePage"
          :resultsPage="resultsPage"
          @urlIsClicked="urlIsClicked($event)"
        />
      </b-row>
      <b-row class="w-100 mx-0">
        <ContainerSurvey 
          :jsonData="jsonData" 
          :lecturePage="lecturePage"
          :resultsPage="resultsPage"
          :resultsPageMax="resultsPageMax"
          :urlClickCount="urlClickCount"
          :uuid="uuid"
          @updateResultsPage="changeResultsPage($event)"
        />
      </b-row>
    </b-col>
  </b-container>
</template>

<script>
import HeaderResults from './results/HeaderResults'
import ContentResults from './results/ContentResults'
import ContainerSurvey from './ContainerSurvey'

export default {
  name: 'ContainerResults',
  props: ['lecturePage', 'resultsPage', 'jsonData', 'keyUpdateProps', 'uuid'],
  components: {
    HeaderResults,
    ContentResults,
    ContainerSurvey
  },
  data () {
    return {
      resultsPageVar: 1,
      resultsPageMax: 0,
      urlClickCount: 0
    }
  }, 
  methods: {
    changeResultsPage(value) {
      this.resultsPageVar = value;
      this.$emit('updateResultsPageToApp', this.resultsPageVar);
      this.urlClickCount = 0;
    },
    urlIsClicked() {
      this.urlClickCount++;
    },
    findNextLecturePage() {
      this.$emit('findNextLecturePage')
    }
  },
  watch: {
    lecturePage() {
      this.resultsPageMax = this.jsonData[this.lecturePage - 1].attributes.results.length;
      this.resultsPageVar = 1;
      this.urlClickCount = 0;
      this.$emit('updateResultsPageToApp', this.resultsPageVar);
    },
    jsonData() {
      this.resultsPageMax = this.jsonData[this.lecturePage - 1].attributes.results.length;
      this.resultsPageVar = 1;
      this.urlClickCount = 0;
      this.$emit('updateResultsPageToApp', this.resultsPageVar);
    },
    resultsPageMax() {
      this.resultsPageMax = this.jsonData[this.lecturePage - 1].attributes.results.length;
    }
  }
}
</script>

<style scoped>
* {
  width: 100%;
  margin: 0px auto;
  padding: 0px !important;
  text-overflow: ellipsis;
  overflow: auto;
  background: rgb(183, 243, 229);
}
</style>
