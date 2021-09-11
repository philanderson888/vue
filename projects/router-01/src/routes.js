import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Page1 from './components/Page1.vue'
import Page2 from './components/Page2.vue'

export const routes = [

    {
        path:'',
        component:null
    },
    {
        path:'/page1',
        component:Page1
    },
    {
        path:'/page2',
        component:Page2
    }
]