import React , {useState,useRef} from "react";
import TodoInsert from './TodoInsert';
import TodoList from'./TodoList';
import TodoButtom from'./TodoButtom';

function TodoTemplate(){
    const [value , setValue] = useState('');
    //value가 바뀔 때 마다 다시 렌더링 하게 됨
    const [change, setChange] = useState(0);
    const filter=useRef("all");
return(
    <div>
        <div className='todoListFont'>Todo List</div>
        <div className='template'>
            <TodoInsert change={change} setChange={setChange} value={value} setValue={setValue}></TodoInsert>
            <TodoList change={change} setChange={setChange} value={value} filter={filter}  ></TodoList>
            <TodoButtom change={change} setChange={setChange}  filter={filter}></TodoButtom>
        </div>
    </div>        
);
}

export default TodoTemplate;