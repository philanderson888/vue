import Home from './components/Home.vue';
import HelloWorld from './components/HelloWorld.vue';
import Component01 from './components/Component01.vue';
import Component02 from './components/Component02.vue';

export const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path:'/helloworld',
        component: HelloWorld
    },
    { path: '/component01', component: Component01 },
    { path: '/component02', component: Component02 }

];