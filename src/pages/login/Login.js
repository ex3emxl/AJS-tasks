import { login } from '../../services';

const Login = ({ onLogin }) => {
    const onSubmit = (ev) => {
        ev.preventDefault();
        const { elements } = ev.target;
        const data = {
            email: elements.email.value,
            password: elements.password.value,
        };

        login(data).then(onLogin);
    };

    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                name="email"
                placeholder="Enter email"
            />
            <br/>
            <input
                type="password"
                name="password"
                placeholder="Enter password"
            />
            <br/>
            <input
                type="submit"
                placeholder="Login"
            />
        </form>
    );
};

export default Login
