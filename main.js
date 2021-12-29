Vue.component('product', {
    props:
        {
            premium: {
                type: Boolean,
                required: true
            },
            cart :{
                type: Array,
                required: true
            }
        },
    template: `<div class="product">
    <div class="Product-image">
        <img :src = "image" class ="socks" alt="">
    </div>
    <div class="Product-description">
        <h1>{{title}}</h1>
        <p v-if = "inStock">In stock</p> 
        <p v-else >Out of Stock</p>
        
        <p v-if = "OnSale" >On Sale</p>
        <p>shipping is: {{shipping}}</p>
        <ul>
            <li v-for = "detail in details" >{{detail}}</li>
        </ul>
        <div v-for = "(variant, index) in variants" :key="index"
        class="color-box"
        :style = "{backgroundColor: variant.variantColor}"
        v-on:click = "updateProduct(index)"
        >
    
        </div>


        <button v-on:click = "addToCart" 
            :disabled = "!inStock" 
            :class="{disebledButton: !inStock} "
            >add to cart</button>

        <button v-on:click = "delToCart" 
            :disabled = "!cart" 
            :class = "{disebledButton: cart <= 0}"
            >delete from cart</button>

        
    </div>
</div>`,
data() {
    return {
        brand: "Apple",
        product: 'Socks',
        selectedVariant: 0,
        
        home: './home.html',
        details: ['80% cotton', "20% polyester", "gender - neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "black",
                variantImage: './assets/socks1.jpeg',
                variantQuantity: 10,
                variantOnSale: true
            },
            {
                variantId: 2235,
                variantColor: "white",
                variantImage: './assets/socks2.jpg',
                variantQuantity: 10,
                variantOnSale: false
            }
        ],
        
    
    
    }
}
,
methods: {
    addToCart() {
        this.$emit('add-to-cart',this.variants[this.selectedVariant].variantId)
    },
    delToCart() {
        this.$emit("del-to-cart",this.variants[this.selectedVariant].variantId)
    },
    updateProduct(index) {
        this.selectedVariant = index
        console.log(index)
    }
},

computed: {
    title() {
        return this.brand + " " + this.product
    },
    image() {
        return this.variants[this.selectedVariant].variantImage
    },
    inStock() {
        return this.variants[this.selectedVariant].variantQuantity
    },
    OnSale() {
        return this.variants[this.selectedVariant].variantOnSale
    },
    shipping () {
        if (this.premium){
            return "free"
        } 
        return 2.99
    }

}
})
var app = new Vue({
    el: '#app',
    data: {
        premium: true,
        cart: []
    },
    methods: {
        updateCart(id){
            console.log(id, 123)
            this.cart.push(id),
            
            console.log(this.cart, 111)
        },
        delfromcart(id){
            if (this.cart.length > 0) {
                this.cart.splice(this.cart.indexOf(id), this.cart.length)
                console.log( this.cart, '123')
            }
        }
    }
})