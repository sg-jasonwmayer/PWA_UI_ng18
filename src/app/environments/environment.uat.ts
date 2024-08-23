import { environment as shared } from './enivronment.shared';

export const environment = {
  ...shared,
  name: 'uat',
  production: true,
  okta:{
  FORD_SSOCredentials: {
    clientId: '0oa6mlfh3m0HwxJ3K1d7'
  },
  TFS_SSOCredentials: {
    clientId: '0oa6mlfh3m0HwxJ3K1d7'
  },
  clientId: '0oa4sd5gpofXhwUXu1d7',
  clientIdSG: '0oa6mlfh3m0HwxJ3K1d7',
  issuer:'https://safeguard-uat.oktapreview.com/oauth2/aus2oug9jmJaurlRr1d7',
  baseUrl: 'https://safeguard-uat.oktapreview.com',
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
  ssoUrl: 'https://uat-claimsapi.safe-guardproducts.com/pwa-claims-api',
  autonationUrl: 'https://uat-claimsapi.safe-guardproducts.com/pwa-claims-api',
  autonationSSOUrl: 'https://uat-claimsapi.safe-guardproducts.com',
  rrUrl: 'https://clmapi-dev.sgproductsapis.com/claims-api',
  photoUrl:
    'https://claims-payments-pwa-api-gateway-uat.sgproductsapis.com/claims-risk-experience-service/v1',
  baseUrl: 'https://safeguard-uat.oktapreview.com'
};
