import Vue from 'vue'
import Router from 'vue-router'
import PagesView from '@/Views/PagesView'
import HomeView from '@/Views/HomeView'
import DetailView from '@/Views/DetailView'
import MovieView from '@/Views/MovieView'
import BookView from '@/Views/BookView'
import SubjectView from '@/Views/SubjectView'
import StatusView from '@/Views/StatusView'
import GroupView from '@/Views/GroupView'
import RegisterView from '@/Views/RegisterView'
import LoginView from '@/Views/LoginView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/pages/home'
    },
    {
      path: '/pages',
      name: 'pages',
      component: PagesView,
      children: [
        {
          path: '',
          redirect: '/pages/home'
        },
        {
          path: 'home',
          name: 'HomeView',
          component: HomeView
        },
        {
          path: 'movie',
          name: 'MovieView',
          component: MovieView
        },
        {
          path: 'book',
          name: 'BookView',
          component: BookView
        },
        {
          path: 'status',
          name: 'StatusView',
          component: StatusView
        },
        {
          path: 'group',
          name: 'GroupView',
          component: GroupView
        },
        {
          path: 'detail/:id',
          name: 'DetailView',
          component: DetailView
        }
      ]
    },
    {
      path: '/pages/:classify/subject/:id',
      name: 'SubjectView',
      components: {
        default: PagesView,
        subject: SubjectView
      }
    },
    {
      path: '/register',
      name: 'RegisterView',
      component: RegisterView
    },
    {
      path: '/login',
      name: 'LoginView',
      component: LoginView
    }
  ]
})
