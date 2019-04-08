<template>
  <b-container class="h-100 w-100">
    <b-col align-v="end">
      <b-row class="radio"><RadioFit /></b-row>
      <b-row class="radio"><RadioSure /></b-row>
      <b-row>
        <b-col cols="7" class="textfield"><TextfieldComment /></b-col>
        <b-col><b-button class="btn" size="lg" variant="dark">{{ submit }}</b-button></b-col>
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
      submit: 'Absenden'
    }
  }
}
</script>

<style scoped>
* {
  width: 100%;
  margin: 0px auto;
  padding: 0.2rem 0px !important;
  text-overflow: ellipsis;
  overflow: auto;
  background: rgb(162, 223, 209);
}

.radio {}

.footer {
  margin-bottom: 0px;
}

.textfield {
  align-items: center;
  margin: 1rem;
  margin-left: 1.75rem;
}

.btn {
  height: 5rem;
  width: 80%;
  margin: 1rem;
  margin-right: 2rem;
}
</style>
