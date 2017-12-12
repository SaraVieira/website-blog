<template>
  <div v-if="Post">
    <article data-name="article-full-bleed-background">
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
    <form class="pa4 black-80" v-on:submit.prevent="addComment">
    <input name="options[slug]" type="hidden" :value="Post.slug">
        <div class="measure">
          <label for="name" class="f6 b db mb2">Name</label>
          <input id="name" v-model="name"  required class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" />
        </div>
        <div class="measure">
          <label for="email" class="f6 b db mb2">Email</label>
          <input id="email" v-model="email" required class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" />
        </div>
        <div class="measure">
          <label for="message" class="f6 b db mb2">Message</label>
          <textarea id="message" v-model="message"  required class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" />
        </div>
      <button class="f6 link dim ba ph3 pv2 mb2 dib dark-green" type="submit">Go!</button>
    </form>
  </div>
</template>

<script>
import { POST_QUERY } from '../queries/post'
import VueMarkdown from 'vue-markdown'
import axios from 'axios'
export default {
  components: {
    VueMarkdown
  },
  name: 'single-page',
  data () {
    return {
      loading: 0,
      buttonLoading: false,
      name: '',
      email: '',
      message: '',
      addComment () {
        const fields = {
          name: this.name,
          email: this.email,
          message: this.email
        }
        this.buttonLoading = true

        axios.post('https://api.staticman.net/v2/entry/SaraVieira/website-blog/master/comments', { fields })
          .then(data => {
            this.buttonLoading = false

            console.log(data)
          })
      }
    }
  },
  apollo: {
    Post: {
      query: POST_QUERY,
      prefetch: true,
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
