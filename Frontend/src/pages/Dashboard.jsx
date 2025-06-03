import { useState } from "react";
import SideBar from "../components/SideBar";
import "./Dashboard.css";

function Dashboard() {

    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className='dashboard-container'>
            <SideBar isOpen={isOpen} />
            <div className='main-content'>
                <header className='top-bar'>
                    <button onClick={toggleSidebar} className='toggle-button'>
                        ☰
                    </button>
                    <h1>Dashboard</h1>
                </header>
                <section className="content">
                    <p>Aquí va el contenido del dashboard.</p>
                </section>
            </div>
        </div>
    )
}

export default Dashboard