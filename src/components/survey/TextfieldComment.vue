<template>
  <div>
    <b-form-textarea
      id="textarea"
      v-model="text"
      placeholder="Anmerkung/Kommentar..."
      rows="3"
      max-rows="6"
    ></b-form-textarea>
  </div>
</template>

<script>
export default {
    data() {
      return {
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
