<script setup>
import Heros from '../../components/Heros.vue';
import TheWelcome from '../../components/TheWelcome.vue'
import OurContent from './OurContent.vue';
import OurTeam from './OurTeam.vue';
import OurProgramView from './OurProgramView.vue';
import NewsView from './NewsView.vue';
import SportifyView from './SportifyView.vue';
import StreamingView from './StreamingView.vue';
</script>

<template>
  <Heros></Heros>
  <main>
      <StreamingView background="bg-[#251E2C]" classes="container py-20 lg:py-[120px]"/>
      <OurProgramView background="bg-[#362D40]" classes="container py-20 lg:py-[120px]"/>
      <OurContent background="bg-[#251E2C]" classes="container py-20 lg:py-[120px]"/>
      <SportifyView background="bg-[#111111]" :classes="'container py-20 lg:py-[120px]'"/>
      <OurTeam background="bg-[#251E2C]" classes="container py-20 lg:py-[120px]"/>
      <NewsView background="" classes="container py-20 lg:py-[120px]"/>
  </main> 
</template>
