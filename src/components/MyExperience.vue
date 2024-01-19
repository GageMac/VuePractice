<template>
  <div class="my-experience bg-white p-6 rounded shadow-md" id="experience">
    <h2 class="text-3xl font-semibold mb-4">My Experience</h2>
    <div v-for="(experience, index) in experiences" :key="index" class="mb-6">
      <h3 class="text-xl font-semibold">{{ experience.position }}</h3>
      <p class="text-gray-700">{{ experience.company }} | {{ experience.location }} | {{ experience.date }}</p>
      <ul class="list-disc ml-6 mt-2">
        <li v-for="(responsibility, i) in experience.responsibilities" :key="i">{{ responsibility }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyExperience',
  data() {
    return {
      experiences: [
        {
          position: 'Client Programmer Intern',
          company: 'Cal Poly Humboldt',
          location: 'Arcata, California',
          date: 'December 2021 - December 2022',
          responsibilities: [
            'Developing and maintaining virtual machines.',
            'Collaborating with cross-functional teams to define, design, and ship new features.',
            'Optimizing applications for maximum speed and scalability.',
          ],
        },
      ],
    };
  },
};
</script>

<style>
.my-experience {
  max-width: 800px;
  margin: 20px auto;
}

</style>