<template>
  <b-container>
    <h5 class="description text">Uni Osnabrück | {{ semester}} |<b>{{ faculty }}</b></h5>
    <h3 class="text">{{ title }}</h3>
    <p class="description text">{{ description }}</p>
    <template v-if="lang_origin !== 'en'">
      <h5 class="description text">Übersetzung {{ lang_origin }} von zu en</h5>
      <h3 class="text">{{ title_translated }}</h3>
      <p class="description text">{{ description_translated }}</p>
    </template>
  </b-container>
</template>

<script>
export default {
  name: 'ContentLectures',
  props: ['jsonData', 'lecturePage'],
  data () {
    return {
      title: '',
      title_translated: '',
      description: '',
      description_translated: '',
      semester: '',
      lang_origin: '',
      faculty: ''
    }
  },
  watch: {
    lecturePage(value) {
      var index = value - 1;
      this.title = this.jsonData[index].attributes.title
      this.title_translated = this.jsonData[index].attributes.title_translated
      this.description = this.jsonData[index].attributes.description
      this.description_translated = this.jsonData[index].attributes.description_translated
      this.semester = this.jsonData[index].attributes.semester
      this.lang_origin = this.jsonData[index].attributes.language
      this.faculty = this.jsonData[index].attributes.faculty
    },
    jsonData() {
      var index = this.lecturePage - 1;
      this.title = this.jsonData[index].attributes.title
      this.title_translated = this.jsonData[index].attributes.title_translated
      this.description = this.jsonData[index].attributes.description
      this.description_translated = this.jsonData[index].attributes.description_translated
      this.semester = this.jsonData[index].attributes.semester
      this.lang_origin = this.jsonData[index].attributes.language
      this.faculty = this.jsonData[index].attributes.faculty
    }
  },
  mounted() {
      this.title = this.jsonData[0].attributes.title
      this.title_translated = this.jsonData[0].attributes.title_translated
      this.description = this.jsonData[0].attributes.description
      this.description_translated = this.jsonData[0].attributes.description_translated
      this.semester = this.jsonData[0].attributes.semester
      this.lang_origin = this.jsonData[0].attributes.language
      this.faculty = this.jsonData[0].attributes.faculty
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
