import {createContext} from 'react';


export const theme = {
    dark:
        {
            color: 'black',
            backgroundColor: 'white'
        },
    light:
        {
            color: 'white',
            backgroundColor: 'black'
        },
    green: {
        color: "red",
        backgroundColor: 'green'
    }
}

export const themeContext = createContext();