<template>
  <div class="hello">
    <form>
      name:<input type="text" v-model="name">
      password:<input type="password" v-model="password">
      <button @click="submit">submit</button>
      <button @click="getInfo">getInfo</button>
      <button @click="addRouter">addRouter</button>
      {{ $route.params.id }}
    </form>
  </div>
</template>

<script>
import API from '../api';


export default {
  name: 'Login',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      name: '',
      password: '',
    };
  },
  methods: {
    submit() {
      window.console.log('API.loginUrl', API.LOGIN);
      this.$axios.post(API.LOGIN, {
        name: this.name,
        password: this.password,
      }).then((res) => {
        window.console.log('tag', res);
      });
    },
    getInfo() {
      window.console.log('API.GETINFO', API.GETINFO);
      this.$axios.get(API.GETINFO, {
        name: this.name,
        password: this.password,
      }).then((res) => {
        window.console.log('tag', res);
      });
    },
    addRouter() {
      window.console.log('tag', <this className="$router"></this>);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
