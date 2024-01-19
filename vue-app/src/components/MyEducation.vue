<template>
  <div class="my-education bg-white p-6 rounded shadow-md" id="education">
    <h2 class="text-3xl font-semibold mb-4">My Education</h2>
    <div v-for="(education, index) in educations" :key="index" class="mb-6">
      <h3 class="text-xl font-semibold">{{ education.degree }}</h3>
      <p class="text-gray-700">{{ education.school }} | {{ education.location }} | {{ education.date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyEducation',
  data() {
    return {
      educations: [
        {
          degree: 'Bachelor of Science in Computer Science',
          school: 'Cal Poly Humboldt',
          location: 'Arcata, California',
          date: 'Graduated Dec 2022',
        },

      ],
    };
  },
};
</script>

<style>
.my-education {
  max-width: 800px;
  margin: 20px auto;
}


</style>