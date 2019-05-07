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
        <p>
          {{ resultsPage }} von {{ resultsPageMax }}
        </p>
      </b-col>
      <b-col><button 
        type="button" 
        :disabled="resultsPageHeader === resultsPageMax" 
        @click="changeResultsPage(1.0)" 
        class="btn btn-outline-dark"
        >nächstes</button>
        <button 
        type="button" 
        @click="findNextResultsPage()" 
        class="btn btn-outline-dark"
        >nächstes unbeantwortetes</button>
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
          this.$emit('updateResultsPage', this.resultsPageHeader);
          count++
          return
        } 
      }
      if (count < 1) {
        this.$toasted.show("Es sind bereits alle Suchergebnisse dieser Vorlesung bewertet. Bitte zur nächsten Vorlesung wechseln.", this.toastSubmit)
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
  height: auto;
  padding-top: 0.15rem;
  padding-bottom: 0.15rem;
  background: rgb(162, 223, 209);
}
</style>
