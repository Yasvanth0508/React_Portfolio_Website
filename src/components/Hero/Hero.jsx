import "./Hero.css";
import profile from "../../assets/Yasvanth_image.png";

function Hero() {
    return(
        <>
            <section className="hero">
                <h1>Welcome to My Portfolio</h1>
                <img src={profile} alt="Profile" />
                <p>Hi, I'm John Doe, a passionate developer.</p>
            </section>
        </>
    );
}

export default Hero;