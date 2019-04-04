import Attendance from './components/Attendance.vue'
import Splash from './components/Splash.vue'

export const routes = [

    {
        path: '',
        name:'home',
        component:Splash
    },
    {
        path: '/attendance',
        name:'attendance',
        component:Attendance
    }
]