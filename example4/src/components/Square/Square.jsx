export const Square = (props) => {
    const { value, onClick, index } = props;

    const handleClick = () => {
        onClick(index)
    }
    
    return (
        <button onClick={handleClick} style={{ width: '50px', height: '50px', display: 'inline-block', margin: 0, padding: 0 }}>
            {value}
        </button>
    )
}
