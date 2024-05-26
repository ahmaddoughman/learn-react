import "./Style.css"

export default function Myheader(props){

    return (
        <div className={"header"}>
            <h1>First Application {props.title}</h1>
            <h1>name: {props.name}</h1>
        </div>
    );
}