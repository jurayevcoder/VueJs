import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home/Home.vue'
import Employee from '../views/Employee/Employee.vue'
import ErrorPage from '../views/Error/ErrorPage.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: Home, name: 'Home' },
        { path: '/add-employee', component: Employee, name: "Employee" },
        { path: '/:pathMatch(.*)*', name: "Error", component: ErrorPage }
    ]
})

export default router;