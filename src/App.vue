<template>
  <div id="app">
    <nav class="dt w-100 border-box pa3 ph5-ns">
      <router-link class="dtc v-mid mid-gray link dim w-25"to="/" title="Home">
        <img src="https://iamsaravieira.com/media/logo.dfbf532b.svg" class="dib w2 h2" alt="Site Name">
      </router-link>
      <div class="dtc v-mid w-75 tr">
        <a class="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="https://iamsaravieira.com" title="Portfolio">Portfolio</a>
        <router-link class="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" to="/" title="Blog">Blog</router-link>
        <a class="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="https://github.com/SaraVieira/" title="Github">Github</a>
        <a class="link dim dark-gray f6 f5-ns dib" href="https://twitter.com/NikkitaFTW" title="Github">Twitter</a>
      </div>
    </nav>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  margin-top: 40px;
  max-width: 80%;
  margin: auto;
}
</style>
