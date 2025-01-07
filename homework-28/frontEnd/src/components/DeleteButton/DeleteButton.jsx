import React,{useEffect} from 'react';

const DeleteButtons = ({id,handleDelete} ) => {
    return (
        <div>
            <button onClick={()=>handleDelete(id)}>Удалить</button>
        </div>
    )
}




export default DeleteButtons;