Vue.component('blog-post', {
    // camelCase in JavaScript
    props: {
        massage : {
            type: String,
            required: true
        }
    },
    template: '<h3>{{ massage }}</h3>'
  })

var app = new Vue({
    el: '#moskovi',
    data: {
        message: "kai gamarjoba"
    }
})