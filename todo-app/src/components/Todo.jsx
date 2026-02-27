import todoIcon from "../assets/todoList.png";
import TodoItem from "./TodoItem";
import { useEffect, useRef, useState } from 'react'

const Todo =() =>{
  const [todoList,setTodoList] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []);
  const  inputRef =useRef();

  	const add = () =>{
    const inputText = inputRef.current.value.trim();
    if(inputText===""){
      return null;
    }
    const newTodo = {
      id: Date.now(),
      text:inputText,
      isComplete :false,
    }
    setTodoList((prev)=>[...prev, newTodo]);
    inputRef.current.value = "";

	}
	const deleteTodo =((id)=>{
		setTodoList((prvTodos)=>{
			return prvTodos.filter((todo)=> todo.id!==id)
		})
	})
	const toggle=(id)=>{
		setTodoList((prevTodos)=>{
			return prevTodos.map((todo)=>{
				if(todo.id===id){
					return {...todo, isComplete: !todo.isComplete}
				}
				return todo;
			})
		})
	}
	useEffect(()=>{
		localStorage.setItem("todos",JSON.stringify(todoList))	},
		[todoList])
	return (
		<>
		<div className="card w-100 bg-amber-50 flex  flex-col rounded-2xl p-6 pt-10 gap-5">
			<div className="header text-xl font-bold p-4 flex gap-1 ">
				<img className="w-8" src={todoIcon} alt="" />
				<h1>Todo List</h1>
			</div>
			<div  className="bg-gray-200  rounded-full h-10 flex flex-row items-center">
				<input ref={inputRef} type="text" name="" id=""  placeholder="Add Text" className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"/>
				<button onClick={add} className="bg-orange-600 border-none rounded-full w-25 h-10 text-white text-center">ADD +</button>
			</div>
			
			{/* todo list */}
			<div className="flex flex-col gap-3"> 
				{ todoList.map((item,index) =>{
					return <TodoItem key={index} 
					text={item.text} 
					id={item.id} 
					isComplete={item.isComplete} 
					deleteTodo={deleteTodo}
					toggle={toggle} />
				})}
			</div>
		</div>
		</>
	);
}

export default Todo;
