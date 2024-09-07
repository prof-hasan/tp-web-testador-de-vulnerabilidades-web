import styled from 'styled-components';

export const OrderItemDiv = styled.div`
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin: 15px 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 400px;
    transition: box-shadow 0.3s ease;
    
    &:hover {
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    }
`;

export const OrderItemHeaderDiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 10px;
`;

export const TopLeftText = styled.p`
    font-size: 16px;
    font-weight: 500;
    color: #333;
`;

export const BottomLeftText = styled.p`
    font-size: 14px;
    font-weight: 400;
    color: #555;
`;

export const TopRightText = styled.p`
    font-size: 16px;
    font-weight: 500;
    color: #333;
    text-align: right;
`;

// Exemplo de como ficaria a aplicação do CSS ao seu componente UserCard

function UserCard({ user }) {
    return (
        <OrderItemDiv>
            <OrderItemHeaderDiv>
                <TopLeftText>Username: {user.username}</TopLeftText>
                <TopRightText>Idade: {user.age}</TopRightText>
            </OrderItemHeaderDiv>
            <BottomLeftText>Profissão: {user.job}</BottomLeftText>
            <BottomLeftText>Criado em: {user.createdAt}</BottomLeftText>
        </OrderItemDiv>
    );
}

export default UserCard;
