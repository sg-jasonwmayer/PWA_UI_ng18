import { environment as shared } from './enivronment.shared';

export const environment = {
  ...shared,
  name: 'production',
  production: true,
  okta:{
    FORD_SSOCredentials: {
      idpId: '0oab2rwv26GR1XNmP697'
    },
    TFS_SSOCredentials: {
      idpId: '0oaazq94pcIgMyZ4Y697'
    },
    clientIdSG: '0oa3vf4pulwIIJ7rX697',
    clientId: '0oa24g5fn9VAnhAKl697',  
    issuer: 'https://safeguard.okta.com/oauth2/ausuf783nZ9zLSxZt696',
    baseUrl:'https://safeguard.okta.com',
    redirectUri: window.location.origin,
    scopes: ['openid', 'email', 'profile', 'groups'],
    oktaId: '',
    userDetails:
    {
      firstName: null,
      lastName: null,
      userEmail: null,
      mobilePhone: null,
      secondEmail: null,
      dealerCode: null,
      userName: null,
      userType: null
    },
  },
  ssoUrl: 'https://claimsapi.safe-guardproducts.com/pwa-claims-api',
  autonationUrl: 'https://claimsapi.safe-guardproducts.com/pwa-claims-api',
  autonationSSOUrl: 'https://claimsapi.safe-guardproducts.com',
  rrUrl: 'https://clmapi.sgproductsapis.com/claims-api',
  photoUrl:
    'https://claims-payments-pwa-api-gateway.sgproductsapis.com/claims-risk-experience-service/v1'
};
