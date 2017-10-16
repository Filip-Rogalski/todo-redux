import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../actions/actions'

const initialState = {
    tasks: [
        {
            id: 0,
            name: "alfa",
            starred: true
        },
        {
            id: 1,
            name: "beta",
            starred: false
        }, 
        {
            id: 2,
            name: "gamma",
            starred: false
        }
    ],
    counter: 3,
}

const todoApp = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      console.log('akcja', action);
      return Object.assign({}, state, {
        tasks: [
          ...state.tasks,
          {
            id: state.counter,
            name: action.text,
            starred: false
          }
        ],
          counter: state.counter + 1
      })
    case REMOVE_TODO:
      console.log(action);
      return Object.assign({}, state, {
          tasks: state.tasks.filter((task) => {
              return task.id !== action.index
          })
      })
    case TOGGLE_TODO:
      return Object.assign({}, state, {
          tasks: state.tasks.map((task, index) => {
              if (index === action.index) {
                  return Object.assign({}, task, {
                      starred: !task.starred
                  })
              }
              return task
          })
      })
    default:
      return state
  }
}

export default todoApp