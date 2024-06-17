import { TableContent, TableList } from "../../components/Table";
import { ContainerUsersList, ContentTable } from "./styles";
import { privateAPi } from "../../services/privateApi";
import { useEffect, useState } from "react";

export const UsersList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await privateAPi.get('/auth/users');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
    
        fetchUsers();
    }, []);
    
    return (
        <ContainerUsersList>  
                {users.length === 0 ? (
                    <p>Nenhum usuário cadastrado.</p>
                ) : (
                    <TableList
                        colsHeader={[
                            { label: "Id" },
                            { label: "Nome" },
                            { label: "Login" },
                            { label: "Cargo" },
                            { label: "Setor" },
                        ]}
                    >
                        {users.map(({ id, name, login, role, sector }) => (
                            <TableContent
                                key={id}
                                linkTo={`/produtos/${id}`}
                                colsBody={[
                                    { cell: id },
                                    { cell: name },
                                    { cell: login },
                                    { cell: role },
                                    { cell: sector },
                                ]}
                            />
                        ))}
                    </TableList>
                )}
        </ContainerUsersList>
    );
};
