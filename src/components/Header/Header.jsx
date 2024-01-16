import { Link } from "react-router-dom";
import { Wrapper } from "./style";

const Header = () => {
    return (
        <Wrapper>
            <nav>
                <div className="logo">
                    <h1><Link to="/">AHyia</Link>.</h1>
                </div>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><a href="#">Articles</a></li>
                        <li >
                            <a href="#">Pages</a>
                        </li>
                        <li><Link to="/login">Log in</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </ul>
                </div>
            </nav>
        </Wrapper>
    );
}

export default Header;
