import React from "react";
import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard, TransactionCardProps } from "../../components/TransactionCard";


import { 

    Container, 
    Header, 
    UserInfo, 
    Photo, 
    User, 
    UserGreting, 
    UserName, 
    UserWrapper, 
    Icon, 
    HighlightCards, 
    Transactions, 
    Title, 
    TransactionList,
    LogoutButton

} from './styles';

export interface DataListProps extends TransactionCardProps {
    id: string;
}

export function Dashboard(){
    
    const data: DataListProps[] = 
    [
        {
            id: '1',
            type: 'positive', 
            title: "Desenvolvimento de Site",
            amount: "R$ 12.000,00",
            category: {
                name: 'Vendas',
                icon: 'dollar-sign'
            },
            date: "15/11/2022"
        },
        {
            id: '2',
            type: 'negative', 
            title: "Hamburgueria Pizzy",
            amount: "R$ 59,00",
            category: {
                name: 'Alimentação',
                icon: 'coffee'
            },
            date: "15/11/2022"
        },
        {
            id: '3',
            type: 'negative', 
            title: "Aluguel do Apartamento",
            amount: "R$ 1.200,00",
            category: {
                name: 'Casa',
                icon: 'home'
            },
            date: "15/11/2022"
        }
    ];

    return(
        <Container >
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo 
                            source={{uri: 'https://avatars.githubusercontent.com/u/47918900?s=400&u=33cb2c5fd276aeb11b2a57eca85b1654084e06c1&v=4'}}/>
                        <User>
                            <UserGreting>Olá, </UserGreting>
                            <UserName>Anderson</UserName>
                        </User>
                    </UserInfo>
                    <LogoutButton onPress={() => {}}>
                        <Icon name="power" />
                    </LogoutButton>
                </UserWrapper>
            </Header>

            <HighlightCards>
                <HighlightCard 
                    type="up"
                    title="Entradas"
                    amount="R$ 17.400,00"
                    lastTransaction="Última entrada dia 13 de abril"
                />
                <HighlightCard 
                    type="down"
                    title="Saidas"
                    amount="R$ 1.259,00"
                    lastTransaction="Última saída dia 03 de abril"
                />
                <HighlightCard 
                    type="total"
                    title="Total"
                    amount="R$ 16.141,00"
                    lastTransaction="01 à 16 de abril"
                />
            </HighlightCards>

            <Transactions>
                <Title>Listagem</Title>

                
                <TransactionList
                    data={data}
                    keyExtractor={item => item.id }
                    renderItem={({ item }) => <TransactionCard data={ item } />}
                />

            </Transactions>
        </Container>
    );

}