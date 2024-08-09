import notfound from "../images/notfound.svg"

export default function Notfound(){
    return(
        <div className="comtainner">
        <h2 className="title">404 Page Notfound</h2>
        <img src={notfound} alt="notfound"/>
        </div>
    );
}