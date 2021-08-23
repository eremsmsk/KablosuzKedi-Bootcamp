const app = Vue.createApp({
    data(){
        return {
            search: "",
            itemList: ["elma", "armut", "kiraz", "çilek"],
            //filteredList: [] //Tercih edilmeyen yol
        }
    },

    methods: {
        searchList(){
            //this.filteredList = this.filteredList.filteredList((i) => i.includes(this.search)); //Tercih edilmeyen yol
        }
    },

    computed: {
        filteredList() {
            return this.itemList.filter((i) => i.includes(this.search)); // itemList Array'inde search inputunda girilen kelime araması yapılmaktadır.
        }
    }
}).mount("#app");