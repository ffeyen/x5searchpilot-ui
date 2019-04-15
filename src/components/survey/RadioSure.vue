<template>
  <div>
    <p class="text">Wie sicher bist du dir mit der Antwort? ({{ value }})</p>
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
    props: ['submitted'],
    data() {
      return {
        value: null,
        options: [
          { text: 'sehr sicher', value: 5 },
          { text: 'sicher', value: 4 },
          { text: '50:50', value: 3 },
          { text: 'unsicher', value: 2 },
          { text: 'sehr unsicher', value: 1 }
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
        //console.log("RadioSure: emits event / value: " + this.value);
        this.$emit('changeRadioBtnSure', this.value);
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
