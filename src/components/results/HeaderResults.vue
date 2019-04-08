<template>
  <div>
    <b-row>
      <b-col><button type="button" class="btn btn-outline-dark">{{ back }}</button></b-col>
      <b-col>
        <h2>{{ title }}</h2>
        <p>bla</p>
      </b-col>
      <b-col><button type="button" class="btn btn-outline-dark">{{ next }}</button></b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'HeaderResults',
  data () {
    return {
      title: 'Ergebnis',
      next: 'weiter',
      back: 'zurück'
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
