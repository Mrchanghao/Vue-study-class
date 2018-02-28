<template>
  <div id="current-weather">
    <div class="location">{{location}}</div>
    <div class="weather">{{weather}}</div>
    <div class="temperature">{{temperature}}°C </div>
  </div>
</template>
<script>
import axios from 'axios'
import VueAxios from 'vue-axios';

export default {
    name: 'current-weather',
    data() {
        return {
            location: '',
            weather: '',
            temperature: 0,
            lat: 0,
            lng: 0
        }
    },
    created() {
        this.$eventBus.$on('sendCoordinate', this.setCoordinate);
    },
    mounted() {
        
    },
    methods: {
        setCoordinate(coordinate) {
            this.lat = coordinate.lat();
            this.lng = coordinate.lng();
            this.axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lng}&APPID=ece2a2f67447f8f48d72053cf54befe0`)
                        .then(res => {
                            // console.log(res.data)
                            let data = res.data
                            this.location = data.name;
                            this.temperature = (data.main.temp - 273.15).toFixed(0);
                            this.weather = data.weather[0].main;
                            // this.temperature 
                            
                        })
                        .catch(err => {
                            console.log(err);
                        })
        }
    }
   
}

</script>

<style lang="scss" scoped>
// rem function 
$base-font-size: 16px;
@function rem($target, $context: $base-font-size) {
  @return ($target / $context) * 1rem;
}
    .location {
        text-align: center;
        font-size: rem(40px);
        color: #fafafa;
        transform: translateY(rem(-12px));
    }
    .weather {
        color: #fafafa;
        text-align: center;
        font-size: rem(30px);
        font-weight: 100;
        padding-top: rem(6px);
        padding-bottom: rem(6px);
    }
    .temperature {
        color: #fafafa;
        text-align: center;
        font-size: rem(50px);
        font-weight: 200;
    }

</style>
