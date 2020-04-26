<template>
  <div class="hello">
    <Header />
  </div>
</template>

<script>
import Header from '../../components/header';


export default {
  name: 'Login',
  components: {
    Header,
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      name: '',
      password: '',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
