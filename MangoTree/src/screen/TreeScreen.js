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

import { getTree  } from '../actions'

class TreeScreen extends React.Component {
  constructor (props) {
    super(props);
  }
  componentDidMount() {
    // this.props.getTree();

  }

  render() {
    let tree = this.props;
    alert(JSON.stringify(tree) );
    return(
      <View>
        <Text> Ini Tree Screen </Text>
        <Text>{ typeof tree.tree === 'undefined' ? 'mana': tree.treename}</Text>
        <TouchableHighlight
          onPress = { () =>
            {
              alert('cari tree');
              this.props.getTree()
            }
          }
          >
          <Text>cari tree</Text>
        </TouchableHighlight>
      </View>
    )
  }

}

const mapDispatchToProps = (dispatch) => {
  alert('dispatched');
  return { getTree: () => dispatch(getTree()) }
}

const mapStateToProps = (state) => {
  alert(state.tree)
  return { tree: state.tree }
}


export default connect(mapStateToProps,mapDispatchToProps)(TreeScreen);


// export default TreeScreen;