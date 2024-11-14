import './App.css';
import Quiz from './Pages/quiz.jsx'
// import Head from './Pages/head.jsx'
import Congratulation from './Pages/congratulation.jsx'
import { useEffect, useState } from 'react'

function App() {
    const [observer, setObserver] = useState({})
    const [theme, setTheme] = useState('dark')

    const body = document.querySelector('body')
    const light = <i className="bi bi-moon-stars-fill text-light"></i>
    const dark  = <i class="bi bi-brightness-high-fill text-dark"></i>
    const [icon, setIcon] = useState(dark)

    useEffect(() => {
        const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)')
		if (prefersColorScheme.matches) {
            setTheme('dark')
            setIcon(light)
            body.setAttribute('data-bs-theme', theme)
		}
    }, [])

    function toggleTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light')
        setIcon(theme === 'light' ? dark : light)
        body.setAttribute('data-bs-theme', theme)
    }

    return (
        <div className='container'>
            <button className='btn float-end my-3' onClick={() => toggleTheme()}>{icon}</button>
            <div className='meteoro' data-style="1"></div>
            <div className='meteoro' data-style="2"></div>
            <div className='meteoro' data-style="3"></div>
            <div className='row'>
                <div className='col'>
                    <div className='d-flex flex-column align-items-center justify-content-center vh-100 text-center'>
                        <Quiz observer={observer} setObserver={setObserver} />
                        <Congratulation observer={observer} setObserver={setObserver} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;