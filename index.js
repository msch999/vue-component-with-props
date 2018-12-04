Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app = new Vue({
            el: '#app',
            data: {
                message: 'I am the message',
                seen: false,
                todos: [
                        { text: 'Learn JavaScript' },
                        { text: 'Learn Vue' },
                        { text: 'Build something awesome' }
                ],
                groceryList: [
                        { id: 0, text: 'Vegetables' },
                        { id: 1, text: 'Cheese' },
                        { id: 2, text: 'Whatever else humans are supposed to eat' }
                ]
            },
            methods: {
                reverseMessage: function () {
                    this.message = this.message.split('').reverse().join('')
                }
            }
})

//app.seen = true;
//app.message = 'And the message has changed';
//app.todos.push( { text: 'Do something else' } );
