<template>
  <div>
    <p class="text">Wie gut passt das gezeigte Suchergebnis zur Vorlesung? ({{ value }})</p>
    <b-form-radio-group 
      class="text" 
      v-model="value" 
      :disabled="submitted"
      :options="options" 
      :state="state" 
      name="radio-fit"
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
          { text: 'sehr gut', value: 5 },
          { text: 'gut', value: 4 },
          { text: 'okay', value: 3 },
          { text: 'schlecht', value: 2 },
          { text: 'sehr schlecht', value: 1 }
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
        //console.log("RadioFit: emits event / value: " + this.value);
        this.$emit('changeRadioBtnFit', this.value);
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
