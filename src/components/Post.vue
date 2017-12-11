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
    <form method="POST" class="pa4 black-80" action="https://api.staticman.net/v2/entry/SaraVieira/website-blog/master">
        <div class="measure">
          <label for="name" class="f6 b db mb2">Name</label>
          <input id="name" name="fields[name]"  required class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" />
        </div>
        <div class="measure">
          <label for="email" class="f6 b db mb2">Email</label>
          <input id="email" email="fields[email]" required class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" />
        </div>
        <div class="measure">
          <label for="message" class="f6 b db mb2">Message</label>
          <textarea id="message" message="fields[message]"  required class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" />
        </div>
      <a class="f6 link dim ba ph3 pv2 mb2 dib dark-green" type="submit">Go!</a>
    </form>
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
