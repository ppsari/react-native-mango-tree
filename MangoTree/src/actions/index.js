/*action> index.js*/
const setData = (data) => { alert(JSON.stringify(data)); return {type:'INIT_DATA',payload:data} };
const getTree = () => ({type:'GET_TREE'});
const aging = () => ({type:'AGING'});
const harvest = () => ({type:'HARVEST'});

export {
  setData,
  getTree,
  aging,
  harvest
}
/*action> index.js*/
