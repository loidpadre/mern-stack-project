import { Wrapper } from "./style";
import { AiOutlineProfile } from "react-icons/ai"
const HeaderSocial = () => {
    return (
        <Wrapper>
            <div className="container">
                <ul>
                    <li><a href="#">www.scorpion.com</a></li>
                    <li><a href="#">@ScorpionCompany</a></li>
                    <li><a href="#">scorpionstartt@gmimail.com</a></li>
                    <li><AiOutlineProfile></AiOutlineProfile></li>
                </ul>
            </div>
        </Wrapper>
    );
}

export default HeaderSocial;