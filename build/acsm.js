module.exports = {
  actionMap: {},
  eventMap: {},
  preferences: {
    actions: []
  },
  servers: {
    instances: {}
  },
  session: {
    authStatus: {
      failedLogin: 0,
      errorStack: [],
      isLogged: true
    },
    maxRetry: 5,
    retryTime: 3000,
    interval: '',
    autoLogin: true,
    userApiKey: {
      _id: 'f30686e9-6dd6-4401-b4c4-20621d0690c2-ede69caa-a714-4e0c-aad7-6afea830c7be',
      _rev: '1-db42cf4695cbd92364f618a806a6229d',
      userName: 'dGVzdA==',
      releaseDate: 1585014221513,
      apiKey: 'f30686e9-6dd6-4401-b4c4-20621d0690c2-ede69caa-a714-4e0c-aad7-6afea830c7be',
      invalidated: false,
      apiLevel: 'MAXIMUM'
    }
  },
  settings: {},
  spaces: {},
  users: {
    currentUser: {
      globalUserRole: {
        spaceId: '',
        serverId: '',
        userRole: 'ADMIN'
      },
      _id: 'dGVzdA==',
      _rev: '154-b0f0308b79a6df7e2a87c6e7d6e8e436',
      username: 'test',
      password: '4df1b32e12c880857d6052cc0e212e422cebe1ac80b4336a750619f1f97d1c09c790a4320a5310bef41855a237e47d0b0bbaf453d83c8a5fc1cfa0efb9230f12',
      hash: 'bhSVKrTiiuXoCfGx0pZts4ycF',
      roles: [
        {
          spaceId: '',
          serverId: '',
          userRole: 'ADMIN'
        }
      ],
      userMaxLevel: 'MAXIMUM',
      interfacePreferences: {
        pagesReorder: {
          'Home.one': 10,
          'Home.all': 0,
          Settings: 40,
          OnUs: 50,
          Authorization: 20,
          Login: 30
        },
        Theme: {
          currentTheme: 'Pinky Marshmellow'
        },
        TitleBar: {
          isReversed: false
        },
        i18n: {
          makeLanguageReactiveState: 'auto'
        },
        currentTheme: 'Pinky Marshmellow'
      }
    },
    usersList: {},
    whatchedPreferences: [
      'i18n.makeLanguageReactiveState',
      'Theme.currentTheme',
      'TitleBar.isReversed',
      'pagesReorder.*'
    ]
  }
}
