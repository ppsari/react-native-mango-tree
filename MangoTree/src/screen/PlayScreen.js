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
import { setData  } from '../actions'

class PlayScreen extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      treen: '',
      usern: ''
    }
    this.changeUsername = this.changeUsername.bind(this);
    this.changeTreename = this.changeTreename.bind(this);
  }

  changeUsername(user) {
    this.setState({usern:user})
  }

  changeTreename(tree) {
    this.setState({treen:tree})
  }

  componentDidMount() {
    // this.props.setData = this.props.setData.bind(this);
  }

  render() {
    return(
      <View>
        <Text> Welcome </Text>
        <TextInput
          editable = {true}
          maxLength = {40}
          placeholder= 'Your name'
          value={this.state.usern}
          onChangeText = {(text)=> {this.changeUsername(text)} }
        />
        <TextInput
          editable = {true}
          maxLength = {40}
          placeholder= 'Give your tree a name'
          value={this.state.treen}
          onChangeText = {(text)=> {this.changeTreename(text)} }
        />
        <TouchableHighlight
          onPress = { () => {
            alert('press')
            let data = {
              username: this.state.usern,
              treename: this.state.treen
            }
              this.props.setData(data)
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

  return { setData: (data) => {

    return dispatch(setData(data))} }
}

export default connect(null,mapDispatchToProps)(PlayScreen);
