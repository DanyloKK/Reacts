import Item from '../Item/Item';

const List = (props) => {
    const { values } = props;

    return (
        <ul className="listwrapper">
            {values.map((item) => {
                return <Item text={item} />
            })}
        </ul>
    ) 
}

export default List;