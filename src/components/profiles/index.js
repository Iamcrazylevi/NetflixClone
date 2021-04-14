import React from 'react';
import { Container, Title, List, item, Picture, Name } from './styles/profiles';

export default function Profiles({ children, ...restProps}) {
    return <Container {...restProps}>{Children}</Container>;
}

Profiles.Title = function ProfilesTitle({ children, ...restProps}) {
    return <Title {...restProps}>{chidlren}</Title>;
};

Profiles.List = function ProfilesList({ children, ...restProps}) {
    return <List {...restProps}>{chidlren}</List>;
};

Profiles.User = function ProfilesUser({ children, ...restProps}) {
    return <Item {...restProps}>{chidlren}</Item>;
};

Profiles.Picture = function ProfilesPicture({ children, ...restProps}) {
    return <Picture {...restProps} src={src ? '/images/users/${src}.png' : '/images/misc/loading.gif'} />;
};

Profiles.Name = function ProfilesName({ children, ...restProps}) {
    return <Name {...restProps}>{chidlren}</Name>;
};