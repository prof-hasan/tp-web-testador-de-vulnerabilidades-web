import { Header } from '../../Components/index.jsx';
import {StyledSection} from './StyleAdminPage.js'
import UserCard from './UserCard.jsx';

function AdminPage() {
    return(

        <div>
        <Header/>

        <StyledSection>            
            <UserCard id={1} nome={"João"} senha={"123"} />
            <UserCard id={2} nome={"Marcelo"} senha={"123"} />
            <UserCard id={3} nome={"Beatriz"} senha={"123"} />
        </StyledSection>
        </div>
    )
}


export default AdminPage;