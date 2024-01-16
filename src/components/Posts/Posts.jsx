import { useState } from "react";
import { Info } from "../../info/info";
import { Wrapper } from "./style";

const Posts = () => {
    const [info, setInfo] = useState(Info)
    return (
        <Wrapper>
            <div className="content">
                {
                    info.map((inf) => (
                        <div className="card">
                            <img src={inf.img} alt="" />
                            <div className="text">
                                <h1>{inf.title}</h1>
                                <div className="autor-date">
                                    <span>{inf.who}</span>
                                    <span>12/08/2024 12h:30</span>
                                </div>
                                <p>{inf.body.slice(50)}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </Wrapper>
    );
}

export default Posts;