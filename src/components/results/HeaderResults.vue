<template>
  <div>
    <b-row>
      <b-col><button 
        type="button" 
        :disabled="resultsPageHeader === 1" 
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
        :disabled="resultsPageHeader === resultsPageMax" 
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
  props: ['resultsPageMax', 'lecturePage', 'resultsPage'],
  data () {
    return {
      resultsPageHeader: 1
    }
  },
  methods: {
    changeResultsPage(pageChange) {
      this.resultsPageHeader = this.resultsPageHeader + pageChange;
      this.$emit('updateResultsPage', this.resultsPageHeader);
    }
  },
  watch: {
    resultsPageMax() {
      if (this.resultsPageHeader >= this.resultsPageMax) {
        this.resultsPageHeader = this.resultsPageMax;
      }
    },
    lecturePage() {
      this.resultsPageHeader = 1;
    },
    resultsPage() {
      this.resultsPageHeader = this.resultsPage;
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
