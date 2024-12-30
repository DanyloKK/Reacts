import React from "react"

const Button = React.memo(({ onClick }) => {
    console.log("Дочерний компонент рендерится");
    return <button onClick={onClick}>Нажми меня</button>;
});
export default Button;