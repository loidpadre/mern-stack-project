import { Wrapper } from "./style";

const LoginForm = () => {
    return (
        <Wrapper>
            <div className="container">
                <h1>Faça Login</h1>
                <form action="">
                    <input type="email" placeholder="Insira o seu Email..." />
                    <input type="passwaord" placeholder="Insira a sua senha..." />
                    <button>Login</button>
                </form>
            </div>
        </Wrapper>
    );
}

export default LoginForm;