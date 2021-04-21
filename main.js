let app = new Vue({
    el: '#app',
    data: {
        name: 'ashish',
        surname: 'nakrani',
        image: './product.png',
        inStock: true,
        cart: 0,
        details: ["4K Ultra HD", " Ultra Wide","High Refresh rate"],
        styleObject: {
            fontSize: "18px",
            color: "red",
        },
        styleObject2: {
            textDecoration: 'underline',
            fontFamily: "Inter",
            fontWeight: '300'
        },
        variantsStyle: [
            {
                variantId: 555,
                backgroundColor: "red",
                height: "50px",
                width: "50px",
                marginBottom: "10px"
            },
            {
                variantId: 556,
                backgroundColor: "blue",
                height: "50px",
                width: "50px",
            }
        ],
    },
    methods: {
        addToCart: function () {
            this.cart += 1;
        },
        removeFromCart: function () {
            if (this.cart <= 0)
                return false
            this.cart -= 1;
        }
        }
    }
});
