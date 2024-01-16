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
                                <p>{inf.body}</p>
                                <span>{inf.who}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </Wrapper>
    );
}

export default Posts;