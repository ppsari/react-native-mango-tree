/*action> index.js*/
const setData = (data) => dispatch => ({TYPE:'INIT_DATA'});
const getTree = () => dispatch => ({TYPE:'GET_TREE'});
const aging = treename => dispatch => ({TYPE:'AGING'});
const harvest = treename => dispatch => ({TYPE:'HARVEST'});

export {
  setData,
  getTree,
  aging,
  harvest
}
/*action> index.js*/
