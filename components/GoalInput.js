import React, { useState} from 'react';
import { View, Text, StyleSheet, Button, TextInput, Modal} from 'react-native';

const GoalInput = props => {

    const [enteredGoal, setEnteredGoal] = useState(''); 

    const goalInputHandler = (enterText) => {
        setEnteredGoal(enterText);
    };

    return (
        <Modal visible={props.visible} animationType="slide">
          <View style={{flex: 1,flexDirection: "column",justifyContent: "center",alignItems: "center",}}>
            <View style={{width:'90%',}}>
              <TextInput
                style={{
                    borderColor: "black",
                    justifyContent: "center",
                    borderWidth: 1,
                    
                }}
                placeholder="Input Goal"
                onChangeText={goalInputHandler}
                value={enteredGoal}
                
              />
            </View>
            <View style={{}}>
              <Button 
                title="CANCEL" color="red"
              />
              <Button 
                title="ADD"
                onPress={props.onAddGoal.bind(this, enteredGoal)}
              ></Button>
            </View>
          </View>
        </Modal>
    );
};

export default GoalInput;