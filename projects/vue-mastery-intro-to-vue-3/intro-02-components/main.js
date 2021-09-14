


  



let componentOptions = {
    props: {
        message: {
        type: String, 
        required: true, 
        default: 'default value of message'
        }
    },
    template: `<div><h1>Product Component</h1><p>{{message}}</p></div>`,
    data(){
        return { someData: 'some data'}
    }
}

let product2Options = {
    template: `
    <div class="nav-bar">
        <div class="nav-item">
        <a class="nav-item" :href="url">vue mastery</a>
        </div>
    </div>
    <product message="this is a message" />
    <div class="product-container">
        <div class="product-image">
        <img v-bind:src="imageUrl" />
        </div>
        <div class="product-info">
        <h1>{{title}}</h1>
        <p v-if="isInStock && stock >= 10">In Stock</p>
        <p v-else-if="isInStock && stock < 10 && stock > 0">Low on stock</p>
        <p v-else :class="{'out-of-stock-text':stock<=0}">Out of Stock</p>
        <p v-if="isInStock && stock > 0">{{stock}} items</p>
        <ul>
            <li v-for="detail in details">{{detail}}</li>
            <li v-for="variant in variants" 
                :key="variant.variantId" 
                class="color-box" 
                :style="{ backgroundColor: variant.color } "
                @mouseover="alterImageColor(variant.url)" 
            >
            {{variant.color}}
            </li>
            <li>
            <span v-for="size in sizes">{{size}}</span>
            </li>
        </ul>
        
        </div>
        <div class="product-image">
        <img v-bind:src="imageUrl" />
        </div>
        <div class="product-info">
        <h1 v-show="showMe">{{ product }}</h1>
        </div>
    </div>
    <button class="button" v-on:click="incrementStock">Increment Stock</button>
    <button class="button" :class="{disabledButton:stock<=0}" v-on:click="decrementStock">Decrement Stock</button>
    <button class="button" :class="{disabledButton:stock<=0}"  v-on:click={{cart++}} :disabled="!inStock">Increment Cart</button>
    <button class="button" :class="{disabledButton:cart<=0}" v-on:click={{cart--}} :disabled="cart<=0">Decrement Cart</button>
    <button class="button" :class="{disabledButton:stock<=0}" v-on:click="addToCart">Add To Cart</button>
    <div class="cart">
        <p>Cart ({{cart}} items)</p>
    </div>
    <div class="cart">
        <p>Stock ({{stock}} items)</p>
    </div>
    `,
    data(){
        return {
            brand: 'Vue Mastery',
            product: 'Socks',
            imageUrl: './assets/images/socks_green.jpg',
            url: 'https://www.vuemastery.com',
            stock: 5,
            inStock: true,
            showMe: true,
            details:['80% cotton', '20% polyester'],
            variants:[
                {variantId:2234, color:'green', url:'./assets/images/socks_green.jpg'},
                {variantId:2235, color:'blue' , url:'./assets/images/socks_blue.jpg'}
            ],
            sizes:["XS,","S,","M,","L,","XL"],
            cart: 0,
            color: "#109aeb"
        }
    },
    methods: {
        addToCart() {
            this.cart++
        },
        alterImageColor(url){
            console.log(`new url is ${url}`)
            this.imageUrl = url
        },
        isInStock(){
            console.log(`is item in stock? ${this.stock>0}`)
            if (this.Stock>0){
            inStock = true;
            }
            return this.stock > 0
        },
        decrementStock(){
            console.log('decrementing stock')
            if(this.stock>0){
            this.stock--;          
            }
            if(this.stock<=0){
            this.inStock=false
            console.log(`this.inStock=${this.inStock}`)
            }
        },
        incrementStock(){
            console.log('incrementing stock')
            this.stock++;
            if(this.stock>0){
            this.inStock=true
            }
        }
    },
    computed:{
        title(){
        return this.brand + ' ' + this.product
        }
    }
}


var app = new Vue({
    el: '#app'
})

Vue.component('product',componentOptions)
Vue.component('product2', product2Options)


