import Card from 'react-bootstrap/Card'

function RepoCard(props) {
    return (
        <div style={rowStyles} className="row">
            <h2 style={{color: "blue"}}>{props.name}</h2>
            <p>{props.description}</p>
        </div>
    )
}

const rowStyles = {
    textAlign: "left",
    color: "black",
    backgroundColor: "lightgray",
    padding: "10px",
    margin: "10px",
    borderRadius: "10px"
}

export default RepoCard;