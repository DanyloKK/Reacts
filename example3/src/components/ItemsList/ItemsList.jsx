import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const ItemsList = (props) => {
  const { items } = props;

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper', mt: '10px' }}>
      <List>
        {items.map((item, index) => (
          <div key={index}>
            <Divider />
            <ListItem>
              <ListItemText primary={item} />
            </ListItem>
          </div>
        ))}
      </List>
    </Box>
  );
};

export default ItemsList;
