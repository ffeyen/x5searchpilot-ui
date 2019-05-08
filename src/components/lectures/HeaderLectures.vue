<template>
  <div>
    <b-row>
      <b-col>
        <h2>Vorlesung</h2>
        <p>zufällige Vorlesung</p>
      </b-col>
      <b-col><button 
        @click="changeLecturePage()" 
        type="button" 
        class="btn btn-outline-dark"
        >zufällige Vorlesung</button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'HeaderLectures',
  props: ['lecturePageMax', 'jsonData'],
  data () {
    return {
      lecturePage: 1
    }
  },
  methods: {
    changeLecturePage() {
      this.lecturePage = this.generateRandomPageNumber(this.lecturePage)
      this.$emit('updateLecturePage', this.lecturePage)
    },
    generateRandomPageNumber(currentPage) { 
      let rndPage
      do {
        rndPage = Math.floor(Math.random() * (this.lecturePageMax)) + 1
      } while(currentPage === rndPage)
      return rndPage
    }
  }
}
</script>

<style scoped>
* {
  margin: auto;
  height: auto;
  padding-top: 0.15rem;
  padding-bottom: 0.15rem;
  background: rgb(238, 238, 238);
}

</style>
