import React, { useState} from 'react';
import { View, Text, StyleSheet, Button, TextInput, Modal} from 'react-native';

const GoalInput = props => {

    const [enteredGoal, setEnteredGoal] = useState(''); 

    const goalInputHandler = (enterText) => {
        setEnteredGoal(enterText);
    };

    const addGoalHandler = () => {
      props.onAddGoal(enteredGoal);
      setEnteredGoal('');
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
            <View style={{flexDirection:'row', justifyContent:'space-around',width:'60%'}}>
                <View style={{padding:10}}>
                  <Button 
                    title="CANCEL" color="red"
                    onPress={props.onCancel}
                  />
                </View>
                <View style={{padding:10}}>
                  <Button 
                    title="ADD"
                    onPress={addGoalHandler}
                  />
                </View>
            </View>
          </View>
        </Modal>
    );
};

export default GoalInput;