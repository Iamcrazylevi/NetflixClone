import React, { useState } from 'react';
import { Link as ReachRouterLink } from 'react-router-dom';

import { 
    Background, 
    ButtonLink, 
    Container, 
    Link, 
    Logo, 
    Group, 
    Profile, 
    Dropdown,
    Picture, 
    Feature, 
    FeatureCallOut, 
    Text, 
} from './styles/header';


Header.Feature = function HeaderFeature({ children, ...restProps}) {
    return <Feature {...restProps}>{children}</Feature>;
};

Header.FeatureCallOut = function HeaderFeatureCallOut ({ children, ...restProps}) {
    return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
}

Header.Profile = function HeaderProfile({ children, ...restProps }) {
    return <Profile { ...restProps}>{children}</Profile>
}

Header.Picture = function HeaderPicture({ src, ...restProps }) {
    return <Picture { ...restProps} src={'/images/users/${src}.png'} />;
}

Header.Dropdown = function HeaderDropdown ({ children, ...restProps}) {
    return <Dropdown {...restProps}>{children}</Dropdown>
}

Header.Text = function HeaderText ({ children, ...restProps}) {
    return <Text {...restProps}>{children}</Text>
}

Header.TextLink = function HeaderTextLink ({ children, ...restProps}) {
    return <Link {...restProps}>{children}</Link>
}

Header.Group = function HeaderGroup ({ children, ...restProps}) {
    return <Group {...restProps}>{children}</Group>
}