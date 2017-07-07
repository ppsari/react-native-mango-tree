import React from 'react'
import {
  AppRegistry,
  Text,
  View,
  Modal,
  Image,
  StyleSheet,
  tabBarIcon,
  Button,
  TouchableHighlight,
  tabBarLabel
} from 'react-native';
import { connect } from 'react-redux';

import { getTree , aging,harvest } from '../actions'

class TreeScreen extends React.Component {
  constructor (props) {
    super(props);
  }
  componentDidMount() {
    this.props.getTree();

  }

  render() {
    let tree, fruit, canHarvest = false;

    if (typeof this.props.tree === 'undefined') {
      tree = <Text></Text>
      fruit = <Text></Text>

    }
    else{
      tree = <Text>This is {this.props.tree.treename}, he is {this.props.tree.age} year old</Text>
      fruit = <Text>({this.props.tree.harvested})</Text>
      canHarvest = this.props.tree.age >= this.props.tree.age_mature && this.props.alive === true ? true : false  
    }
    return(
      <View>
        <Text>{fruit}</Text>
        <Text> Ini Tree Screen </Text>
        <Text>{  tree} Pohon</Text>
        <TouchableHighlight
          onPress = { () =>
            {
              this.props.aging();
            }
          }
          >
          <Text>Emulate</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress = { () =>
            {
              this.props.harvest();
            }
          }
          disabled={canHarvest}
          >
          <Text>Harvest</Text>
        </TouchableHighlight>
      </View>
    )
  }

}

const mapDispatchToProps = (dispatch) => {
  alert('dispatched');
  return {
    getTree: () => dispatch(getTree()),
    aging: () => dispatch(aging()),
    harvest: () => dispatch(harvest())
   }
}

const mapStateToProps = (state) => {
  alert(state.tree)
  return { tree: state.tree }
}


export default connect(mapStateToProps,mapDispatchToProps)(TreeScreen);


// export default TreeScreen;