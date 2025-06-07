import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import PeopleIcon from '@mui/icons-material/People';
import HistoryIcon from '@mui/icons-material/History';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import "./SideBar.css";

function SideBar({ isOpen }) {
    return (
        <aside className={`sidebar${isOpen ? '' : '-closed'}`}>
            <nav>
                <div className="logo-container">
                    <img src="/src/assets/Nexus_Logo.webp" id='logo' />
                    <img src="/Nexus_icon.ico" id='icon' />
                </div>

                <List >
                    <Divider />
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Inicio" className='texto' />
                        </ListItemButton>
                    </ListItem>
                    <Divider />
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <ProductionQuantityLimitsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Productos" className='texto' />
                        </ListItemButton>
                    </ListItem>
                    <Divider />
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <PeopleIcon />
                            </ListItemIcon>
                            <ListItemText primary="Proveedores" className='texto' />
                        </ListItemButton>
                    </ListItem>
                    <Divider />
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <HistoryIcon />
                            </ListItemIcon>
                            <ListItemText primary="Historial" className='texto' />
                        </ListItemButton>
                    </ListItem>
                    <Divider />
                </List>
            </nav>
        </aside>
    )
}

export default SideBar