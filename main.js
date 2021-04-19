let app = new Vue({
    el: '#app',
    data: {
        name: 'ashish',
        surname: 'nakrani',
        image: './product.png',
        inStock: false,
        details: ["4K Ultra HD", " Ultra Wide","High Refresh rate"],
        styleObject: {
            fontSize: "18px",
            color: "red",
        },
        styleObject2: {
            textDecoration: 'underline',
            fontFamily: "Inter",
            fontWeight: '300'
        }
    },
});
