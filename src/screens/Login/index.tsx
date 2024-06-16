
import { Navigate } from 'react-router-dom';
import { InputForm } from '../../components/Form/Input';
import { ContainerLogin, FormContainer, FormContent } from './style';
import { useState } from 'react';
import { useAuth } from '../../context/AuthProvider/useAuth';

export const Login = () => {
    const [login, setLogin] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const auth = useAuth();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        try {
          await auth.authenticate(login, password);
          setIsAuthenticated(true);
        } catch (error) {
          console.error("Erro ao autenticar:", error);
        }
      };

      const handleloginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(e.target.value);
      };

      const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
      };
      
      if (isAuthenticated) {
        return <Navigate to="/" replace={true} />;
      }
    return (
        <ContainerLogin>
            <FormContainer>
                <FormContent onSubmit={handleSubmit}>
                    <InputForm
                        type="email"
                        name="username"
                        label="Usuário"
                        placeholder="Digite seu usuário"
                        onChange={handleloginChange}
                    />
                    <InputForm
                        type="password"
                        name="password"
                        label="Senha"
                        placeholder="Digite sua senha"
                        onChange={handlePasswordChange}
                    />
                    <button type="submit">Login</button>
                </FormContent>
            </FormContainer>
        </ContainerLogin>
    );
};

export default Login;
