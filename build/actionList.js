module.exports = {
  'Session/login(user,password,wantedApiLevel)': {
    group: 'Session',
    name: 'login',
    neededLevel: 'GUEST',
    neededRole: 'GUEST',
    args: [
      'user',
      'password',
      'wantedApiLevel'
    ],
    successResponses: [
      'Session/login_{{requestId}_}OK',
      'Session/login(user,password,wantedApiLevel)_OK',
      'Session/login_OK'
    ],
    errorResponses: [
      'Session/login_{{requestId}_}KO',
      'Session/login(user,password,wantedApiLevel)_KO',
      'Session/login_KO'
    ]
  },
  'Events/mergeMap(toMerge)': {
    group: 'Events',
    name: 'mergeMap',
    neededLevel: 'MAXIMUM',
    neededRole: 'ADMIN',
    args: [
      'toMerge'
    ],
    successResponses: [
      'Events/mergeMap_{{requestId}_}OK',
      'Events/mergeMap(toMerge)_OK',
      'Events/mergeMap_OK'
    ],
    errorResponses: [
      'Events/mergeMap_{{requestId}_}KO',
      'Events/mergeMap(toMerge)_KO',
      'Events/mergeMap_KO'
    ]
  },
  'Users/myPreferences()': {
    group: 'Users',
    name: 'myPreferences',
    neededLevel: 'MINIMUM',
    neededRole: 'GUEST',
    args: [],
    successResponses: [
      'Users/myPreferences_{{requestId}_}OK',
      'Users/myPreferences()_OK',
      'Users/myPreferences_OK'
    ],
    errorResponses: [
      'Users/myPreferences_{{requestId}_}KO',
      'Users/myPreferences()_KO',
      'Users/myPreferences_KO'
    ]
  },
  'Users/remove(userId)': {
    group: 'Users',
    name: 'remove',
    neededLevel: 'MAXIMUM',
    neededRole: 'ADMIN',
    args: [
      'userId'
    ],
    successResponses: [
      'Users/remove_{{requestId}_}OK',
      'Users/remove(userId)_OK',
      'Users/remove_OK'
    ],
    errorResponses: [
      'Users/remove_{{requestId}_}KO',
      'Users/remove(userId)_KO',
      'Users/remove_KO'
    ]
  },
  'Servers/getAll()': {
    group: 'Servers',
    name: 'getAll',
    neededLevel: 'MINIMUM',
    neededRole: 'VIEWER',
    args: [],
    successResponses: [
      'Servers/getAll_{{requestId}_}OK',
      'Servers/getAll()_OK',
      'Servers/getAll_OK'
    ],
    errorResponses: [
      'Servers/getAll_{{requestId}_}KO',
      'Servers/getAll()_KO',
      'Servers/getAll_KO'
    ]
  },
  'Users/get(userId)': {
    group: 'Users',
    name: 'get',
    neededLevel: 'MEDIUM',
    neededRole: 'ADMIN',
    args: [
      'userId'
    ],
    successResponses: [
      'Users/get_{{requestId}_}OK',
      'Users/get(userId)_OK',
      'Users/get_OK'
    ],
    errorResponses: [
      'Users/get_{{requestId}_}KO',
      'Users/get(userId)_KO',
      'Users/get_KO'
    ]
  },
  'Session/logout(apiKey)': {
    group: 'Session',
    name: 'logout',
    neededLevel: 'MINIMUM',
    neededRole: 'GUEST',
    args: [
      'apiKey'
    ],
    successResponses: [
      'Session/logout_{{requestId}_}OK',
      'Session/logout(apiKey)_OK',
      'Session/logout_OK'
    ],
    errorResponses: [
      'Session/logout_{{requestId}_}KO',
      'Session/logout(apiKey)_KO',
      'Session/logout_KO'
    ]
  },
  'Actions/saveMap()': {
    group: 'Actions',
    name: 'saveMap',
    neededLevel: 'MAXIMUM',
    neededRole: 'ADMIN',
    args: [],
    successResponses: [
      'Actions/saveMap_{{requestId}_}OK',
      'Actions/saveMap()_OK',
      'Actions/saveMap_OK'
    ],
    errorResponses: [
      'Actions/saveMap_{{requestId}_}KO',
      'Actions/saveMap()_KO',
      'Actions/saveMap_KO'
    ]
  },
  'Users/getAll()': {
    group: 'Users',
    name: 'getAll',
    neededLevel: 'MEDIUM',
    neededRole: 'ADMIN',
    args: [],
    successResponses: [
      'Users/getAll_{{requestId}_}OK',
      'Users/getAll()_OK',
      'Users/getAll_OK'
    ],
    errorResponses: [
      'Users/getAll_{{requestId}_}KO',
      'Users/getAll()_KO',
      'Users/getAll_KO'
    ]
  },
  'Session/renew(apiKey)': {
    group: 'Session',
    name: 'renew',
    neededLevel: 'MINIMUM',
    neededRole: 'GUEST',
    args: [
      'apiKey'
    ],
    successResponses: [
      'Session/renew_{{requestId}_}OK',
      'Session/renew(apiKey)_OK',
      'Session/renew_OK'
    ],
    errorResponses: [
      'Session/renew_{{requestId}_}KO',
      'Session/renew(apiKey)_KO',
      'Session/renew_KO'
    ]
  },
  'Spaces/get(spaceId)': {
    group: 'Spaces',
    name: 'get',
    neededLevel: 'MINIMUM',
    neededRole: 'VIEWER',
    args: [
      'spaceId'
    ],
    successResponses: [
      'Spaces/get_{{requestId}_}OK',
      'Spaces/get(spaceId)_OK',
      'Spaces/get_OK'
    ],
    errorResponses: [
      'Spaces/get_{{requestId}_}KO',
      'Spaces/get(spaceId)_KO',
      'Spaces/get_KO'
    ]
  },
  'Spaces/getAll()': {
    group: 'Spaces',
    name: 'getAll',
    neededLevel: 'MINIMUM',
    neededRole: 'VIEWER',
    args: [],
    successResponses: [
      'Spaces/getAll_{{requestId}_}OK',
      'Spaces/getAll()_OK',
      'Spaces/getAll_OK'
    ],
    errorResponses: [
      'Spaces/getAll_{{requestId}_}KO',
      'Spaces/getAll()_KO',
      'Spaces/getAll_KO'
    ]
  },
  'Actions/getMap()': {
    group: 'Actions',
    name: 'getMap',
    neededLevel: 'GUEST',
    neededRole: 'GUEST',
    args: [],
    successResponses: [
      'Actions/getMap_{{requestId}_}OK',
      'Actions/getMap()_OK',
      'Actions/getMap_OK'
    ],
    errorResponses: [
      'Actions/getMap_{{requestId}_}KO',
      'Actions/getMap()_KO',
      'Actions/getMap_KO'
    ]
  },
  'Servers/get(spaceId,serverId)': {
    group: 'Servers',
    name: 'get',
    neededLevel: 'MINIMUM',
    neededRole: 'VIEWER',
    args: [
      'spaceId',
      'serverId'
    ],
    successResponses: [
      'Servers/get_{{requestId}_}OK',
      'Servers/get(spaceId,serverId)_OK',
      'Servers/get_OK'
    ],
    errorResponses: [
      'Servers/get_{{requestId}_}KO',
      'Servers/get(spaceId,serverId)_KO',
      'Servers/get_KO'
    ]
  },
  'Actions/resetMap()': {
    group: 'Actions',
    name: 'resetMap',
    neededLevel: 'MAXIMUM',
    neededRole: 'ADMIN',
    args: [],
    successResponses: [
      'Actions/resetMap_{{requestId}_}OK',
      'Actions/resetMap()_OK',
      'Actions/resetMap_OK'
    ],
    errorResponses: [
      'Actions/resetMap_{{requestId}_}KO',
      'Actions/resetMap()_KO',
      'Actions/resetMap_KO'
    ]
  },
  'Events/saveMap()': {
    group: 'Events',
    name: 'saveMap',
    neededLevel: 'MAXIMUM',
    neededRole: 'ADMIN',
    args: [],
    successResponses: [
      'Events/saveMap_{{requestId}_}OK',
      'Events/saveMap()_OK',
      'Events/saveMap_OK'
    ],
    errorResponses: [
      'Events/saveMap_{{requestId}_}KO',
      'Events/saveMap()_KO',
      'Events/saveMap_KO'
    ]
  },
  'Servers/stop(spaceId,serverId)': {
    group: 'Servers',
    name: 'stop',
    neededLevel: 'MEDIUM',
    neededRole: 'OPERATOR',
    args: [
      'spaceId',
      'serverId'
    ],
    successResponses: [
      'Servers/stop_{{requestId}_}OK',
      'Servers/stop(spaceId,serverId)_OK',
      'Servers/stop_OK'
    ],
    errorResponses: [
      'Servers/stop_{{requestId}_}KO',
      'Servers/stop(spaceId,serverId)_KO',
      'Servers/stop_KO'
    ]
  },
  'Events/getMap()': {
    group: 'Events',
    name: 'getMap',
    neededLevel: 'GUEST',
    neededRole: 'GUEST',
    args: [],
    successResponses: [
      'Events/getMap_{{requestId}_}OK',
      'Events/getMap()_OK',
      'Events/getMap_OK'
    ],
    errorResponses: [
      'Events/getMap_{{requestId}_}KO',
      'Events/getMap()_KO',
      'Events/getMap_KO'
    ]
  },
  'Servers/remove(spaceId,serverId)': {
    group: 'Servers',
    name: 'remove',
    neededLevel: 'MAXIMUM',
    neededRole: 'ADMIN',
    args: [
      'spaceId',
      'serverId'
    ],
    successResponses: [
      'Servers/remove_{{requestId}_}OK',
      'Servers/remove(spaceId,serverId)_OK',
      'Servers/remove_OK'
    ],
    errorResponses: [
      'Servers/remove_{{requestId}_}KO',
      'Servers/remove(spaceId,serverId)_KO',
      'Servers/remove_KO'
    ]
  },
  'Users/me()': {
    group: 'Users',
    name: 'me',
    neededLevel: 'MINIMUM',
    neededRole: 'GUEST',
    args: [],
    successResponses: [
      'Users/me_{{requestId}_}OK',
      'Users/me()_OK',
      'Users/me_OK'
    ],
    errorResponses: [
      'Users/me_{{requestId}_}KO',
      'Users/me()_KO',
      'Users/me_KO'
    ]
  },
  'Spaces/create(spaceName,interfaceTheme,interfaceLogo,customListenerToReflect)': {
    group: 'Spaces',
    name: 'create',
    neededLevel: 'MAXIMUM',
    neededRole: 'ADMIN',
    args: [
      'spaceName',
      'interfaceTheme',
      'interfaceLogo',
      'customListenerToReflect'
    ],
    successResponses: [
      'Spaces/create_{{requestId}_}OK',
      'Spaces/create(spaceName,interfaceTheme,interfaceLogo,customListenerToReflect)_OK',
      'Spaces/create_OK'
    ],
    errorResponses: [
      'Spaces/create_{{requestId}_}KO',
      'Spaces/create(spaceName,interfaceTheme,interfaceLogo,customListenerToReflect)_KO',
      'Spaces/create_KO'
    ]
  },
  'Servers/start(spaceId,serverId)': {
    group: 'Servers',
    name: 'start',
    neededLevel: 'MEDIUM',
    neededRole: 'OPERATOR',
    args: [
      'spaceId',
      'serverId'
    ],
    successResponses: [
      'Servers/start_{{requestId}_}OK',
      'Servers/start(spaceId,serverId)_OK',
      'Servers/start_OK'
    ],
    errorResponses: [
      'Servers/start_{{requestId}_}KO',
      'Servers/start(spaceId,serverId)_KO',
      'Servers/start_KO'
    ]
  },
  'Spaces/remove(spaceId)': {
    group: 'Spaces',
    name: 'remove',
    neededLevel: 'MAXIMUM',
    neededRole: 'ADMIN',
    args: [
      'spaceId'
    ],
    successResponses: [
      'Spaces/remove_{{requestId}_}OK',
      'Spaces/remove(spaceId)_OK',
      'Spaces/remove_OK'
    ],
    errorResponses: [
      'Spaces/remove_{{requestId}_}KO',
      'Spaces/remove(spaceId)_KO',
      'Spaces/remove_KO'
    ]
  },
  'Servers/create(spaceId,name,title,template,autoStart,keepStarted)': {
    group: 'Servers',
    name: 'create',
    neededLevel: 'MAXIMUM',
    neededRole: 'ADMIN',
    args: [
      'spaceId',
      'name',
      'title',
      'template',
      'autoStart',
      'keepStarted'
    ],
    successResponses: [
      'Servers/create_{{requestId}_}OK',
      'Servers/create(spaceId,name,title,template,autoStart,keepStarted)_OK',
      'Servers/create_OK'
    ],
    errorResponses: [
      'Servers/create_{{requestId}_}KO',
      'Servers/create(spaceId,name,title,template,autoStart,keepStarted)_KO',
      'Servers/create_KO'
    ]
  },
  'Actions/mergeMap(toMerge)': {
    group: 'Actions',
    name: 'mergeMap',
    neededLevel: 'MAXIMUM',
    neededRole: 'ADMIN',
    args: [
      'toMerge'
    ],
    successResponses: [
      'Actions/mergeMap_{{requestId}_}OK',
      'Actions/mergeMap(toMerge)_OK',
      'Actions/mergeMap_OK'
    ],
    errorResponses: [
      'Actions/mergeMap_{{requestId}_}KO',
      'Actions/mergeMap(toMerge)_KO',
      'Actions/mergeMap_KO'
    ]
  },
  'Session/login(apiKey)': {
    group: 'Session',
    name: 'login',
    neededLevel: 'GUEST',
    neededRole: 'GUEST',
    args: [
      'apiKey'
    ],
    successResponses: [
      'Session/login_{{requestId}_}OK',
      'Session/login(apiKey)_OK',
      'Session/login_OK'
    ],
    errorResponses: [
      'Session/login_{{requestId}_}KO',
      'Session/login(apiKey)_KO',
      'Session/login_KO'
    ]
  },
  'Users/mergeMyPreferences(myPreferences)': {
    group: 'Users',
    name: 'mergeMyPreferences',
    neededLevel: 'MINIMUM',
    neededRole: 'GUEST',
    args: [
      'myPreferences'
    ],
    successResponses: [
      'Users/mergeMyPreferences_{{requestId}_}OK',
      'Users/mergeMyPreferences(myPreferences)_OK',
      'Users/mergeMyPreferences_OK'
    ],
    errorResponses: [
      'Users/mergeMyPreferences_{{requestId}_}KO',
      'Users/mergeMyPreferences(myPreferences)_KO',
      'Users/mergeMyPreferences_KO'
    ]
  },
  'Servers/restart(spaceId,serverId)': {
    group: 'Servers',
    name: 'restart',
    neededLevel: 'MEDIUM',
    neededRole: 'OPERATOR',
    args: [
      'spaceId',
      'serverId'
    ],
    successResponses: [
      'Servers/restart_{{requestId}_}OK',
      'Servers/restart(spaceId,serverId)_OK',
      'Servers/restart_OK'
    ],
    errorResponses: [
      'Servers/restart_{{requestId}_}KO',
      'Servers/restart(spaceId,serverId)_KO',
      'Servers/restart_KO'
    ]
  },
  'Events/resetMap()': {
    group: 'Events',
    name: 'resetMap',
    neededLevel: 'MAXIMUM',
    neededRole: 'ADMIN',
    args: [],
    successResponses: [
      'Events/resetMap_{{requestId}_}OK',
      'Events/resetMap()_OK',
      'Events/resetMap_OK'
    ],
    errorResponses: [
      'Events/resetMap_{{requestId}_}KO',
      'Events/resetMap()_KO',
      'Events/resetMap_KO'
    ]
  }
}
