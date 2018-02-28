<template>
  <div>
    <ul class="forecast">
      <li class="item" v-for="forecast in forecasts" :key="forecast.dt">
          <div class="weekday">
              {{convertToDate(forecast.dt)| weekday}}
              </div> 
          <div class="icon">
              <img :src="`http://api.openweathermap.org/img/w//${forecast.weather[0].icon}.png`" alt="일기예보 아이콘">
          </div>  
          <!-- <div class="daily-weather">
              <p>{{forecast.weather[0].icon}}</p>
          </div> -->
          <div class="temperature">
              {{ (forecast.temp.day - 273.15).toFixed(0) }} °C
          </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import VueAxios from 'vue-axios';

export default {
  data() {
      return {
          forecasts: [],
          lat: 0,
          lng: 0
      }
  },
  filters: {
      weekday(date) {
          let weekdayName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
          return weekdayName[date.getDay()]
      }
  },
 
  created() {
      this.$eventBus.$on('sendCoordinate', this.setCoordinate);
  },
  methods: {
      setCoordinate(coordinate){
          this.lat = coordinate.lat();
          this.lng = coordinate.lng();
          this.axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?lat=${this.lat}&lon=${this.lng}&APPID=ece2a2f67447f8f48d72053cf54befe0`)
          .then(response => {
            console.log(response);
            let data= response.data;
            // console.log(data.list);
            this.forecasts = data.list;
        })
        .catch(err => {
            console.log(err)
        })
      },
      convertToDate(time) {
          return new Date(time * 1000);
      }
  }
}
</script>

<style lang="scss" scoped>
    .forecast {
        display: flex;
        width: 80%;
        padding: 0;
        margin: 0 auto;
        align-items: center;
        justify-content: center;
        .item {
            position: relative;
            flex: 1;
            color: white;
            text-align: center;
            list-style-type: none;
            
            &:first-child:before {
                content: '';
                position: absolute;
                top: -10px;
                left: 50%;
                display: block;
                width: 6px;
                height: 6px;
                margin-left: -3px;
                border-radius: 50%;
                background-color: #fa4444;
            }
            .temperature {
                margin-top: -8px;
            }
        }
    }
</style>
