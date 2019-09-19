import Login from './components/Login.vue'
import Attendance from './components/Attendance.vue'

export const routes = [

    {
        path:'',
        component: Login
    },
    {
        path:'/attendance',
        component: Attendance
    }
]