import React,{useState} from 'react'
function Todo() {
  const [task, settask] = useState("");
  const [todolist, settodolist] = useState([]);
  const hs = () => {
    settodolist([...todolist,{id:Date.now() , name: task }]);
    settask("");
  };
  const deleteTask=(id)=>
  {
    settodolist(todolist.filter((task)=>task.id!==id))
  }

  return (
    <>
      <input
        value={task}
        onChange={(e) => {
          settask(e.target.value);
        }}
      />
      <button onClick={hs}>Add</button>
      {todolist.map((task)=>(
        <div>
            <h3>{task.name}</h3>
            <button onClick={()=>
                {
                    deleteTask(task.id)
                }
            }>Delete</button>

      </div>))}
    </>
  );
}
export default Todo
