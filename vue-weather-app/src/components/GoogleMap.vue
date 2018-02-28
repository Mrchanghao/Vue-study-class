<template>
 <div>

  <div id="map" />
 </div>
  
</template>
<script>
export default {
  mounted() {
    /*  global google */
    console.log(google.maps.Map);
    // 현재 수원 위치 
    var center = new google.maps.LatLng(37.26389, 127.02861)

    // 구글 맵 생성
    var map = new google.maps.Map(document.getElementById('map'), {
        center: center,
        zoom: 12
    })
    // 처음 마운트될 때의 좌표 전달 
    this.$eventBus.$emit('sendCoordinate', map.getCenter())

    // 현재 위치 마킹 
    var marker = new google.maps.Marker({
        position: center,
        map: map
    })

   // 맵 이동 했을 경우 다시 맴 중앙에 마커가 이동 되도록 이벤트 설정 
   map.addListener('center_changed', ()=> {
       marker.setPosition(map.getCenter())
   } )
   // 마우스 드래그 이벤트 
   map.addListener('dragend', ()=> {
       this.$eventBus.$emit('sendCoordinate', map.getCenter())
   }) 
  } 
}
</script>
<style lang="scss" scoped>
    #map-canvas {
        width: rem(400px);
        height: rem(600px);
    }
</style>
