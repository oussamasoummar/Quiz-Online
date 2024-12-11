import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddQuestion from "../component/question/AddQuestion.jsx";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from "../component/Home.jsx";
import QuizStepper from "../component/quiz/QuizStepper.jsx";
import Quiz from "../component/quiz/Quiz.jsx";
import UpdateQuestion from "../component/question/UpdateQuestion.jsx";
import GetAllQuiz from "../component/quiz/GetAllQuiz.jsx";
import QuizResult from "../component/quiz/QuizResult.jsx";
import Navbar from "../component/layout/navbar.jsx";
import Admin from "../component/Admin.jsx";


function App() {
    const [count, setCount] = useState(0)

    return (
        <main className='container mb-5'>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/quiz-stepper" element={<QuizStepper />} />
                    <Route path="/take-quiz" element={<Quiz />} />
                    <Route path="/admin" element={<Admin />}/>

                    <Route path="/create-quiz" element={<AddQuestion />} />
                    <Route path="/update-quiz/:id" element={<UpdateQuestion />} />
                    <Route path="/all-quizzes" element={<GetAllQuiz />} />
                    <Route path="/quiz-result" element={<QuizResult />} />


                </Routes>

            </Router>

        </main>


    )
}
export default App
