import home from "../images/home.svg"

export default function Home () {
    return(
        <div className="comtainner">
        <h2 className="title">หน้าแรก</h2>
        <img src={home} alt="home"/>
        </div>
    );
}