import { NavLink } from 'react-router-dom'
import { useLogin } from '../../hooks/useLogin'

export const Navbar = () => {

    const { handleLogout } = useLogin()

    return (
        <div className="Navbar">
            <h3>Hi <span className="fw-400">alkemer!</span></h3>
            <NavLink to="/">HEROES APP</NavLink>
            <p onClick={handleLogout}>Logout</p>
        </div>
    )
}
