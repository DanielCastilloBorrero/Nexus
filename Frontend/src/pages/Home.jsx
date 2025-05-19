import Header from "../components/Header"
import "./Home.css"

function Home() {
    return (
        <div className="landing-page">
            <Header />
            <main className="main-content">
                <h2 className="title">WE ARE A</h2>
                <h2 className="title">LANDING PAGE</h2>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum.</p>
            </main>
        </div>
    )
}

export default Home