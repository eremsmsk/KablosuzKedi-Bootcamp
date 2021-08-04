const app = Vue.createApp({
    data(){
        return{
            counter: 0,
            counter2: 0,
        }
    },
    methods: {
        getCounterResult() {
            return this.counter2 > 5 ? 'BÜYÜK' : 'KÜÇÜK'
        }
    }
}).mount("#app");