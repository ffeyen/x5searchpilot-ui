<template>
  <b-container class="h-100 w-100">
    <b-col align-v="end">
      <b-row class="radio"><RadioFit @changeRadioBtnFit="updateRadioFit($event)" /></b-row>
      <b-row class="radio"><RadioSure @changeRadioBtnSure="updateRadioSure($event)" /></b-row>
      <b-row>
        <b-col cols="7" class="textfield"><TextfieldComment /></b-col>
        <b-col><b-button @click="submit" class="btn" size="lg" variant="dark">Absenden</b-button></b-col>
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
  components: {
    RadioFit,
    RadioSure,
    TextfieldComment
  },
  data () {
    return {
      textfield: '',
      radioSure: '',
      radioFit: ''
    }
  },
  methods: {
    submit: function() {
      this.$http.post('https://jsonplaceholder.typicode.com/posts', {
      })
    },
    updateRadioSure: function(value) {
      this.radioSure = value;
      //console.log("updateRadioSure to " + this.radioSure);
    },
    updateRadioFit: function(value) {
      this.radioFit = value;
      //console.log("updateRadioFit to " + this.radioFit);
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
