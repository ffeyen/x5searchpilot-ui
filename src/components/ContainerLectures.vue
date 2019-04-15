<template>
  <b-container class="h-100 w-100">
    <b-col align-v="start">
      <b-row>
        <HeaderLectures :lecturePageMax="lecturePageMax" @updateLecturePage="changeLecturePage($event)"/>
      </b-row>
      <b-row>
        <ContentLectures :jsonData="jsonData" :lecturePage="lecturePage" />
      </b-row>
    </b-col>
  </b-container>
</template>

<script>
import HeaderLectures from './lectures/HeaderLectures'
import ContentLectures from './lectures/ContentLectures'

export default {
  name: 'ContainerLectures',
  props: ['jsonData'],
  components: {
    HeaderLectures,
    ContentLectures
  },
  data () {
    return {
      lecturePage: 1,
      lecturePageMax: this.jsonData.lectures.length
    }
  }, 
  methods: {
    changeLecturePage(value) {
      this.lecturePage = value;
      this.$emit('updateLecturePageToApp', this.lecturePage)
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
  background: rgb(248, 248, 248);
}
</style>
