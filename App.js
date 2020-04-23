import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
 
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  
  
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  console.log('Re-rendering component');
  console.log(courseGoals);

  const addGoalHandler = goalTitle => {
    if(goalTitle.length === 0) {
      return;
    }
    setCourseGoals(currentGoals => [...courseGoals, 
      {id: Math.random().toString(), value: goalTitle }
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {
    console.log('To Be Delete : '+ goalId);
    console.log(courseGoals);
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId );
    });
    
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  }


  return (
    <View style={{ flex: 1 }}>
      <View style={{marginTop: 50}}>
        <Button title="Add new Goal" onPress={() => setIsAddMode(true)}/>
      </View>
      <GoalInput 
        visible={isAddMode} 
        onAddGoal={addGoalHandler} 
        onCancel={cancelGoalAdditionHandler}
      />
      
      <View style={{flex: 8,flexDirection: "column",borderWidth: 1,borderColor: "green",}}>
        <FlatList 
          keyExtractor={(item, index) => item.id}
          data={courseGoals} 
          renderItem={itemData => 
            <GoalItem 
              id={itemData.item.id}
              onDelete={removeGoalHandler}
              title={itemData.item.value} 
            />
          } 
        />
      </View> 

    </View>
  );
}
