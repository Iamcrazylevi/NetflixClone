import React, { useState } from 'react';
import { Link as ReachRouterLink } from 'react-router-dom';

import { Background, ButtonLink, Container, Link, Logo, Feature, FeatureCallOut, Text, } from './styles/header';


Header.Feature = function HeaderFeature({ children, ...restProps}) {
    return <Feature {...restProps}>{children}</Feature>;
};

Header.FeatureCallOut = function HeaderFeatureCallOut ({ children, ...restProps}) {
    return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
}

Header.Text = function HeaderText ({ children, ...restProps}) {
    return <Text {...restProps}>{children}</Text>
}

Header.Link = function HeaderTextLink ({ children, ...restProps}) {
    return <Link {...restProps}>{children}</Link>
}