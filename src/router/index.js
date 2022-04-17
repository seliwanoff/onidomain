import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import Login from '../views/users/login.vue'
import Sign from '../views/users/signup.vue'
import Search from '../views/search.vue'
import Verify from '../views/users/verify.vue'
import Confirm from '../views/users/confirm.vue'

import Details from '../views/product_details.vue'
import Checkout from '../views/checkout.vue'
import Dashboard from '../views/account/dashboard.vue'
import Settings from '../views/account/settings.vue'
import Profile from '../views/account/profile.vue'


const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'Buy your domain | Onidomain.com',
            component: Home
        },
        {
            path: '/users/login',
            name: 'Log in | Onidomain.com',
            component: Login

        },
        {
            path: '/users/signup',
            name: 'Sign up | Onidomain.com',
            component: Sign

        },
        {
            path: '/users/confirm/:email',
            name: 'Confirm ',
            component: Confirm

        },
        {
            path: '/search/:search',
            name: 'Search and Buy Domain',
            component: Search

        },
        {
            path: '/users/verify/:email/:link',
            name: 'verify email',
            component: Verify

        },
        {
            path: '/product_details/:name/:id/:price',
            name: 'Product Details',
            component: Details

        },
        {
            path: '/checkout/:name/:price/:id',
            name: 'Checkout',
            component: Checkout

        },
        {
            path: '/account/dashboard',
            name: 'Dashboard',
            component: Dashboard

        },
        {
            path: '/account/settings',
            name: 'Settings',
            component: Settings

        },
        {
            path: '/account/profile',
            name: 'Profile',
            component: Profile

        }

    ]
})
router.beforeEach((to, from, next) => {

    document.title = `${ to.name}`
    next()


    // to and from are both route objects. must call `next`.
})

export default router