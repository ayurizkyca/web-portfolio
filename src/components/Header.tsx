import logo from "../assets/img/AyuRizkyca.png"

export default function Header() {
    return (
        <div className="header">
            <div className="navbar">
                <a href="#home"><img src={logo} alt="logo-ayu" /></a>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#works">Works</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>

    )
}
