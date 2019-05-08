<template>
  <b-container>
    <h3 class="text">{{ title }}</h3>
    <p class="max-lines-3 text">{{ subtitle }}</p>
    <p class="description text">{{ description }}</p>
  </b-container>
</template>

<script>
export default {
  name: 'ContentLectures',
  props: ['jsonData', 'lecturePage'],
  data () {
    return {
      title: '',
      subtitle: '',
      description: '',
    }
  },
  watch: {
    lecturePage(value) {
      var index = value - 1;
      this.title = this.jsonData[index].attributes.title;
      this.subtitle = this.jsonData[index].attributes.subtitle;
      this.description = this.jsonData[index].attributes.description;
    },
    jsonData() {
      var index = this.lecturePage - 1;
      this.title = this.jsonData[index].attributes.title;
      this.subtitle = this.jsonData[index].attributes.subtitle;
      this.description = this.jsonData[index].attributes.description;
    }
  },
  mounted() {
    this.title = this.jsonData[0].attributes.title;
    this.subtitle = this.jsonData[0].attributes.subtitle;
    this.description = this.jsonData[0].attributes.description;
  }
}
</script>

<style scoped>
* {
  height: auto;
  margin: 0;
  margin: 0 auto;
  padding: 0.33rem;
  text-align: left;
}

h3 {
  padding-top: 2rem;
  margin-bottom: 1rem;
}

.max-lines-3 {
   overflow: auto;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-box-orient: vertical;
   -webkit-line-clamp: 3;
}

.description {
    max-height: 100% auto;
    margin-top: 1rem;
    padding-bottom: 1rem;
    overflow-x: hidden;
    overflow-y: auto;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
}

.text {
    padding-right: 2rem;
    padding-left: 2rem;
    line-height: 1.5rem;
}
</style>
