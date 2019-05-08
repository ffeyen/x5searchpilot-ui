<template>
  <b-container class="mh-100">
    <h5 class="text"><b>{{ type.toUpperCase() }}</b> | <b>{{ provider }}</b></h5>
    <h3 class="text">{{ title }}</h3>
    <p v-if="description !== null" class="cut-text text">{{ description }}</p>
    <p v-if="description === null" class="cut-text text"><i>Keine Beschreibung vorhanden</i></p>
    <p class="cut-text text link">
      <a 
      :href="url" 
      target="_blank" 
      @click="urlIsClicked()"
      >im neuen Fenster öffnen</a>
    </p>
    <p class="cut-text text link">
      <a 
      :href="urlToGoogleTranslate" 
      target="_blank"
      >übersetzen (Google Translate)</a>
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
      provider: this.jsonData[0].attributes.results[0].provider,
      urlToGoogleTranslate: ''
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
      this.parseGoogleTranslateUrl()
    },
    urlIsClicked() {
      this.$emit('urlIsClicked');
    },
    parseGoogleTranslateUrl() {
      let baseUrl = "https://translate.google.de/?ie=UTF-8&client=tw-ob#view=home&op=translate&sl=auto&tl=de&text=";
      if (this.description === null) {
        this.urlToGoogleTranslate = baseUrl + this.title;
      } else {
        this.urlToGoogleTranslate = baseUrl + this.title + "%0A" + this.description;
      }
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

.link {
  padding-bottom: 0rem;
  overflow: hidden;
}

.link:last-of-type {
  padding-top: 0rem;
  padding-bottom: 3rem;
}

.text {
  padding-right: 2rem;
  padding-left: 2rem;
  line-height: 1.5rem;
}
</style>
