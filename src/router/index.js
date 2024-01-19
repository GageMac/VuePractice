import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutMe from '../components/AboutMe.vue';
import MyExperience from '../components/MyExperience.vue';
import MyEducation from '../components/MyEducation.vue';
import ContactMe from '../components/ContactMe.vue';

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/AboutMe', name: 'about', component: AboutMe },
  { path: '/MyExperience', name: 'experience', component: MyExperience },
  { path: '/MyEducation', name: 'education', component: MyEducation },
  { path: '/ContactMe', name: 'contact', component: ContactMe },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;