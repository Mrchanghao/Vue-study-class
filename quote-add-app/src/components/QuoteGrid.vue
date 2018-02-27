<template>

  <div class="row quote">
    <Quote v-for="(quote, index) in quotes" @click.native="deleteQuote(index)">{{quote}}</Quote>
  </div>

</template>

<script>
import Quote from './Quote.vue';

export default {
  props: ['quotes'],
  components: {
     Quote
  },
  methods: {
    deleteQuote(index) {
      this.$emit('quoteDeleted', index)
    }
  }
}

</script>
<style>
  .quote {
    margin-top: 2rem;
  }
</style>