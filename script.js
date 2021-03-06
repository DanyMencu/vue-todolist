//* Partire dalla definizione di un array con 3 oggetti ( i todo).
//todo Ogni oggetto todo avrà le seguenti proprietà:
//1- text, una stringa che indica il testo del todo
//2- completed, un booleano (true/false) che indica se il todo è stato completato oppure no
//todo MILESTONE 1
// -Stampare all’interno di una lista, un item per ogni todo.
// -Se la proprietà completed è uguale a true, visualizzare il testo del todo sbarrato.
//todo MILESTONE 2
//Visualizzare a fianco di ogni todo una “x”: cliccando su di essa, il todo viene rimosso dalla lista.
//todo MILESTONE 3
//Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
//* Bonus:
//-1- Oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista.
//-2-Cliccando sul testo del todo, invertire il valore della proprietà completed del todo corrispondente (se completed era uguale a false, impostare true e viceversa).

const root = new Vue ({
    el: '#root',
    data: {
        todos: [
            {
                text: 'Allenarsi nel pomeriggio',
                completed: false,
            },
            {
                text: 'Finire i compiti',
                completed: true,
            },
            {
                text: 'Pranzare',
                completed: true,
            },
        ],
        newToDo: '',
    },
    methods: {
        //Add new ToDo at the list
        addNewToDo() {
            if( this.newToDo !== '' ) {
                this.todos.unshift({
                    text: this.newToDo,
                    completed: false,
                });

                //Clean text area
                this.newToDo = '';
                //Set focus
                this.$refs.textarea.focus();
            }
        },
        //Remove ToDo from the lista
        removeToDo(indexToDo) {
            this.todos.splice(indexToDo, 1);
        },
        //Change ToDo status to true in false or reverse
        changeStatus(indexToDo) {
            this.todos[indexToDo].completed = !this.todos[indexToDo].completed;
        },
    },
});