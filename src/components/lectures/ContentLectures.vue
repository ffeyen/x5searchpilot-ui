<template>
  <b-container>
    <h3 class="text">{{ title }}</h3>
    <p class="max-lines-3 text">{{ subtitle }}</p>
    <p class="description text">{{ describtion }}</p>
  </b-container>
</template>

<script>
export default {
  name: 'ContentLectures',
  data () {
    return {
      title: 'Titel der Vorlesung',
      subtitle: 'Untertitle der Vorlesung Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      describtion: 'Beschreibung der Vorlesung Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo duo invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo uo invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo duo invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo.',
    }
  }
}
</script>

<style scoped>
* {
  height: auto;
  margin: 0 auto;
  padding: 0.33rem;
  text-align: left;
}

h3 {
  padding-top: 2rem;
  margin-bottom: 1rem;
}

.max-lines-3 {
   overflow: auto;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-box-orient: vertical;
   -webkit-line-clamp: 3;
}

.description {
    max-height: 100% auto;
    margin-top: 1rem;
    padding-bottom: 1rem;
    overflow-x: hidden;
    overflow-y: auto;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
}

.text {
    padding-right: 2rem;
    padding-left: 2rem;
    line-height: 1.5rem;
}
</style>
