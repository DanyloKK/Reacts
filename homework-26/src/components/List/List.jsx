import React from 'react'
import Item from '../Item/Item'

const List = (props) => {
    const {todos,removeItem} = props;

    return (
        <React.StrictMode>
            <ul>
                {todos.map((item) => {
                    return <Item  text={item} removeItem={removeItem} />
                })}
            </ul>
        </React.StrictMode>
    )
}
export default List;