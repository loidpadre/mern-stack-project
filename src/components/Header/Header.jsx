import { Wrapper } from "./style";

const Header = () => {
    return (
        <Wrapper>
            <nav>
                <div className="logo">
                    <h1>AyHia.</h1>
                </div>
                <div>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Articles</a></li>
                        <li >
                            <a href="#">Pages</a>
                        </li>
                        <li><a href="#">Criar Post</a></li>
                    </ul>
                </div>
            </nav>
        </Wrapper>
    );
}

export default Header;
