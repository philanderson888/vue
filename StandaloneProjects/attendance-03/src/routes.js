import Splash from './components/Splash.vue'
import Attendance from './components/Attendance.vue'
export const routes = [
    {
        path:'',
        name:'splash',
        component:Splash
    }, 
    {
        path:'/attendance',
        name:'attendance',
        component:Attendance
    }
]