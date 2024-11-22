import React from 'react'

const Footer= () => {
  return (
    <>
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle> </FooterLinkTitle>
                            <FooterLink to='/calculations'> Calculate your pressure vessel dimensions</FooterLink>
                            <FooterLink to='/pv'> </FooterLink>
                            <FooterLink to='/index'> </FooterLink>
                            <FooterLink to='/meetus'> </FooterLink>
                            <FooterLink to='/modeling'> </FooterLink>
                        
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
        </FooterWrap>
    </FooterContainer>
     </>
   
  )
}

export default Footer