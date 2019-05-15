<template>
  <div>
    <b-row class="mx-0">
      <b-col><button 
        type="button" 
        :disabled="resultsPageHeader === 1" 
        @click="changeResultsPage(-1.0)" 
        class="btn btn-outline-dark"
        >&#8810;</button>
      </b-col>
      <b-col>
        <h2>Suchergebnis</h2>
        <p><b>{{ resultsPage }} von {{ resultsPageMax }}</b></p>
      </b-col>
      <b-col><button 
        type="button" 
        :disabled="resultsPageHeader === resultsPageMax" 
        @click="changeResultsPage(1.0)" 
        class="btn btn-outline-dark"
        >&#8811;</button>
        <button 
        type="button" 
        @click="findNextResultsPage()" 
        class="btn btn-outline-dark"
        >unbeantwortet</button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'HeaderResults',
  props: ['resultsPageMax', 'lecturePage', 'resultsPage', 'jsonData'],
  data () {
    return {
      resultsPageHeader: 1,
      toastSubmit: { 
        theme: "toasted-primary", 
        position: "bottom-right", 
        duration: 3000, 
        fullWidth: true
      }
    }
  },
  methods: {
    changeResultsPage(pageChange) {
      this.resultsPageHeader = this.resultsPageHeader + pageChange;
      this.$emit('updateResultsPage', this.resultsPageHeader);
    },
    findNextResultsPage() {
      let indexLecturePage = this.lecturePage - 1;
      let count = 0

      for (let resultId = 0; resultId < this.jsonData[indexLecturePage].attributes.results.length; resultId++) {
        let keyName = "x5pilot" + "-l" + Number(indexLecturePage) + "-r" + Number(resultId)
        if (localStorage.getItem(keyName) === null) {
          this.resultsPageHeader = resultId + 1
          this.$toasted.show("Springe zu Suchergebnis " + this.resultsPageHeader, this.toastSubmit)
          this.$emit('updateResultsPage', this.resultsPageHeader)
          count++
          return
        } 
      }
      if (count < 1) {
        this.$toasted.show("Es sind alle Suchergebnisse dieser Vorlesung bewertet. Springe zur nächsten zufälligen Vorlesung.", this.toastSubmit)
        this.$emit('findNextLecturePage')
      } 
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
  min-height: 40px;
  padding-top: 0.15rem;
  padding-bottom: 0.15rem;
  background: rgb(162, 223, 209);
  overflow: hidden;
}

p {
  font-size: 1.25rem;
}
</style>
