import React from 'react';//引入React
import ReactDOM from 'react-dom';//引入ReacrDOM
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store'  //引入store组件
import { Provider } from 'react-redux' //引入react-redux的Provider无状态组件

ReactDOM.render(
    (
        <Provider store={store}><App /></Provider>
    ), 
    document.getElementById('root')
);
registerServiceWorker();
