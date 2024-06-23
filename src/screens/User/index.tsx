import React, { useState } from 'react';
import { InputForm } from "../../components/Form/Input";
import { SelectForm } from "../../components/Form/Select";
import { ButtonRegister, ContainerUser, FormUser, TitleUser } from "./styles";
import { privateAPi } from '../../services/privateApi';
import { useNavigate } from 'react-router-dom';

interface RegisterData {
    name: string;
    login: string;
    password: string;
    sector: string;
    role: string;
}

export const registerUser = async (userData: RegisterData) => {
    try {
        const response = await privateAPi.post('/auth/register', userData);
        return response.data;
    } catch (error) {
        console.error('Error registering user:', error);
        throw error;
    }
};

export const User: React.FC = () => {
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [passwordValid, setPasswordValid] = useState(true);
    const [userData, setUserData] = useState({
        name: '',
        login: '',
        password: '',
        sector: '',
        role: 'EMPLOYEE'
    });

    const roleOptions = [
        { value: 'EMPLOYEE', label: 'EMPLOYEE' },
        { value: 'ADMIN', label: 'ADMIN' }
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserData(prevState => ({ ...prevState, [name]: value }));
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        setUserData(prevState => ({ ...prevState, password: newPassword }));
        setPasswordValid(newPassword.length >= 10);
    };

    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newConfirmPassword = e.target.value;
        setConfirmPassword(newConfirmPassword);
        setPasswordsMatch(newConfirmPassword === password);
    };

    const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        setUserData(prevState => ({
            ...prevState,
            role: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!passwordValid) {
            return;
        }
        if (password !== confirmPassword) {
            setPasswordsMatch(false);
            return;
        }
        try {
            const response = await registerUser(userData);
            console.log('User registered successfully:', response);
            navigate('/users-list');
        } catch (error) {
            console.error('Error registering user:', error);
        }
    };
    
    return (
        <ContainerUser>
            <FormUser onSubmit={handleSubmit}>
                <TitleUser>Cadastre um Usuário</TitleUser>
                <InputForm
                    type="text"
                    name="name"
                    label="Nome"
                    placeholder="Nome"
                    onChange={handleChange}
                />
                <InputForm
                    type="email"
                    name="login"
                    label="E-mail"
                    placeholder="E-mail"
                    onChange={handleChange}
                />
                <InputForm
                    type="password"
                    name="password"
                    label="Senha"
                    placeholder="Senha"
                    onChange={handlePasswordChange}
                />
                {!passwordValid && <p style={{ color: 'red' }}>A senha deve ter pelo menos 10 caracteres.</p>}
                <InputForm
                    type="password"
                    name="confirmPassword"
                    label="Repita a senha"
                    placeholder="Repita a senha"
                    onChange={handleConfirmPasswordChange}
                />
                {!passwordsMatch && <p style={{ color: 'red' }}>As senhas não são iguais.</p>}
                <InputForm
                    type="text"
                    name="sector"
                    label="Setor"
                    placeholder="Setor"
                    onChange={handleChange}
                />
                <SelectForm
                    name="role"
                    label="Role"
                    options={roleOptions}
                    onChange={handleRoleChange} 
                />
                <ButtonRegister type="submit">Cadastrar usuário</ButtonRegister>
            </FormUser>
        </ContainerUser>
    );
};
