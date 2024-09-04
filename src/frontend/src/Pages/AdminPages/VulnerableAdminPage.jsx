import { useState, useEffect } from 'react';
import axios from 'axios';
import { Header } from '../../Components/index.jsx';
import { StyledSection } from './StyleAdminPage.js';
import UserCard from './UserCard.jsx';

function VulnerableAdminPage() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Recupere o token de onde ele foi armazenado (ex: localStorage)
        //const token = localStorage.getItem('access_token');
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ3ZWItdnVsbmVyYWJpbGl0aWVzIiwic3ViIjoicGVkcm8iLCJyb2xlcyI6WyJVU0VSIl0sImV4cCI6MTcyNTM5ODA0OH0.S-O44zIcIRPqi1_4uJJ9PQnTuwbRrFLE2KcHsfhIT0E"
        // Configure o corpo da requisição para incluir o token
        const requestBody = {
            access_token: token
        };

        document.title = "Admin Vulnerável";

        axios.get('http://localhost:8080/admin/all/easy', requestBody) //url da rota back
            .then(({ data }) => {
                console.log(data);
                setUsers(data);
            })
            .catch((error) => {
                console.log(error);
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

export default VulnerableAdminPage;
