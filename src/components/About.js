import about from "../images/about.svg"

export default function About () {
    return(
        <div className="comtainner">
        <h2 className="title">About</h2>
        <img src={about} alt="about"/>
        </div>
    );
}