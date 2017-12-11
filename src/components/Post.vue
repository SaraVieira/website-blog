<template>
  <div>
    <article v-if="Post" data-name="article-full-bleed-background">
      <div class="cf">
        <div class="pa3 pa4-ns bg-white black-70 f3 times">
          <div class="bb b--black-70 pv4">
            <h3 class="f2 fw7 ttu tracked lh-title mt0 mb3 avenir">{{Post.title}}</h3>
            <h4 class="f3 fw4 i lh-title mt0">{{Post.createdAt | moment("dddd, MMMM Do YYYY")}}</h4>
          </div>
          <section class="pt5 pb4">
            <p class="times lh-copy f4 mt0">
              <vue-markdown>{{Post.content}}</vue-markdown>
            </p>
          </section>
        </div>
      </div>
    </article>
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
