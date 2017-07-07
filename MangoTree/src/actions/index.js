/*action> index.js*/
const initData = (treename,username) => dispatch => ({TYPE:'INIT_DATA'})
const getTree = treename => dispatch => ({TYPE:'GET_TREE'});
const aging = treename => dispatch => ({TYPE:'AGING'});
const harvest = treename => dispatch => ({TYPE:'HARVEST'});

export {
  initData,
  getTree,
  aging,
  harvest
}
/*action> index.js*/
