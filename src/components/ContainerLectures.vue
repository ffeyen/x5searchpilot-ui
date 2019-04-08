<template>
  <b-container class="h-100 w-100">
    <b-col align-v="start">
      <b-row>
        <HeaderLectures />
      </b-row>
      <b-row>
        <ContentLectures />
      </b-row>
    </b-col>
  </b-container>
</template>

<script>
import HeaderLectures from './lectures/HeaderLectures'
import ContentLectures from './lectures/ContentLectures'

export default {
  name: 'ContainerLectures',
  components: {
    HeaderLectures,
    ContentLectures
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
  background: rgb(248, 248, 248);
}
</style>
