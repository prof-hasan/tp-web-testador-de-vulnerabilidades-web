



import {OrderItemDiv,StyledButton,StyledP,OrderItemHeaderDiv,TopLeftText,BottomLeftText,TopRightText} from './UserCardStyle';



function UserCard(props){


    return(
    <OrderItemDiv>

        <OrderItemHeaderDiv>
            <TopLeftText>Id: {props.id} </TopLeftText>
            <TopRightText>Nome: {props.nome}</TopRightText>
            <BottomLeftText>Senha: {props.senha}</BottomLeftText>
        </OrderItemHeaderDiv>
    

    </OrderItemDiv>

    );
}


export default UserCard;
