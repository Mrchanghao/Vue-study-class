<template>
    <div id='search'>
        <h2>Search space image</h2>
       <form @submit.prevent='getResult(query)'>
           <input placeholder="Search you want image" type='text' v-model='query' />
       </form>
       <div class='image-wrapper' v-if="results">
           <div class='image-result' v-bind:key='i' v-for="(result, i) in results">
               <img v-bind:src='result.links[0].href' />
           </div>
       </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'search',
  data() {
    return {
        msg: 'search',
        query: '',
        results: ''
    }
},
methods: {
    getResult (query) {
       axios.get('https://images-api.nasa.gov/search?q=' + query + '&media_type=image')
       .then( res => {
        //    console.log()
           this.results = res.data.collection.items
        //    console.log(this.results);
       })

        //reset query
        this.query = ''
    }
}
}

</script>
 <style scoped>

#search {
    margin-top: 5%;
    margin-left: 20%;
    width: 100%;
    /* margin-left: 50%;
    transform: translate(-50%, -10%);    */
}
 h2{
     margin-left: 20px;
 }
input {
    width: 500px;
    height: 40px;
    border-radius: 4px;
    margin-left: 20px;
}
.image-wrapper {
    width: 100%;
}

div.image-result {
    width: 100%;
    height: 400px;
    display: flex;
    margin: 20px;
   
}
img {
    width: 500px;
    height: 400px;
    flex-direction: row;
    /* margin: 20px; */
     border: 3px solid rgb(46, 129, 122);
}

</style>

