export const environment = {
  appVersion: require('../../package.json').version, // eslint-disable-line @typescript-eslint/no-var-requires
  auth: { sso: false },
  features: {
    defaultProductVewType: false,
    logoutMode: 'full'
  },
  firebase: {
    authDomain: 'messaging-b7ae1.firebaseapp.com',
    projectId: 'messaging-b7ae1',
    storageBucket: 'messaging-b7ae1.appspot.com',
    messagingSenderId: '175395368044',
    appId: '1:175395368044:web:76450c53e9b5b19ee6bc49',
    measurementId: 'G-QDGEQMS012'
  },
  mocks: false,
  overwriteSso: false,
  oktaClientIdSGDEV: '0oa6fuivezCVAxdAv1d7',
  oktaClientIdDEV: '0oa45tw0yo5wFRB5y1d7',
  oktaClientIdUAT: '0oa4sd5gpofXhwUXu1d7',
  oktaClientIdSGUAT: '0oa6mlfh3m0HwxJ3K1d7',
  oktaClientIdPROD: '0oa24g5fn9VAnhAKl697',
  oktaClientIdSGPROD: '0oa3vf4pulwIIJ7rX697',
  accessIdentifier:
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtb2JxYTEiLCJleHAiOjE2MTMxNDIwODgsImlhdCI6MTYxMzA1NTY4OH0.HLquaXEoONpUf69hOr0xA31o-haTAP7mkUusfJeDo2TF2SxS4wFX6evxTpJAu5SRGOJjNV8xyifZuwSdu4Ca3g',
  scanditKeyPWA_dev:
    'AWv/vgLWICbOHM7GqAEMOZo2+u5sIIyVyS0RjO568KPIbHr0SnPKy8QZ5Q3hRfL9YGEYvPNHTA8GAQihgU6/5nNLICJvSUAhRG38Uv8/GzJ/ZZa6ZWhkGQ5aDyrQEvmgmhNqdzYsVnnMIKyPQjOSjizxoyRehhJuH1CwK/Xq1rLFrxLzmmaMdHC2OnaR28IkK/FEgeTsDkmc7FiP9D0/k3+CnD7SCXfA6PwW6hgnkixXbF4cF947I7YVWpf0+o7KB5T3g67FZHJLHMJ5vU011sHsQDycxW4f75P3jcVoYlMaMQQAVlfSEcbbjfxQ9TdghTQ8uHoOdEpfrAjqnTxUUfatX+laJgAxtmK++Rz2t/AwbWod1i6wXdkxF7fYekh7AOdR2ol8wftV5XUDBuQJlNty4rpdc5jezkk0EJwg3QFwBSw7B48Io/t32lXNwiRiKovos9H2CzCUmokA9Ip5UK/hEnG+LLJO51bqxDkZa5HxwtO1lMYiKTzzHsGRQ4s6YHPZ2VSYWWv0ipP/C1XrTUWYwXJM2rHWtPSQ+dqgffPI+zn4dt+9tS6JyIgM4MrU7O4wjcTmonNItdmuUKI4gqODfN3gZIoOIgOd4qRcboNO1dE0GtSzS/zaFeHVC5ybLXUYAffFWglEOa6JYJafgj3U3zrKXQ9HSl/ZSeoVz1RTgPw3H1ymS0tRwGO5XTw/Tpv4VxKqvy1AodV6KiFaElZbv/uk8eNF+XiYnlcpqhcqQsBzOrsZcC05QJ1uLtJgv9bCtYT2zpBS0tu/arOzxqNWtY9yfU0MlUGr2p70/HOJj4ebWcStGfOya4Y=',
  scanditKeyPWA_mobile:
    'AfBS5mEXROMJQknfpzVzvVM9o+aWQoVYMlNKZNZOeN6DRjHg2nvKqosEqrpmVnz5/RDGYJMETE6XaatnYU0CsCZJ4yzvTEqbIWkD/ila8obxR7uEXTPRSX1QQ1UGa6bSYWzy/11Cny73Ucyq4HQqa/JLbl26bRSHox9zu+sv2zV8M+/pyg6KsArGlpXiH6WZD/FqSkTTXf3ExmBk570DUYGBV0EQky5puDBwPaVcRVpFQNvMbrZPwSKeBe8KZ0Hi7qGyZzbqNtjkJE/29kOyO1f/BjoAnOhrJSrvu8da3oFFF+zbiLCMvyH1esU880hT4RrIqnlKstx3m7HUeSl2RAOp/hhFRkAO2HcJHvKmpjaoIqpxXUM3GEqIfUyzGXFl9qE/Fg9KwtwsVRmcgB22tM7iS+rnnBmv/vb7UM7MH7KtoOYN8LMletGmD+xN9xVIkuqUh7AbGuTOMssMAjOTHxLT7IQnyeC3xUOmXqvexpTHdvII3DsqU1Nb9tUdZl9dNaNRmzs8TJBmm7pPRLRucASt8IMzGlIEw/GsmnusClFbVRMfjMoY8+1Zw0lb8RhhFFvcO7twj8/7um5HwoCEjwN2MqYXCjtjldWR5WVbCe0yQmDBZyk2sxqqsXZNk7eOrPl6B950bAGnH7IGV/UULLl7N9iCg6HhDHqPte5RIX/S84V6ofTeOMIf28wEBlOROG9dZEvptAt+hyWkfx8x/BpKW4NCZdho/Qyoa+SflLu1Hi0As8JkBCQwqxWu9PyWnJOyWPB/WoWTOpeQI/nRN1wUOXxt3YUeMAVaO9ccssAPQ2pK0dDG3kw/qYjiAR2ziYp9IzqEVV5lNOX3dQoCRc2J+vwIiYct'

};
