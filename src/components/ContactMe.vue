<template>
  <div class="contact-me bg-white p-6 rounded shadow-md" id="contact">
    <h2 class="text-3xl font-semibold mb-4">Contact Me</h2>
    <form @submit.prevent="submitForm" class="max-w-md">
      <div class="mb-4">
        <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Your Name</label>
        <input v-model="formData.name" type="text" id="name" name="name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
      </div>
      <div class="mb-4">
        <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Your Email</label>
        <input v-model="formData.email" type="email" id="email" name="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
      </div>
      <div class="mb-6">
        <label for="message" class="block text-gray-700 text-sm font-bold mb-2">Your Message</label>
        <textarea v-model="formData.message" id="message" name="message" rows="4" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required></textarea>
      </div>
      <div class="flex items-center justify-between">
        <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactMe',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: '',
      },
    };
  },
  methods: {
    submitForm() {
      console.log('Form submitted:', this.formData);
    },
  },
};
</script>

<style>
.contact-me {
  max-width: 800px;
  margin: auto;
}

</style>