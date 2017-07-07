import React from 'react'
import {
  AppRegistry,
  Text,
  View,
  Modal,
  TextInput,
  StyleSheet,
  tabBarIcon,
  Button,
  TouchableHighlight,
  tabBarLabel
} from 'react-native';
import { connect } from 'react-redux';
import { initData,getTree  } from '../actions'

class PlayScreen extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      treename: '',
      username: ''
    }
    this.changeUsername = this.changeUsername.bind(this);
    this.changeTreename = this.changeTreename.bind(this);
  }

  changeUsername(text) {
    this.setState({username:text})
  }

  changeTreename(text) {
    this.setState({treename:text})
  }

  render() {
    let header_user;
    header_user = typeof this.props.username !== 'undefined' ?
      <Text>{this.props.username}</Text> :
      <Text></Text>;

    return(
      <View>
        {header_user}
        <Text> Welcome </Text>
        <TextInput
          editable = {true}
          maxLength = {40}
          placeholder= 'Your name'
          onChangeText = {(text)=> {this.changeUsername(text)} }
        />
        <TextInput
          editable = {true}
          maxLength = {40}
          placeholder= 'Give your tree a name'
          onChangeText = {(text)=> {this.changeTreename(text)} }
        />
        <TouchableHighlight
          onPress = { () =>
            {
              alert('pressed');
              let data = {
                username: this.state.username,
                treename: this.state.treename
              }
              alert(data)
              this.props.initData(data);
              this.changeTreename('');
              this.changeUsername('');
            }
          }
          >
          <Text>Submit</Text>
        </TouchableHighlight>
      </View>
    )
  }

}
const mapDispatchToProps = (dispatch) => {
  return { initData: (data) => dispatch(initData(data)) }
}

const mapStateToProps = (state) => {
  alert(state.tree.username)
  return { tree: state.tree }
}


export default connect(mapStateToProps,mapDispatchToProps)(PlayScreen);
