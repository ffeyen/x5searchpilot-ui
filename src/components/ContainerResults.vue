<template>
  <b-container class="w-100">
    <b-col align-v="start">
      <b-row>
        <HeaderResults
          :resultsPageMax="resultsPageMax"
          @updateResultsPage="changeResultsPage($event)"
        />
      </b-row>
      <b-row>
        <ContentResults 
          :jsonResults="jsonResults"
          :resultsPage="resultsPageVar"
        />
      </b-row>
      <b-row class="w-100">
        <ContainerSurvey 
          :jsonLectures="jsonLectures" 
          :lecturePage="lecturePage"
          :resultsPage="resultsPageVar"
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
  props: ['jsonLectures', 'lecturePage', 'jsonResults', 'resultsPage'],
  components: {
    HeaderResults,
    ContentResults,
    ContainerSurvey
  },
  data () {
    return {
      resultsPageVar: 1,
      resultsPageMax: this.jsonResults.results.length
    }
  }, 
  methods: {
    changeResultsPage(value) {
      this.resultsPageVar = value;
      this.$emit('updateResultsPageToApp', this.resultsPageVar)
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
