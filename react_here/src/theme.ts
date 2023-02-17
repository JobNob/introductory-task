import './app.css';

// Устанавливает переданную тему
const setTheme = (themeName: string) => {
    document.documentElement.className = themeName;
}

// Переключение между темами
// const toggleTheme = () => {
//     if (localStorage.getItem('theme') === 'theme-dark'){
//         setTheme('theme-light');
//     } else {
//         setTheme('theme-dark');
//     }
// }

// Установка темы при запуске
const setThemeOnPageLoad = () => {
        setTheme('theme-dark');
};

export {setThemeOnPageLoad, setTheme};