import React from "react";
import { HighlightCard } from "../../components/HighlightCard";


import { Container, Header, UserInfo, Photo, User, UserGreting, UserName, UserWrapper, Icon, HighlightCards } from './styles'

export function Dashboard(){
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
                    <Icon name="power" />
                </UserWrapper>
            </Header>
            <HighlightCards>
                <HighlightCard />
                <HighlightCard />
                <HighlightCard />
            </HighlightCards>
        </Container>
    );

}