<template>
  <div>
    <h2>Links</h2>
    <vue-markdown v-if="Post">{{Post.content}}</vue-markdown>
  </div>
</template>

<script>
import { POST_QUERY } from '../queries/post'
import VueMarkdown from 'vue-markdown'
export default {
  components: {
    VueMarkdown
  },
  name: 'single-page',
  data () {
    return {
      loading: 0
    }
  },
  apollo: {
    Post: {
      query: POST_QUERY,
      variables () {
        return {
          slug: this.$route.params.slug
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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
  color: #35495E;
}
</style>
