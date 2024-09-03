import { useState, useEffect } from 'react';
import axios from 'axios';
import { Header } from '../../Components/index.jsx';
import {StyledSection} from './StyleAdminPage.js'
import UserCard from './UserCard.jsx';

function AdminPage() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('') //url da rota back
            .then(({data}) => {
                console.log(data);
                setUsers(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);


    return(

        <div>
        <Header/>

        <StyledSection> 
        {users.map((user, index) => (           
            <UserCard key={index} user={user} index={index} />
        ))}
        </StyledSection>
        </div>
    )
}


export default AdminPage;