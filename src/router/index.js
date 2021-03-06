import { createRouter, createWebHistory } from "vue-router"
import EventList from "../views/EventList.vue"
import About from "../views/About.vue"
import Info from "../views/Info.vue"
import StudentList from "../views/Student.vue"

const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventList
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/Info",
    name: "Info",
    component: Info
  },
  {
    path: "/student",
    name: "StudentList",
    component: StudentList
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
