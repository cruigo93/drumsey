import React from 'react';
import HomePage from './components/HomePage'
import FullInfo from './components/FullInfoPage'
import LoginPage from './components/LoginPage'

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function Navigate() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={LoginPage}
                options={{
                    title: "Login page",
                    headerStyle: { backgroundColor: "#121013", height: 100 },
                    headerTitleStyle: { fontWeight: 'bold', color: "#eb596e" }
                }}
            />
            <Stack.Screen
                name="HomePage"
                component={HomePage}
                options={{
                    title: "Lesson list",
                    headerStyle: { backgroundColor: "#121013", height: 100 },
                    headerTitleStyle: { fontWeight: 'bold', color: "#eb596e" }
                }}
            />
            <Stack.Screen
                name="FullInfo"
                component={FullInfo}
                options={{
                    title: "4th Lesson",
                    headerStyle: { backgroundColor: "#121013", height: 100 },
                    headerTitleStyle: { fontWeight: 'bold', color: "#eb596e" }
                }}
            />
        </Stack.Navigator>
    </NavigationContainer>;
}