<template>
  <b-container class="w-100">
    <b-col align-v="start">
      <b-row>
        <HeaderResults
          :resultsPageMax="resultsPageMax"
          :lecturePage="lecturePage"
          :resultsPage="resultsPage"
          @updateResultsPage="changeResultsPage($event)"
        />
      </b-row>
      <b-row>
        <ContentResults 
          :jsonData="jsonData" 
          :lecturePage="lecturePage"
          :resultsPage="resultsPage"
        />
      </b-row>
      <b-row class="w-100">
        <ContainerSurvey 
          :jsonData="jsonData" 
          :lecturePage="lecturePage"
          :resultsPage="resultsPage"
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
  props: ['lecturePage', 'resultsPage', 'jsonData'],
  components: {
    HeaderResults,
    ContentResults,
    ContainerSurvey
  },
  data () {
    return {
      resultsPageVar: 1,
      resultsPageMax: this.jsonData.lectures[this.lecturePage - 1].attributes.results.length
    }
  }, 
  methods: {
    changeResultsPage(value) {
      this.resultsPageVar = value;
      this.$emit('updateResultsPageToApp', this.resultsPageVar);
    }
  },
  watch: {
    lecturePage() {
      this.resultsPageMax = this.jsonData.lectures[this.lecturePage - 1].attributes.results.length;
      this.resultsPageVar = 1;
      this.$emit('updateResultsPageToApp', this.resultsPageVar);
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
  background: rgb(183, 243, 229);
}
</style>
