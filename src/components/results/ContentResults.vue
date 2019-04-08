<template>
  <b-container class="mh-100">
    <h3 class="text">{{ title }}</h3>
    <p class="cut-text max-lines-5 text">{{ subtitle }}</p>
    <p class="cut-text max-lines-1 text link"><a :href="link" target="_blank">{{ link }}</a></p>
  </b-container>
</template>

<script>
export default {
  name: 'ContentLectures',
  data () {
    return {
      title: 'Ergebnistitel',
      subtitle: 'Untertitel Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      link: 'https://www.google.com'
    }
  }
}
</script>

<style scoped>
* {
  height: 100% auto;
  margin: 0;
  padding: 0.33rem;
  text-align: left;
  line-height: 1.5rem;
}

h3 {
  padding-top: 2rem;
  margin-bottom: 1rem;
}

.cut-text {
   overflow: auto;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-box-orient: vertical;
}

.max-lines-1 {
   -webkit-line-clamp: 1;
}


.max-lines-5 {
   -webkit-line-clamp: 5;
}

.link {
    padding-bottom: 3rem;
}

.text {
    padding-right: 2rem;
    padding-left: 2rem;
    line-height: 1.5rem;
}
</style>
