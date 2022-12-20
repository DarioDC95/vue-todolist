const { createApp } = Vue

createApp({
    data() {
        return {
            todolist: [
                {
                    text: "have breakfast",
                    done: false,
                },
                {
                    text: "follow Boolean's Lessons",
                    done: false,
                },
                {
                    text: "have lunch",
                    done: false,
                },
                {
                    text: "do the assigned afternoon exercise",
                    done: false,
                },
                {
                    text: "have dinner",
                    done: false,
                },
            ],
            new_text: undefined,
        }
    },
    methods: {
        eraseTodo(index) {
            this.todolist.splice(index, 1);
        },
        addTask() {
            let new_textOK = this.new_text
            if(this.new_text == undefined) {
                this.new_text = undefined
            }
            else {
                let todo = {
                    text: new_textOK,
                    done: false,
                };
                this.todolist.push(todo);
            }
            this.new_text = undefined;
        },
        completeTask(index) {
            if(this.todolist[index].done == false) {
                this.todolist[index].done = true;
            }
            else {
                this.todolist[index].done = false;
            }
        },
    } 
}).mount('#app')