<template>
  <div class="about-me bg-white p-6 rounded shadow-md" id="about">
    <h2 class="text-3xl font-semibold mb-4">About Me</h2>
    <div class="flex items-center mb-4">
      <img src="@/assets/profile-picture.jpg" alt="Profile Picture" class="rounded-full w-24 h-24 mr-4">
      <p class="text-gray-700">
        Hi, I'm Gage Machado, a passionate web developer based in Crescent City, California. I specialize in back-end development and
        technologies such as Python3 and SQL.
      </p>
    </div>
    <p class="text-gray-700">
      With a keen interest in back-end development, I enjoy turning complex problems into simple, beautiful, and
      intuitive designs. I'm always eager to learn and explore new technologies to enhance my skills.
    </p>
  </div>
</template>

<script>
export default {
  name: 'AboutMe',
};
</script>

<style>
.about-me {
  max-width: 800px; 
  margin: 20px auto;
}
.about-me img {
  width: 200px;
  height: 125px;
  border-radius: 50%;
}

</style>