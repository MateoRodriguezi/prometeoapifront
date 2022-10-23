import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext()

function TodoProvider (props) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
      } = useLocalStorage('BANKS', []);
      const [searchValue, setSearchValue] = React.useState('');
      const [openModal, setOpenModal] = React.useState(false);
    
      let searchedTodos = [];
    
      if (!searchValue.length >= 1) {
        searchedTodos= todos;
      } else {
          searchedTodos = todos.filter(todo => {
          const todoText = todo.text.toLowerCase()
          const searchText = searchValue.toLowerCase()
          return todoText.includes(searchText)
        })
      }
    
      const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);  
      }

      const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
          text,
        });
        saveTodos(newTodos);  
      }

    return (
        <TodoContext.Provider value= {{
            loading,
            error,
            searchValue,
            setSearchValue,
            searchedTodos,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export {TodoContext, TodoProvider};