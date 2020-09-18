import React, { Children, Component } from 'react';
import { Text } from 'react-native';

class BoldText extends Component {
    constructor(props){
        super(props)
    }
    
    render() { 
        return (
            <Text style={{fontWeight: "bold"}}>{this.props.children}</Text>
        );
    }
}
 
export default BoldText;