import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './appRouter.js';
import './globalStyle.css';
import { Provider } from 'react-redux';
import appStore from './src/store/appStore.js';


const App = () => {
    return (
        <Provider store={appStore}>
        <AppRouter/>
        </Provider>
    )
}

const parent = document.getElementById('root');
const root = ReactDOM.createRoot(parent);
root.render(<App />)