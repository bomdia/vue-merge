const VueMerge = require('../dist/vue-merge.umd.js').VueMerge

const obj = {
  glossary: {
    title: 'example glossary',
    GlossDiv: {
      title: 'S',
      GlossList: [
        {
          ID: 'SGML',
          SortAs: 'SGML',
          GlossTerm: 'Standard Generalized Markup Language',
          Acronym: 'SGML',
          Abbrev: 'ISO 8879:1986',
          GlossDef: {
            para: 'A meta-markup language, used to create markup languages such as DocBook.',
            GlossSeeAlso: ['GML', 'XML']
          },
          GlossSee: 'markup'
        },
        {
          ID: 'SGML',
          SortAs: 'SGML',
          GlossTerm: 'Standard Generalized Markup Language',
          Acronym: 'SGML',
          Abbrev: 'ISO 8879:1986',
          GlossDef: {
            para: 'A meta-markup language, used to create markup languages such as DocBook.',
            GlossSeeAlso: ['GML', 'XML']
          },
          GlossSee: 'markup'
        }
      ]
    }
  }
}

const value = {
  glossary: {
    title: 'this have to not change',
    GlossDiv: {
      title: 'this have to not change',
      GlossList: {
        0: {
          ID: 'test',
          SortAs: 'test',
          GlossTerm: 'test',
          Acronym: 'test',
          Abbrev: 'test',
          GlossDef: {
            para: 'test',
            GlossSeeAlso: ['test', 'test']
          },
          GlossSee: 'test'
        },
        1: {
          ID: 'test',
          SortAs: 'test',
          GlossTerm: 'test',
          Acronym: 'test',
          Abbrev: 'test',
          GlossDef: {
            para: 'test',
            GlossSeeAlso: ['test', 'test']
          },
          GlossSee: 'test'
        }
      }
    }
  }
}

const safePaths = [
  'glossary.GlossDiv.GlossList.0.*'
]
VueMerge(obj, value, { safePaths })

console.log('FINAL OBJECT:', JSON.stringify(obj, null, 2))
