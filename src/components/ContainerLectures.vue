<template>
  <b-container class="h-100 w-100">
    <b-col align-v="start">
      <b-row class="mx-0">
        <HeaderLectures 
          ref="headerLectures"
          :jsonData="jsonData" 
          :lecturePageMax="lecturePageMax" 
          :completedLectures="completedLectures"
          @updateLecturePage="changeLecturePage($event)"
          @findNextLecturePage="findNextLecturePage($event)"
        />
      </b-row>
      <b-row class="mx-0">
        <ContentLectures 
          :jsonData="jsonData" 
          :lecturePage="lecturePage"
        />
      </b-row>
    </b-col>
  </b-container>
</template>

<script>
import HeaderLectures from './lectures/HeaderLectures'
import ContentLectures from './lectures/ContentLectures'

export default {
  name: 'ContainerLectures',
  props: ['jsonData', 'completedLectures'],
  components: {
    HeaderLectures, 
    ContentLectures
  },
  data () {
    return {
      lecturePage: 1,
      lecturePageMax: ''
    }
  }, 
  methods: {
    changeLecturePage(value) {
      this.lecturePage = value;
      this.lecturePageMax = this.jsonData.length;
      this.$emit('updateLecturePageToApp', this.lecturePage)
    },
    findNextLecturePage() {
      this.$refs.headerLectures.findNextLecturePage()
    }
  },
  mounted() {
    this.lecturePageMax = this.jsonData.length;
  },
  created() {
    this.lecturePage = 1;
    this.lecturePageMax = this.jsonData.length;
  },
  watch: {
    jsonData() {
      this.lecturePage = 1;
      this.lecturePageMax = this.jsonData.length;
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
