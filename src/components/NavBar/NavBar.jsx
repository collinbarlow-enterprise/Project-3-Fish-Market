import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
    function handleLogOut() {
        userService.logOut();
        setUser(null);
    }

    return (
        <nav>
            <Link to="/orders">Order History</Link>
            &nbsp; | &nbsp;
            <Link to="/orders/new">Order</Link>
            &nbsp; | &nbsp;
            <Link onClick={handleLogOut} to="">Log Out</Link>
            &nbsp; | &nbsp;
            <span>Welcome, {user.name}</span>
        </nav>
    );
}