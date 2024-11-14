export default function Head(props) {

    function setCommand(name, value) {
        props.setObserver({ commandName: name, commandValue: value })
    }

    return (
        <div className=" mb-3">
            <input type="button" className="btn btn-outline-primary mx-2" name="Show" value="Color" onClick={(e) => setCommand(e.target.name, e.target.value)} />
            <input type="button" className="btn btn-outline-primary mx-2" name="Show" value="Fruit" onClick={(e) => setCommand(e.target.name, e.target.value)} />
            <input type="button" className="btn btn-outline-primary mx-2" name="Show All" value="All" onClick={(e) => setCommand(e.target.name, e.target.value)} />
            <input type="button" className="btn btn-outline-primary mx-2" name="Teste" value="Teste" onClick={(e) => setCommand(e.target.name, e.target.value)} />
        </div>
    )
}