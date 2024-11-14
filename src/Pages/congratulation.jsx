import { useState, useEffect } from "react"

export default function Congratulation(props) {

    const [show, setShow] = useState(false)

    const acceptCommands = {
        Show: (value) => {
            const showComponent = value === 'Congratulation' ? true : false
            setShow(showComponent)
        },
        'Show All': (value) => {
            setShow(true)
        }
    }

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

    function resetQuiz() {
        props.setObserver({ commandName: 'Show', commandValue: 'Quiz'})
    }

    if (show) {
        return (
            <div>
                <h5 className='mb-5'>Parabéns, você completou o quiz!</h5>
                <button className='btn btn-outline-primary' onClick={() => resetQuiz()}>Voltar ao Quiz</button>
            </div>
        )
    }

    return
}