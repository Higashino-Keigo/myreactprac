import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div>
        <Link to = "/">
            <div>main</div>
        </Link>
        <Link to="/about">
            <div>about</div>
        </Link>
        <Link to="/profile">
            <div>profile</div>
        </Link>
        </div>
    );
}