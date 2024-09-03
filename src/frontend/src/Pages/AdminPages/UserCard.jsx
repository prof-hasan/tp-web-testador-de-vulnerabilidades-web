import { OrderItemDiv, StyledButton, StyledP, OrderItemHeaderDiv, TopLeftText, BottomLeftText, TopRightText } from './UserCardStyle';

function UserCard({ user }) {
    return (
        <OrderItemDiv>
            <OrderItemHeaderDiv>
                <TopLeftText>Username: {user.username} </TopLeftText>
                <TopRightText>Idade: {user.age}</TopRightText>
                <BottomLeftText>Profissão: {user.job}</BottomLeftText>
                <BottomLeftText>Criado em: {user.createdAt}</BottomLeftText>
            </OrderItemHeaderDiv>
        </OrderItemDiv>
    );
}

export default UserCard;
