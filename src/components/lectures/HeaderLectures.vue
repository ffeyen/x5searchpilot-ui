<template>
  <div>
    <b-row>
      <b-col><button @click="changeLecturePage(-1.0)" type="button" class="btn btn-outline-dark">zurück</button></b-col>
      <b-col>
        <h2>Vorlesung</h2>
        <p>{{ lecturePage }} von {{ pageMax }}</p>
      </b-col>
      <b-col><button @click="changeLecturePage(1.0)" type="button" class="btn btn-outline-dark">nächste</button></b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'HeaderLectures',
  props: ['lecturePageMax'],
  data () {
    return {
      lecturePage: 0,
      pageMax: this.lecturePageMax
    }
  },
  methods: {
    changeLecturePage(pageChange) {
      this.lecturePage = this.lecturePage + pageChange;
      //console.log(pageChange + " / new value: " + this.lecturePage)
      this.$emit('updateLecturePage', this.lecturePage);
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
