<template>
  <b-container class="mh-100">
    <h3 class="text">{{ title }}</h3>
    <b-row>
      <b-col><p class="cut-text max-lines-10 text">{{ description }}</p></b-col>
    </b-row>
    <p class="cut-text max-lines-1 text link"><a :href="url" target="_blank">{{ url }}</a></p>
  </b-container>
</template>

<script>
export default {
  name: 'ContentResults',
  props: ['resultsPage', 'jsonData', 'lecturePage'],
  data () {
    return {
      page: this.resultsPage,
      title: this.jsonData[0].attributes.results[0].title,
      description: this.jsonData[0].attributes.results[0].description,
      tags: this.jsonData[0].attributes.results[0].tags,
      url: this.jsonData[0].attributes.results[0].url
    }
  },
  methods: {
    updateContentResultsView() {
      var indexLecturePage = this.lecturePage - 1;
      var indexResultsPage = this.resultsPage - 1;
      this.title = this.jsonData[indexLecturePage].attributes.results[indexResultsPage].title;;
      this.description = this.jsonData[indexLecturePage].attributes.results[indexResultsPage].description;
      this.tags = this.jsonData[indexLecturePage].attributes.results[indexResultsPage].tags;
      this.url = this.jsonData[indexLecturePage].attributes.results[indexResultsPage].url;
    }
  },
  watch: {
    resultsPage() {
      this.updateContentResultsView();
    },
    lecturePage() {
      this.updateContentResultsView();
    },
    jsonData() {
      this.updateContentResultsView();
    }
  }
}
</script>

<style scoped>
* {
  height: auto;
  margin: 0;
  padding: 0.33rem;
  text-align: left;
  line-height: 1.5rem;
}

h3 {
  padding-top: 2rem;
  margin-bottom: 1rem;
}

a {
  word-wrap: break-all; 
  white-space: -moz-pre-wrap; 
  white-space: pre-wrap;   
  overflow: hidden;
  text-overflow: ellipsis;
}

.thumbnail {
  padding-left: 1.5rem;
  margin-top: -0.2rem;
}
.col-thumbnail {
  max-width: 160px;
}

.cut-text {
   overflow: auto;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-box-orient: vertical;
}

.max-lines-1 {
   -webkit-line-clamp: 1;
}

.max-lines-10 {
   -webkit-line-clamp: 10;
}

.link {
    padding-bottom: 3rem;
}

.text {
    margin-top: -0.5rem;
    padding-right: 2rem;
    padding-left: 2rem;
    line-height: 1.5rem;
}
</style>
