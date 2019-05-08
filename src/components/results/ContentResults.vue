<template>
  <b-container class="mh-100">
    <h5 class="text"><b>{{ type.toUpperCase() }}</b>provided by {{ provider }}</h5>
    <h3 class="text">{{ title }}</h3>
    <p v-if="description !== null" class="cut-text max-lines-10 text">{{ description }}</p>
    <p v-if="description === null" class="cut-text max-lines-10 text"><i>Keine Beschreibung vorhanden</i></p>
    <p class="cut-text max-lines-1 text link">
      <a 
      :href="url" 
      target="_blank" 
      @click="urlIsClicked()"
      >{{ url }}</a>
    </p>
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
      url: this.jsonData[0].attributes.results[0].url,
      type: this.jsonData[0].attributes.results[0].type,
      provider: this.jsonData[0].attributes.results[0].provider
    }
  },
  methods: {
    updateContentResultsView() {
      var indexLecturePage = this.lecturePage - 1
      var indexResultsPage = this.resultsPage - 1
      this.title = this.jsonData[indexLecturePage].attributes.results[indexResultsPage].title
      this.description = this.jsonData[indexLecturePage].attributes.results[indexResultsPage].description
      this.tags = this.jsonData[indexLecturePage].attributes.results[indexResultsPage].tags
      this.url = this.jsonData[indexLecturePage].attributes.results[indexResultsPage].url
      this.type = this.jsonData[indexLecturePage].attributes.results[indexResultsPage].type
      this.provider = this.jsonData[indexLecturePage].attributes.results[indexResultsPage].provider
    },
    urlIsClicked() {
      this.$emit('urlIsClicked');
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
}

h5 {
  padding-top: 1rem;
  margin-top: 1rem;
  padding-bottom: 1rem;
}

a {
  word-wrap: break-all; 
  white-space: -moz-pre-wrap; 
  white-space: pre-wrap;   
  overflow: hidden;
  text-overflow: ellipsis;
}

.cut-text {
  overflow: auto;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  margin-top: 1rem;
  padding-bottom: 1rem;
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
  padding-right: 2rem;
  padding-left: 2rem;
  line-height: 1.5rem;
}
</style>
