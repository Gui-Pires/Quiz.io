import { useState, useEffect } from "react"
import quests from './final_quests.json'

export default function Quiz(props) {

    const [show, setShow] = useState(true)
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [question, setQuestion] = useState('')
    const [options, setOptions] = useState([])
    const [response, setResponse] = useState('')
    const [progress, setProgress] = useState(0)

    const acceptCommands = {
        Show: (value) => {
            const showComponent = value === 'Quiz' ? true : false
            setShow(showComponent)
            setCurrentQuestion(0)
        }
    }

    useEffect(() => {
        if (currentQuestion >= quests.length) {
            props.setObserver({ commandName: 'Show', commandValue: 'Congratulation'})
        } else {
            const progressBar = Math.floor(((currentQuestion) / quests.length) * 100)
            setQuestion(quests[currentQuestion].Question)
            setOptions(quests[currentQuestion].Options)
            setResponse(quests[currentQuestion].Response)
            setProgress(progressBar)
        }

    }, [currentQuestion])

    useEffect(() => {
        const commandName = props.observer.commandName
        const commandValue = props.observer.commandValue

        if (!commandName) {
            return
        }

        if (acceptCommands[commandName]) {
            acceptCommands[commandName](commandValue)
        }

    }, [props.observer])

    function checkResponse(value) {
        if (!value){
            return
        }

        if (value === response) {
            setCurrentQuestion(currentQuestion + 1)
        } else {
            setCurrentQuestion(0)
        }
    }

    if (show) {
        return (
            <div className="card col-12 col-md-8 col-lg-6 glass">
                <div className="progress" role="progressbar" aria-label="Progress" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100" style={{'height': '2px'}}>
                    <div className="progress-bar" style={{"width": progress+"%"}}></div>
                </div>
                <div className="card-body">
                    <h5 className='mt-3 mb-5'>{currentQuestion+1}) {question}</h5>
                    <div className='row gap-2 p-3'>
                        {options.map((option, index) => {
                            return <button className='btn btn-outline-primary' key={index} value={option} onClick={(e) => checkResponse(e.target.value)}>{option}</button>
                        })}
                    </div>
                </div>
            </div>
        )
    }

    return
}