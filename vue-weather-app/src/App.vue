<template>
  <div id="app">
    <div id="information">
      <div id="current-weather">
        <!-- 현재 날씨 영역 -->
        <current-weather />
      </div>
      <hr>
      <div id="forecast">
        <!-- 일기예보 -->
        <forecast />
      </div>
    </div> 
    <div id="map">
      <!-- 맵 영역 -->
      <google-map />
    </div>
  </div>
</template>

<script>
import GoogleMap from './components/GoogleMap.vue';
import CurrentWeather from './components/CurrentWeather.vue';
import Forecast from './components/Forecast.vue';

export default {
  name: 'App',
  components: {
    'current-weather': CurrentWeather,
    'google-map': GoogleMap,
    'forecast': Forecast
  }
}
</script>

<style lang="scss">
// 베이스 칼라
$base-color: #fafafa;
// 베이스 폰트 사이즈
$base-font-size: 16px;
// rem function 
@function rem($target, $context: $base-font-size) {
  @return ($target / $context) * 1rem;
}
// font-size: rem(16px);

body {
  background-color: $base-color;
}

#app {
  position: absolute;
  background-color: #444; // 삭제 레이아웃 잡는 용도
  top: 50%;
  left: 50%;
  width: rem(1000px);
  height: rem(600px);
  margin-top: rem(-300px);
  margin-left: rem(-500px);
  border-radius: 3px;
  box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.1);
  &:after {
    content: '';
    display: block;
    clear: both;
  }
  #information {
    float: left;
    width: rem(600px);
  }
  #current-weather {
    margin-top: rem(100px);
    // background-color: blue;
    // height: rem(200px);
  }
  #forecast {
    padding-top: rem(10px);
    // background-color: red;
    height: rem(265px);
  }
}
#app > #map {
  float: right;
  width: rem(400px);
  height: rem(600px);
  // background-color: green;
}

hr {
  width: 80%;
  margin: rem(40px) auto;
  border: none;
  border-top: 1px solid white;
}
</style>
