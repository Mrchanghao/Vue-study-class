<template>
  <div class="row">
    <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3">
      <label class="quote-name">
        quote
      </label>
      <textarea class="form-control" rows="3" @keyup.enter="createNew" v-model="quote"></textarea>
      <button class="btn add-new btn-primary" @click.prevent="createNew">Add new</button>
    </div>
  
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      quote: ''
    }
  },
  methods: {
    createNew() {
      this.$emit('quoteAdd', this.quote);
      this.quote = '';
    }
  }
}

</script>
<style>
.quote-name {
  font-size: 24px;
}
.add-new {
  margin-top: 1rem;
}
</style>
