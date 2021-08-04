const app = Vue.createApp({
    data(){
        return{
            fullName: null
        }
    },
    methods: {
        updateValue(event){
            console.log(event);
            this.fullName = event.target.value;
        }
    }
}).mount("#app");