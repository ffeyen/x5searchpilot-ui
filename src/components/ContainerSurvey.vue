<template>
  <b-container class="h-100 w-100">
    <b-col align-v="end">
      <b-row>
        <RadioFit />
      </b-row>
    </b-col>
  </b-container>
</template>

<script>
import RadioFit from './survey/RadioFit'

export default {
  name: 'ContainerSurvey',
  components: {
    RadioFit
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
* {
  width: 100%;
  margin: 0px auto;
  padding: 0px !important;
  text-overflow: ellipsis;
  overflow: auto;
  background: rgb(162, 223, 209);
}

.footer {
  margin-bottom: 0px;
}
</style>
