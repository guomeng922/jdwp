<template>
  <div class="hello">
    <h2>{{this.$store.state.jing.count}}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {
    console.log(this.$store, '>>>')
  }
}
</script>


<style scoped>

</style>
