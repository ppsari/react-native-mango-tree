/* reducers > treeR */
const initialState = {
  treename: '',
  username: '',
  fruit : { bad:0 , good:0 },
  age: 0,
  age_mature: 10,
  age_die:15,
  age_stop: 12,
  theight: 0,
  alive:true,
  harvested: 0
}



const treeR = (state = initialState, {type,payload}) => {
  switch (type) {
    case 'INIT_DATA':
      return {...state,
        treename: payload.treename,
        username: payload.username
      }
    case 'GET_TREE': return state;
    case 'AGING': {
      let nheight = state.theight ;
      let fruit = {
        bad: state.fruit.bad,
        good: state.fruit.good
      };
      let alive = state.alive
      let nage = state.age + 1 ;
      if (nage < age_die) {
        if (nage < age_stop) nheight +=  Math.floor(Math.random() * 100) + 1;
        if (nage >= age_mature) {
          fruit.bad += Math.floor(Math.random() * 100) + 0;
          fruit.good += Math.floor(Math.random() * 100) + 0;
        }
      } else alive = false

      return {
        ...state,
        age: nage,
        fruit: fruit,
        alive: alive,
        theight: nheight
      }
    }
    case 'HARVEST' :
      return {
        ...state,
        fruit: {bad:0,good:0},
        harvested: ( state.fruit.good + state.harvested )
      }

  }
  return state;
}

export default treeR;

/* reducers > treeR */