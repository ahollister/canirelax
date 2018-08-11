<template>
  <div id="app">
    <router-view />
    <vue-particles 
      color="#F4D35E"
      :particleOpacity="0.5"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="2"
      linesColor="#F4D35E"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="75"
      :moveSpeed="1"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    />
  </div>
</template>
