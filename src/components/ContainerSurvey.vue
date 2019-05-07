<template>
  <b-container class="h-100 w-100">
    <b-col align-v="end">
      <b-row class="radio">
        <RadioFit 
          :submitted="submitted"
          :surveyRadioFit="surveyRadioFit"
          @changeRadioBtnFit="updateRadioFit($event)" 
          />
      </b-row>
      <b-row class="radio">
        <RadioSure 
          :submitted="submitted"
          :surveyRadioSure="surveyRadioSure"
          @changeRadioBtnSure="updateRadioSure($event)" 
          />
        </b-row>
      <b-row>
        <b-col cols="7" class="textfield">
          <TextfieldComment 
          :submitted="submitted"
          :surveyTextComment="surveyTextComment"
          @changeTextComment="updateTextComment($event)" 
          />
        </b-col>
        <b-col>
          <b-button 
            @click.prevent="submit" 
            :disabled="submitted"
            class="btn btn-outline-dark" 
            size="lg">Absenden
          </b-button>
        </b-col>
      </b-row>
    </b-col>
  </b-container>
</template>

<script>
import RadioFit from './survey/RadioFit'
import RadioSure from './survey/RadioSure'
import TextfieldComment from './survey/TextfieldComment'

import ApiService from '@/services/ApiService'

export default {
  name: 'ContainerSurvey',
  props: ['jsonData', 'lecturePage', 'resultsPage', 'resultsPageMax', 'uuid'],
  components: {
    RadioFit,
    RadioSure,
    TextfieldComment
  },
  data () {
    return {
      surveyRadioFit: '',
      surveyRadioSure: '',
      surveyTextComment: '',
      submitted: false,
      resultsPageSubmit: this.resultsPage,
      localStorageKeyPrefix: 'x5pilot',
      localStorageKey: '',
      toastSubmitMsg: "Absenden erfolgreich",
      toastSubmitMsgFalse: "Zum Absenden ist das Beantworten beider Fragen notwendig.",
      toastSubmitMsgBasReq: "Speichern nicht möglich. Bitte Admin kontaktieren.",
      toastSubmit: { 
        theme: "toasted-primary", 
        position: "bottom-right", 
        duration: 3000, 
        fullWidth: true
      }
    }
  },
  methods: {
    submit() {
      if (!this.surveyRadioFit || !this.surveyRadioSure) {
        this.$toasted.show(this.toastSubmitMsgFalse, this.toastSubmit);
      } else {
        let submitBundle = this.bundleSurvey();

        ApiService.postBundle(submitBundle.lectureId, submitBundle.resultId, submitBundle)
          .then(response => {
            this.saveToLocalStorage(submitBundle);
            this.submitted = true;
            this.$toasted.show(this.toastSubmitMsg, this.toastSubmit);
            this.nextPage();
          })
          .catch(error => {
            this.$toasted.show(this.toastSubmitMsgBasReq, this.toastSubmit);
            this.errors.push(error)
        });
      };
    },
    bundleSurvey() {
      let submitBundle = {
        lectureId: Number(this.jsonData[this.lecturePage - 1].id),
        resultId: Number(this.jsonData[this.lecturePage - 1].attributes.results[this.resultsPage - 1].result_id),
        radioFit: this.surveyRadioFit,
        radioSure: this.surveyRadioSure,
        textComment: this.surveyTextComment,
        submitDate: new Date(),
        uuid: this.uuid
      };

      return submitBundle;
    },    
    updateRadioFit: function(value) {
      this.surveyRadioFit = value;
    },
    updateRadioSure: function(value) {
      this.surveyRadioSure = value;
    },
    updateTextComment: function(value) {
      this.surveyTextComment = value;
    },
    nextPage: function() {
      if (this.resultsPage < this.resultsPageMax) {
        this.resultsPageSubmit++;
        this.$emit('updateResultsPage', this.resultsPageSubmit);
        this.resetForms();
      }
    },
    resetForms() {
      this.surveyRadioFit = '';
      this.surveyRadioSure = '';
      this.surveyTextComment = '';
      this.submitted = false;
    },
    saveToLocalStorage(bundle) {
      let submitBundleStringified = JSON.stringify(bundle);
      localStorage.setItem(this.localStorageKey, submitBundleStringified);
    },
    makeLocalStorageKeyName() {
      let keyName = 
        this.localStorageKeyPrefix 
        + "-l" + Number(this.lecturePage - 1) 
        + "-r" + Number(this.resultsPage - 1);
      this.localStorageKey = keyName;
    },
    loadFromLocalStorage() {
      if (localStorage.getItem(this.localStorageKey) !== null) {
        let bundleLocalStorage = JSON.parse(localStorage.getItem(this.localStorageKey));
          this.surveyRadioFit = bundleLocalStorage.radioFit;
          this.surveyRadioSure = bundleLocalStorage.radioSure;
          this.surveyTextComment = bundleLocalStorage.textComment;
          this.submitted = true;
      } 
    }
  }, 
  watch: {
    lecturePage() {
      this.resetForms();
      this.resultsPageSubmit = this.resultsPage;
      this.makeLocalStorageKeyName();
      this.loadFromLocalStorage();
    },
    resultsPage() {
      this.resetForms();
      this.resultsPageSubmit = this.resultsPage;
      this.makeLocalStorageKeyName();
      this.loadFromLocalStorage();
    }
  },
  created() {
    this.makeLocalStorageKeyName();
    this.loadFromLocalStorage();
  }
}
</script>

<style scoped>
* {
  width: 100%;
  height: auto;
  margin: 0px auto;
  padding: 0.2rem 0px !important;
  text-overflow: ellipsis;
  overflow: auto;
  background: rgb(162, 223, 209);
}

.textfield {
  align-items: center;
  margin: 0.25rem;
  margin-left: 1.75rem;
}

.btn {
  height: 5rem;
  width: 80%;
  margin: 0.33rem;
}
</style>
