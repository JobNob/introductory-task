import * as ReactDOM from 'react-dom/client';
import App from './app';

// Всё рендерится внутри элемента с id='root', ts выдаёт ошибку, связанную с тем, что
// document.getElementById('root');
// Может быть null, которая отлавливается в if
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);
root.render(App());