'use strict'
// Views

module.exports = async () => {
  return {
    views: {
      main: require('./views/main'),
      userData: require('./views/userData'),
      counter: require('./views/counter'),
      home: require('./views/home'),
      menu: require('./views/menu'),
      todoList: require('./views/todoList'),
      task: require('./views/task'),
      footer: require('./views/footer')
    },
    listeners: {
      increment: require('./listeners/increment'),
      onEnvStart: require('./listeners/onEnvStart'),
      onSessionStart: require('./listeners/onSessionStart'),
      onUserFirstJoin: require('./listeners/onUserFirstJoin'),
      addTodo: require('./listeners/addTodo'),
      checkTodo: require('./listeners/checkTodo')
    },
    rootView: 'main'
  }
}