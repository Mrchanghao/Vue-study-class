<template>
    <div class="container">
      <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
      <new-quote @quoteAdd="newQuote"></new-quote>
      <quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></quote-grid>
      <div class="row">
        <div class="col-sm-6 text-center">
          <div class="alert alert-info"> click Quote to delete</div>
        </div>
      </div>
    </div>
</template>

<script>
import Header from './components/Header.vue';
import NewQuote from './components/NewQuote.vue';
import QuoteGrid from './components/QuoteGrid.vue';

    export default {     
        data() {
          return {
            quotes: [
              '시간은 금이다',
              // '고생끝에 낙이 온다?'
            ],
            maxQuotes: 10
          }
        },
        methods: {
          newQuote(quote) {
            if(this.quotes.length >= this.maxQuotes) {
              return alert('delete quote')
            }
            this.quotes.push(quote);
          },
          deleteQuote(index) {
            // this.quotes.slice(index, 1);
            this.quotes.splice(index, 1);
          }
        },
        components: {
          'new-quote': NewQuote,
         'quote-grid': QuoteGrid,
         'app-header': Header
        },
    }
</script>

<style>
</style>
