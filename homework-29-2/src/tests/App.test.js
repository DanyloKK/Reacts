import { render, screen, fireEvent } from '@testing-library/react';
import App from '../components/App/App.jsx';
import { Provider } from 'react-redux';
import { store } from '../store.js';
import '@testing-library/jest-dom';



test('Створення компонента App', () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>
    );

    expect(screen.getByText(/Todo list/i)).toBeInTheDocument();
});

test('В поле для вводу можна ввести цифри і букви', () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>
    );

    const input = screen.getByPlaceholderText(/Enter the task please.../i);
    fireEvent.change(input, { target: { value: '123' } });
    expect(input.value).toBe('123');
    fireEvent.change(input, { target: { value: 'Test task' } });
    expect(input.value).toBe('Test task');
});

test('Після натискання на "Додати" без тексту нічого не відбувається', () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>
    );

    const button = screen.getByText(/Add task/i);
    fireEvent.click(button);


    expect(screen.queryByText(/Test task/i)).not.toBeInTheDocument();
});

test('Після введення тексту та натискання "Додати" новий елемент з\'являється в списку', () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>
    );

    const input = screen.getByPlaceholderText(/Enter the task please.../i);
    const button = screen.getByText(/Add task/i);

    fireEvent.change(input, { target: { value: 'Test task' } });
    fireEvent.click(button);

    expect(screen.getByText(/Test task/i)).toBeInTheDocument();
});

import { waitFor } from '@testing-library/react';

test('Кількість задач у футері оновлюється після додавання нової задачі', async () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>
    );

    const input = screen.getByPlaceholderText(/Enter the task please.../i);
    const button = screen.getByText(/Add task/i);

    fireEvent.change(input, { target: { value: 'Test task' } });
    fireEvent.click(button);


    await waitFor(() => {
        const footerText = screen.getByText((content) => content.includes('Amount of tasks:'));
        return footerText;
    });


    const footerText = screen.getByText((content) => content.includes('Amount of tasks:'));
    expect(footerText).toHaveTextContent(/Amount of tasks:\d+/);
});