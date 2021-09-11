import SplashScreen from './components/SplashScreen.vue'
import Shopping from './components/Shopping.vue'
export const routes = [{
        path: '',
        name: 'splashScreen',
        component: SplashScreen
    },
    {
        path: '/shopping',
        name: 'shopping',
        component: Shopping
    }
]