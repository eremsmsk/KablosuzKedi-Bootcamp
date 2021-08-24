const app = Vue.createApp({
    data(){
        return{
            todoList: [
                {id:1, text:"Todo 1", completed: false},
                {id:2, text:"Todo 2", completed: false},
                {id:3, text:"Todo 3", completed: false},
                {id:4, text:"Todo 4", completed: false},
                {id:5, text:"Todo 5", completed: false},
                {id:6, text:"Todo 6", completed: false},
                {id:7, text:"Todo 7", completed: false},
            ],
        };
    },
    methods: {
        addTodo(event){
            this.todoList.push({
                id: new Date().getTime(),
                text: event.target.value,
                completed: false
            });
            event.target.value = "";
        },
        removeItem(todoItem) {
            this.todoList = this.todoList.filter(todo => todo != todoItem)
        }
        
    },
    computed: {
        completedItemCount(){
            return this.todoList.filter((todo) => todo.completed).length;
        },
        unComplotedItemCount(){
            return this.todoList.filter((todo) => !todo.completed).length;
        },
    }
}).mount("#app");