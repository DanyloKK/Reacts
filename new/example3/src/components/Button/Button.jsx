const Button = (props) => {
    const { className, title } = props;

    return (
        <button className={className}>{title}</button>
    )
}

export default Button;
