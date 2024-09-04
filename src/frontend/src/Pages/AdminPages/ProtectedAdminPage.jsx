import { useState, useEffect } from 'react';
import axios from 'axios';
import { Header } from '../../Components/index.jsx';
import { StyledSection } from './StyleAdminPage.js';
import UserCard from './UserCard.jsx';

function ProtectedAdminPage() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        document.title = "Protected Admin";
        const headers = {
            'Authorization': `Bearer ${token}`
        };

        axios.get('http://localhost:8080/admin/all/hard', { headers }) //url da rota back
            .then(({ data }) => {
                console.log(data);
                setUsers(data);
            })
            .catch((error) => {
                console.error("Houve um erro ao buscar os dados dos usuários:", error);
            });
    }, []);

    return (
        <div>
            <Header />
            <StyledSection>
                {users.map((user, index) => (
                    <UserCard key={index} user={user} index={index} />
                ))}
            </StyledSection>
        </div>
    )
}

export default ProtectedAdminPage;
