import "./SideBar.css";

function SideBar({ isOpen }) {
    return (
        <aside className={`sidebar${isOpen ? '' : 'closed'}`}>
            <nav>
                <ul>
                    <li><a href="#">Dashboard</a></li>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Settings</a></li>
                    <li><a href="#">Help</a></li>
                </ul>
            </nav>
        </aside>
    )
}

export default SideBar