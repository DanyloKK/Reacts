import Button from '../Button/Button';

const Item = (props) => {
    const { text } = props;

    return (
        <li className="d-flex justify-content-between mb-2 mt-2 listItem">
            <span>{text}</span>
            <div>
                <Button title="Done" className="btn btn-success" />
                <Button title="Delete" className="btn btn-danger" />
            </div>
        </li>
    )
}

export default Item;