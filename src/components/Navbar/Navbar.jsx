
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

const Navbar =() =>{
    return  <nav className={s.nav}>
    <div className={s.item}>
      <NavLink to="/profile" activeClassName={s.activLink} >Profile</NavLink>
    </div>
    <div className={`${s.item} ${s.activ}`}>
      <NavLink to="/dialogs" activeClassName={s.activLink}  >Messages</NavLink>
    </div>
    <div className={`${s.item} ${s.activ}`}>
      <NavLink to="/users" activeClassName={s.activLink}  >Users</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/news" activeClassName={s.activLink}  >News</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="music" activeClassName={s.activLink}  >Music</NavLink>
    </div>
    <div className={s.item}>
    <NavLink to="settings" activeClassName={s.activLink}  >Settings</NavLink>
    </div>
  </nav>
}

export default Navbar;