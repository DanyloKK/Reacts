import React from 'react'

const Form = (props) => {
    const {addItem} = props;
    const sendForm = (event) => {
        event.preventDefault();
        addItem(event.target.todos.value);
    }

    return (
        <React.StrictMode>
            <form className='d-flex' onSubmit={sendForm}>
                <input name='todos' type='text' className='form-control'/>
                <button type='submit' className='btn btn-primary'>
                    Send
                </button>
            </form>

        </React.StrictMode>
    )
}

export default Form;