export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${({ src }) => src ? '../images/misc/${src}.jpg' : '../images/misc/home-bg.jpg'}) top left / cover no-repeat;
  
  @media (max-width: 1100px) {
      ${({ dontShowOnSmallViewPort }) => dontShowOnSmallViewPort && 'background: none;'}
  }
  `;

export const Feature = styled(Container)`
    padding: 150px 0 500px 0;
    flex-direction: column;
    align-items: normal;
    width: 50%;
    
    @media (max-width: 1100px) {
        display: none;
    }
`;

export const Text = styled.p`
    color: white;
    font-size: 22px;
    line-height: normal;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.45);
    margin: 0;
 `;

 export const Link = styled.p`
    color: white;
    text-decoration; none;
    margin-right: 30px;
    font-weight: ${({ active}) => (active == 'true' ? '700': 'normal')};
    cursor: pointer;
    
    &hover {
        font-weight: bold;
     }

     &:last-of-type {
         margin-right: 0;
     }
    }`;

 export const FeatureCallOut = styled.h2`
    color: white;
    font-size: 50px;
    line-height: normal;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.45);
    margin: 0;
    margin-bottom: 20px;
 `;

