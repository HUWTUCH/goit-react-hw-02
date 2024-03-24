import { useState, useEffect } from 'react';
import DescriptionText from "../Description/Description.jsx";
import OptionsBtn from "../Options/Options.jsx";
import FeedbackList from "../Feedback/Feedback.jsx";
import NotificationMessage from "../Notification/Notification.jsx";

function App() {
    const initialState = { good: 0, neutral: 0, bad: 0 };
    // Ініціалізуємо стан на основі даних з локального сховища або нулями, якщо нічого не збережено
    const [state, setState] = useState(() => {
        const savedState = JSON.parse(localStorage.getItem('feedbackState'));
        return savedState || initialState;
    });

    // Ефект для збереження стану в локальному сховищі при його зміні
    useEffect(() => {
        localStorage.setItem('feedbackState', JSON.stringify(state));
    }, [state]);

    // Функція для оновлення стану при кліку на кнопку зворотного зв'язку
    const updateFeedback = feedbackType => {
        setState(prevState => ({
            ...prevState,
            [feedbackType]: prevState[feedbackType] + 1,
        }));
    };

    // Функція для скидання стану до початкового значення та оновлення локального сховища
    const resetFeedback = () => {
        setState(initialState);
        localStorage.setItem('feedbackState', JSON.stringify(state));
    };

    // Обчислення загальної кількості відгуків
    const totalFeedback = state.good + state.neutral + state.bad;

    // Перевірка, чи є відгуки
    const isTotalFeedback = totalFeedback > 0;
    const positivePercentage = isTotalFeedback ? Math.round((state.good / totalFeedback) * 100) : 0;

    return (
        <div>
            <DescriptionText />
            {/* Передача функцій та стану у компоненти */}
            <OptionsBtn feedbackClick={updateFeedback} displayResetBtn={isTotalFeedback} resetBtn={resetFeedback} />
            {/* Умовний рендеринг відповідно до наявності відгуків */}
            {isTotalFeedback ? <FeedbackList stateList={Object.values(state)} total={totalFeedback} positivePercentage={positivePercentage}/> : <NotificationMessage />}
        </div>
    );
}

export default App;

