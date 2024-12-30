import React from "react";

const Button = (props) => {
    const {title,className,remove} = props;
    return (
        <React.StrictMode>
            <button onClick={remove} className={className}>{title}</button>
        </React.StrictMode>
    )
}
export default Button;