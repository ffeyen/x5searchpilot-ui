<template>
  <div>
    <b-row>
      <b-col><button 
        :disabled="lecturePage === 1"  
        @click="changeLecturePage(-1.0)" 
        type="button" 
        class="btn btn-outline-dark"
        >zurück</button>
      </b-col>
      <b-col>
        <h2>Vorlesung</h2>
        <p>{{ lecturePage }} von {{ lecturePageMax }}</p>
      </b-col>
      <b-col><button 
        :disabled="lecturePage === lecturePageMax"  
        @click="changeLecturePage(1.0)" 
        type="button" 
        class="btn btn-outline-dark"
        >nächste</button>
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
    changeLecturePage(pageChange) {
      this.lecturePage = this.lecturePage + pageChange;
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
