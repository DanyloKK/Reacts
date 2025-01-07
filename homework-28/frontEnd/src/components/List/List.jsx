import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import DeleteButton from "../DeleteButton/DeleteButton.jsx"

const Lists = (props) => {
    const {items , handleDelete} = props;

    return (
        <Box sx={{width: '100%', bgcolor: 'background.paper', mt: '10px'}}>
            <List>
                {items.map((item, index) => (
                    <ListItem key={item._id}>
                        <ListItemText primary={item.todos || item.list}/>
                        <DeleteButton id={item._id} handleDelete={handleDelete}/>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default Lists;