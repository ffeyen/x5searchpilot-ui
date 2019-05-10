<template>
  <div>
    <p class="text">Ich bin mir sicher mit meiner Antwort.</p>
    <b-form-radio-group 
      class="text" 
      v-model="value" 
      :disabled="submitted"
      :options="options" 
      :state="state" 
      name="radio-sure"
      >
    </b-form-radio-group>
  </div>
</template>

<script>
  export default {
    props: ['submitted', 'surveyRadioSure'],
    data() {
      return {
        value: null,
        options: [
          { text: 'trifft nicht zu', value: 1 },
          { text: 'trifft eher nicht zu', value: 2 },
          { text: 'trifft eher zu', value: 3 },
          { text: 'trifft zu', value: 4 }       
        ]
      }
    },
    computed: {
      state() {
        return Boolean(this.value)
      }
    },
    watch: {
      value: function () {
        this.$emit('changeRadioBtnSure', this.value);
      },
      surveyRadioSure() {
        this.value = this.surveyRadioSure; 
      }
    }
  }
</script>

<style scoped>
* {
  height: auto;
  width: 100%;
  margin: 0px auto;
  padding: 0.33rem;
  text-overflow: ellipsis;
  overflow: auto;
  
}

.text {
    padding-right: 2rem;
    padding-left: 2rem;
    line-height: 1.5rem;
    text-align: left;
    color: black;
}

</style>
