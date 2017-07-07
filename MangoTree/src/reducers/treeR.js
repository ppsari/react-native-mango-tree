/* reducers > treeR */
let initialState = {
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



const treeR = (state = initialState, action) => {
  // alert('masuk reducer oy --- lagi');
  switch (action.type) {
    case 'INIT_DATA':

      // alert(JSON.stringify(action.payload.treename) )
      return {...state,
        treename: action.payload.treename,
        username: action.payload.username
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
      if (nage < state.age_die) {
        if (nage < state.age_stop) nheight +=  Math.floor(Math.random() * 100) + 1;
        if (nage >= state.age_mature) {
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
    default : alert('mampusR')
  }
  return state;
}

export default treeR;

/* reducers > treeR */