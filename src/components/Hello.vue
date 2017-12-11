<template>
    <div class="">
      <h2 class="athelas ph3 ph0-l">Articles</h2>
        <h2 class="f5 f4-m f3-l fw2 black-50 mt0 lh-copy" v-if="loading">Loading..
      </h2>
      <article v-if="allPosts.lenght !== 0"
      v-for="post in allPosts"
      :key="post.id" class="pv4 bt bb b--black-10 ph3 ph0-l">
      <div class="flex flex-column flex-row-ns">
        <div class="w-100 w-60-ns pr3-ns order-2 order-1-ns">
          <h1 class="f3 athelas mt0 lh-title">{{post.title}}</h1>
          <p class="f5 f4-l lh-copy athelas">
            {{post.intro}}
          </p>
        </div>
        <div class="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns">
          <img :src="post.coverImage.url" class="db" :alt="post.coverImage.fileName">
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import { ALL_POSTS_QUERY } from '../queries/allPosts'

export default {
  name: 'hello',
  data () {
    return {
      allPosts: [],
      loading: 0
    }
  },
  apollo: {
    allPosts: {
      query: ALL_POSTS_QUERY,
      loadingKey: 'loading'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
