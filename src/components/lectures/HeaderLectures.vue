<template>
  <div>
    <b-row>
      <b-col><button type="button" class="btn btn-outline-dark">zurück</button></b-col>
      <b-col>
        <h2>Vorlesung</h2>
        <p>x von y</p>
      </b-col>
      <b-col><button type="button" class="btn btn-outline-dark">nächste</button></b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'HeaderLectures',
  data () {
    return {
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
  background: rgb(238, 238, 238);
}

</style>
