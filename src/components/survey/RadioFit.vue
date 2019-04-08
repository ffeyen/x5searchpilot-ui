<template>
  <div>
    <p class="text">{{ question }}</p>
    <b-form-radio-group class="text" v-model="value" :options="options" :state="state" name="radio-validation">
      <b-form-invalid-feedback :state="state">Bitte auswählen</b-form-invalid-feedback>
      <b-form-valid-feedback :state="state">Danke!</b-form-valid-feedback>
    </b-form-radio-group>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        question: "Wie gut passt das gezeigte Suchergebnis zur Vorlesung?",
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
        console.log(this.value);
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
