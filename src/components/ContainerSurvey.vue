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

export default {
  name: 'ContainerSurvey',
  props: ['jsonData', 'lecturePage', 'resultsPage'],
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
      submitted: false
    }
  },
  methods: {
    submit() {
      this.submitted = true;

      let submitBundle = this.bundleSurvey();

      console.log(submitBundle);
    },
    bundleSurvey() {
      let submitBundle = {
        lectureId: this.jsonData.lectures[this.lecturePage - 1].id,
        resultId: this.jsonData.lectures[this.lecturePage - 1].attributes.results[this.resultsPage - 1].result_id,
        radioFit: this.surveyRadioFit,
        radioSure: this.surveyRadioSure,
        textComment: this.surveyTextComment,
        submitDate: JSON.stringify(new Date())
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
    }
  }, 
  watch: {
    lecturePage() {
        this.surveyRadioFit = '';
        this.surveyRadioSure = '';
        this.surveyTextComment = '';
        this.submitted = false;
    },
    resultsPage() {
        this.surveyRadioFit = '';
        this.surveyRadioSure = '';
        this.surveyTextComment = '';
        this.submitted = false;
    }
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
