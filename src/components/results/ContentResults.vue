<template>
  <b-container class="mh-100">
    <h3 class="text">{{ title }}</h3>
    <p class="cut-text max-lines-10 text">{{ subtitle }}</p>
    <p class="cut-text max-lines-1 text link"><a :href="url" target="_blank">{{ url }}</a></p>
  </b-container>
</template>

<script>
export default {
  name: 'ContentResults',
  props: ['jsonResults', 'resultsPage'],
  data () {
    return {
      page: this.resultsPage,
      title: this.jsonResults.results[0].attributes.title,
      subtitle: this.jsonResults.results[0].attributes.subtitle,
      describtion: this.jsonResults.results[0].attributes.describtion,
      tags: this.jsonResults.results[0].attributes.tags,
      url: this.jsonResults.results[0].attributes.url_result,
      urlThumbnail: this.jsonResults.results[0].attributes.url_thumbnail
    }
  },
  watch: {
    resultsPage(value) {
      var index = value - 1;
      this.title = this.jsonResults.results[index].attributes.title,
      this.subtitle = this.jsonResults.results[index].attributes.subtitle,
      this.describtion = this.jsonResults.results[index].attributes.describtion,
      this.tags = this.jsonResults.results[index].attributes.tags,
      this.url = this.jsonResults.results[index].attributes.url_result,
      this.urlThumbnail = this.jsonResults.results[index].attributes.url_thumbnail
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
    padding-right: 2rem;
    padding-left: 2rem;
    line-height: 1.5rem;
}
</style>
