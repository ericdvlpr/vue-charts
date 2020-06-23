<template>
  <div id="app">
    <div class="container">
        <div class="charts">
            <PolarArea1 />
        </div>
        <div class="charts">
            <PolarArea2 />
        </div>
    </div>
  </div>
</template>

<script>
import PolarArea1 from './components/PolarArea'
import PolarArea2 from './components/PolarArea2'

export default {
  name: 'App',
  components: {
    PolarArea1,
    PolarArea2
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  position: relative;
  height: 200px; /*should be the same height as the images*/
}
.container {
  position: absolute;
  width: auto;
  height: auto;
  overflow:hidden;
}
.charts canvas {
  display:block !important;
  vertical-align:middle !important;
}

.charts-slider {
  position: absolute;
  z-index:9;
  cursor: ew-resize;
  /*set the appearance of the slider:*/
  width: 40px;
  height: 40px;
  background-color: #2196F3;
  opacity: 0.7;
  border-radius: 50%;
}
</style>
