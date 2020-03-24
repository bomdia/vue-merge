const VueMerge = require('../dist/vue-merge.umd.js').VueMerge

const obj = {
  pagesReorder: null,
  Theme: {
    themeList: {
      PSYClan: {
        style: {
          background: '#212121',
          primary: '#8b1014',
          accent: '#FF8A80'
        },
        class: {
          background: 'grey darken-4',
          primary: 'materialize-red darken-4',
          accent: 'red accent-1'
        },
        type: {
          background: 'dark',
          primary: 'dark',
          accent: 'dark'
        }
      },
      Teal: {
        style: {
          background: '#80CBC4',
          primary: '#009688',
          accent: '#64FFDA'
        },
        class: {
          background: 'teal lighten-3',
          primary: 'teal',
          accent: 'teal accent-2'
        },
        type: {
          background: 'light',
          primary: 'dark',
          accent: 'light'
        }
      },
      'Deep Blue': {
        style: {
          background: '#90CAF9',
          primary: '#1565C0',
          accent: '#448AFF'
        },
        class: {
          background: 'blue lighten-3',
          primary: 'blue darken-3',
          accent: 'blue accent-2'
        },
        type: {
          background: 'light',
          primary: 'dark',
          accent: 'dark'
        }
      },
      Grey: {
        style: {
          background: '#FAFAFA',
          primary: '#BDBDBD',
          accent: '#EEEEEE'
        },
        class: {
          background: 'grey lighten-5',
          primary: 'grey lighten-1',
          accent: 'grey lighten-3'
        },
        type: {
          background: 'light',
          primary: 'light',
          accent: 'light'
        }
      },
      Black: {
        style: {
          background: '#424242',
          primary: '#000000',
          accent: '#BDBDBD'
        },
        class: {
          background: 'grey darken-3',
          primary: 'black',
          accent: 'grey lighten-1'
        },
        type: {
          background: 'dark',
          primary: 'dark',
          accent: 'light'
        }
      },
      'Very Purple': {
        style: {
          background: '#6A1B9A',
          primary: '#4A148C',
          accent: '#EA80FC'
        },
        class: {
          background: 'purple darken-3',
          primary: 'purple darken-4',
          accent: 'purple accent-1'
        },
        type: {
          background: 'dark',
          primary: 'dark',
          accent: 'dark'
        }
      }
    },
    currentTheme: undefined,
    testList: undefined
  },
  TitleBar: {
    isReversed: false
  },
  i18n: {
    makeLanguageReactiveState: 'auto'
  },
  test: undefined
}

const value = {
  pagesReorder: {},
  Theme: {
    prop1: { test: { Black: { style: { lol: 'hu' } } } },
    currentTheme: 'Very Purple'
  },
  TitleBar: {
    isReversed: false
  },
  i18n: {
    makeLanguageReactiveState: 'auto'
  }
}

const safePaths = [
  'i18n.makeLanguageReactiveState',
  'Theme.currentTheme',
  'Theme.testList',
  'TitleBar.isReversed',
  'pagesReorder.*',
  'test'
]

const empty = { Theme: { testList: ['dovrebbe', 'essere', 'appeso'], currentTheme: 'Very Purple' }, test: 'test' }
VueMerge(empty, obj, { safePaths, logs: true })
console.log('FINAL OBJECT:', JSON.stringify(empty, null, 2))
