# vue-merge

DeepMerge two object using Vue.set()

**Vue.merge( obj, value, options)** arguments:
- **obj** -- the object where put new thing
- **value** -- the object with the new thing, can be nested as wanted, can be a value if **options.startAt** is a non empty path
- **options** -- an object with the options
   - **ignoreNull**: false, -- true ignore null found on **value**, false merge null too
   - **overwrite**: false, -- true overwrite the array with the new one, false append new value to the end of existing array
   - **startAt**: '', -- the path where to start on obj ex: 'property1.array1.0' will start on element 0 of array1 a subproperty of property1


**VUEX USAGE:**

    import Vue from 'vue'
    import VueMerge from '@wtfcode/vue-merge'

    Vue.use(VueMerge) // without this Vue.merge will be undefined

    mutations:{
      MERGE_STATE: (state, { value, options }) => Vue.merge(state, value, options)
    }

**USAGE:**

    import Vue from 'vue'
    import VueMerge from '@wtfcode/vue-merge'

    Vue.use(VueMerge) // without this Vue.merge will be undefined

    obj = {
      property1: {
        array1: [
            {  
                type: 'keyVal',
                foo: 'bar',
                val: null,
                key: null
            },
            {
                type: 'keyNum',
                foo: null,
                num: null,
                key: 'one'
            }
        ],
        array2: ['a', 'b']
      }
    }

    value = {
        array1: {
            0:{
                val:'value',
                key:'zero'
            },
            1:{
                num: 20,
                foo: 'baz'
            }
        },
        array2: ['c', 'd']
    }

    Vue.merge(obj,value,{startAt: 'property1'})

    console.log('obj', obj) //will output:

    /*
    {
      property1: {
        array1: [
          {
            type: 'keyVal',
            foo: 'bar',
            val: 'value',
            key: 'zero'
          },
          {
            type: 'keyNum',
            foo: 'baz',
            num: 20,
            key: 'one'
          }
        ],
        array2: ['a', 'b', 'c', 'd']
      }
    }
    */
