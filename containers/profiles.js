import React from 'react';
import { Header } from '../src/components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';

export function SelectProfileContainer({ user, setProfile }) {
    return (
        <>
        <Header bg={false}>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} src={logo} alt="Netlix" />
            </Header.Frame>
        </Header>

        <Profiles>
            <Profiles.Title>Who's watching</Profiles.Title>
            <Profiles.List>
                <Profile.User>
                    <Profiles.Picture src={user.photoURL} />
                    <Profiles.Name>{user.displayName}</Profiles.Name>
                </Profile.User>
            </Profiles.List>
        </Profiles>
        </> 
    );   
    }