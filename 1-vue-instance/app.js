const app = Vue.createApp({
    data(){
        return{
            title : "Vue.js Bootcamp 1. gün",
            content: "Lorem ipsum dolor sit amet ..",
            eduflow: {
                title: "Müfredat ve açıklamalar için tıklayınız",
                target: "_blank",
                url: "https://eduflow.kablosuzkedi.com",
                alt: "mufredat-kablosuzkedi-vue-bootcamp",
            
            },
            coords: {
                x: 0,
                y: 0,
            }
        }
    },
    methods: {
         changeTitle(title){
            this.title = title;
         },
         updateCoords(event){
            this.coords = {
                x: event.x,
                y: event.y,
            }
         }
    }
}).mount('#app')