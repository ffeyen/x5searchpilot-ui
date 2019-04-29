<template>
  <div>
    <b-form-textarea
      id="textComment"
      v-model="value"
      placeholder="Anmerkung/Kommentar..."
      rows="3"
      max-rows="3"
      :disabled="submitted"
    ></b-form-textarea>
  </div>
</template>

<script>
export default {
    props: ['submitted', 'surveyTextComment'],
    data() {
      return {
        value: ''
    }
  },
  watch: {
    value: function(value) {
      this.$emit('changeTextComment', value)
      //console.log("TextComment: emits event / value: " + this.value);
    },
      surveyTextComment() {
        this.value = this.surveyTextComment; 
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
