import { environment as shared } from './enivronment.shared';

export const environment = {
  ...shared,
  name: 'uat-omega',
  production: true,
  okta:{
    FORD_SSOCredentials: {
      idpId: '0oa3n7tcfozQVowR51d7'
    },
    TFS_SSOCredentials: {
      idpId: '0oa3n7tcfozQVowR51d7'
    },
    clientIdSG: '0oa6fuivezCVAxdAv1d7',
    clientId: '0oa45tw0yo5wFRB5y1d7',
    issuer:'https://safeguard-dev.oktapreview.com/oauth2/aus2o902flb3fHbRi1d7',
    baseUrl: 'https://safeguard-dev.oktapreview.com',
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
  ssoUrl: 'https://gmuat-claimsapi.safe-guardproducts.com/pwa-claims-api',
  autonationUrl:
    'https://gmuat-claimsapi.safe-guardproducts.com/pwa-claims-api',
  autonationSSOUrl: 'https://gmuat-claimsapi.safe-guardproducts.com',
  rrUrl: 'https://clmapi-gmuat.sgproductsapis.com/claims-api',
  photoUrl:
    'https://claims-payments-pwa-api-gateway-uat.sgproductsapis.com/claims-risk-experience-service/v1'
};
