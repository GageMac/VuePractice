<template>
  <div class="home">
    <div class="column">
      <div id="about"><AboutMe /></div>
      <div id="experience"><MyExperience /></div>
    </div>
    <div class="column">
      <div id="education"><MyEducation /></div>
      <div id="contact"><ContactMe /></div>
    </div>
  </div>
</template>

<script>
import AboutMe from '@/components/AboutMe.vue';
import MyExperience from '@/components/MyExperience.vue';
import MyEducation from '@/components/MyEducation.vue';
import ContactMe from '@/components/ContactMe.vue';

export default {
  components: {
    AboutMe,
    MyExperience,
    MyEducation,
    ContactMe
  },
};
</script>

<style>
.home {
  display: flex;
  justify-content: space-between;
  padding: 20px; 
  margin: 0 auto; 
  max-width: 1200px;
  min-height: 100vh;
  background-color: antiquewhite;
}

.column {
  flex: 1;
  margin: 0 10px;
}
</style>