import { createRouter, createWebHistory } from 'vue-router'
import ViewHobbies from '../components/ViewHobbies.vue'
import TechnicalView from '@/components/TechnicalView.vue'
import PersonalStatement from '@/components/PersonalStatement.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/personal-statement',
    },
    {
      path: '/personal-statement',
      name: 'personal-statement',
      component: PersonalStatement,
    },
    {
      path: '/technical-view',
      name: 'technical-view',
      component: TechnicalView,
    },
    {
      path: '/hobbies',
      name: 'hobbies',
      component: ViewHobbies,
    },
  ],
})

export default router
