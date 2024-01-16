import { Wrapper } from "./style";

const RegisterForm = () => {
    return (
        <Wrapper>
            <div className="container">
                <h1>Faça o Registro</h1>
                <form action="">
                    <input type="email" placeholder="Insira o seu Email..." />
                    <input type="passwaord" placeholder="Insira a sua senha..." />
                    <button>Registrar</button>
                </form>
            </div>
        </Wrapper>
    );
}

export default RegisterForm;