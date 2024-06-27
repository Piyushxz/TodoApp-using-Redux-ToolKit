import { useDispatch,useSelector } from "react-redux";
import React,{useState} from 'react'
import { removeTodo } from "../features/todoSlice";
function Todos (){
    const [isEditable,setIsEditable] = useState(false);

    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
    return (
    <>
    <div>Todos</div>
    <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <div className='text-white'>{todo.text}</div>
            <div className="flex flex-row-reverse space-x-2 space-x-reverse">
              
            <button
             onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>

            <button onClick={()=>setIsEditable(prev => !prev)} className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md ">
            {
              !isEditable ?
            (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
               stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 3.012a2.25 2.25 0 011.836.475l.136.11a2.25 2.25 0 01.188 3.188L7.207 18.316a4.5 4.5 0 01-2.121 1.121l-2.123.707a.75.75 0 01-.964-.964l.707-2.122a4.5 4.5 0 011.122-2.122L16.2 3.199a2.25 2.25 0 01.662-.467z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.749 6.75L17.25 9.25M13.719 3.781l4.5 4.5"
              />
            </svg>
            )
            :
            (
              
              <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 7.5v11.25a2.25 2.25 0 01-2.25 2.25H6.75a2.25 2.25 0 01-2.25-2.25V4.75A2.25 2.25 0 016.75 2.5h7.5L19.5 7.5z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 2.5v6h3v-6m-6 11h9"
              />
            </svg>
            )

            }

            </button>

            </div>
          </li>
        ))}
      </ul>
    </>
  )




}

export default Todos;