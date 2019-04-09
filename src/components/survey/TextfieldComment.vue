<template>
  <div>
    <b-form-textarea
      id="textarea"
      v-model="textComment"
      placeholder="Anmerkung/Kommentar..."
      rows="3"
      max-rows="4"
    ></b-form-textarea>
    <p>{{ textComment }}</p>
  </div>
</template>

<script>
export default {
    data() {
      return {
        textComment: ''
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
