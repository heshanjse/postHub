const initialState = {
    messages: [{text:"hehsh",index:1}],
    filters : "ALL",
    searchMessage : ""

}

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return {
        messages: [...state.messages, {text: action.payload.text, completed: false}],
        filters : state.filters,
        searchMessage : state.searchMessage
      }
    case 'DELETE_MESSAGE':
        return {
            messages: state.messages.filter((message, index) => index !== action.payload.id),
            filters : state.filters,
            searchMessage : state.searchMessage
        }
    case 'UPDATE_MESSAGE':
        return {
            messages: state.messages.map((message, index) => {
                if (index === action.payload.id) {
                    return {text: action.payload.text, completed: false}
                }
                return message
            }),
            filters : state.filters,
            searchMessage : state.searchMessage
        }
    case 'SEARCH_MESSAGE':
      return {
        messages: action.payload,
        filters : state.filters,
        searchMessage : state.searchMessage
      }
    default:
      return state;
  }
}

export default messageReducer;