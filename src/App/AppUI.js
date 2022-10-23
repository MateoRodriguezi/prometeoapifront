import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoSearch } from '../components/TodoSearch';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoList } from '../components/TodoList';
import {TodoCounter} from '../components/ToDoCounter.js'
import {Modal} from '../Modal/index'
import { TodoForm } from "../TodoForm/TodoForm";
import {LoginForm} from '../Login/LoginForm'

function AppUI() {
 const { error, 
  loading, 
  searchedTodos,  
  deleteTodo, 
  openModal,
  setOpenModal,
} = React.useContext(TodoContext)


    return(
      <React.Fragment>
        <LoginForm/>
        <TodoCounter/>
        <TodoSearch/>
        <TodoList>
          {error && <p>Ha ocurrido un error...</p>}
          {loading && <p>La web se esta cargando...</p>}
          {(!loading && !searchedTodos.length) && <p>Aun no tienes bancos asociados a tu cuenta</p>}


          {searchedTodos.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onDelete={() => deleteTodo(todo.text) }
            />
          ))}
      </TodoList>
    

        {!!openModal && (
        <Modal>
          <TodoForm/>
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
}

export { AppUI };
