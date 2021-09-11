import Splash from './components/Splash.vue'
import ChurchStatistics from './components/ChurchStatistics.vue'

export const routes = [
    {
        path:'',
        name:'splash',
        component:Splash
    },
    {
        path:'/stats',
        name:'stats',
        component:ChurchStatistics
    }

]