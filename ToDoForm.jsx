// ToDoForm.jsx
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

function ToDoForm({ addTask }) {
const [taskText, setTaskText] = useState('');

const handleSubmit = () => {
    addTask(taskText);
    setTaskText('');
};

return (
    <View>
    <TextInput
        placeholder="Add a new task..."
        value={taskText}
        onChangeText={setTaskText}
    />
    <Button title="Add Task" onPress={handleSubmit} />
    </View>
);
}

export default ToDoForm;
