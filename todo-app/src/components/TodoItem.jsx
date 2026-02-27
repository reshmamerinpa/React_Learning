import tick from "../assets/check-mark.png";
import untick from "../assets/round.png";
import bin from "../assets/bin.png";
const TodoItem =({text,id,isComplete,deleteTodo,toggle}) =>{
    return(
        <div className="flex items-end gap-2 w-full ">
            <div className="flex flex-1 items-start cursor-pointer" onClick={() => toggle(id)}>
                <img className="w-5 mt-1" src={isComplete ? tick : untick} alt="tick" />

                <p
                className={`ml-4 text-[17px] break-all flex-1 ${
                    isComplete ? "line-through text-slate-400" : "text-slate-700"
                }`}
                >
                {text}
                </p>
            </div>
            <img className="w-4 cursor-pointer mt-1 " onClick={() => deleteTodo(id)} src={bin} alt="delete" />
        </div>
        
    )
}
export default TodoItem;