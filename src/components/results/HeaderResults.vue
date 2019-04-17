<template>
  <div>
    <b-row>
      <b-col><button 
        type="button" 
        :disabled="resultsPage === 1" 
        @click="changeResultsPage(-1.0)" 
        class="btn btn-outline-dark"
        >zurück</button>
      </b-col>
      <b-col>
        <h2>Suchergebnis</h2>
        <p>{{ resultsPage }} von {{ resultsPageMax }}</p>
      </b-col>
      <b-col><button 
        type="button" 
        :disabled="resultsPage === resultsPageMax" 
        @click="changeResultsPage(1.0)" 
        class="btn btn-outline-dark"
        >nächstes</button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'HeaderResults',
  props: ['resultsPageMax', 'lecturePage'],
  data () {
    return {
      resultsPage: 1
    }
  },
  methods: {
    changeResultsPage(pageChange) {
      this.resultsPage = this.resultsPage + pageChange;
      this.$emit('updateResultsPage', this.resultsPage);
    }
  },
  watch: {
    resultsPageMax() {
      if (this.resultsPage >= this.resultsPageMax) {
        this.resultsPage = this.resultsPageMax;
      }
    },
    lecturePage() {
      this.resultsPage = 1;
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
  background: rgb(162, 223, 209);
}
</style>
