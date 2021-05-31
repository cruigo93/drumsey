import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native';
// import {} from 'react-native-e'
import { gStyles } from '../styles/style'
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function LoginPage({ navigation }) {

    return (
        <View style={styles.main}>
            <View style={gStyles.loginForm}>
                <View style={gStyles.searchSection}>
                    <Ionicons name="person" size={24} color="black" style={gStyles.loginLabel} />
                    <TextInput placeholder="Login" style={gStyles.loginInput} />
                </View>

                <View style={gStyles.searchSection}>
                <Entypo name="lock" size={24} color="black"  style={gStyles.loginLabel} />
                    <TextInput placeholder="Password" style={gStyles.loginInput} />
                </View>
            </View>

            <View style={styles.buttonSection}>
                <Pressable style={styles.freq} onPress={() => navigation.navigate('HomePage')}>
                    <Text style={gStyles.activeText}>Login</Text>
                </Pressable>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        padding: 20,
        paddingTop: 120,
        paddingBottom: 120,
        flex: 1,
        backgroundColor: '#121013',
    },
    freq: {
        // flex: 1,
        backgroundColor: '#eb596e',
        borderRadius: 6,
        alignItems: 'center',
        paddingTop: 5,
        paddingBottom: 5,
        fontSize: 22,
        color: '#fdfaf6',
        margin: 5
    },
    buttonSection: {
        flex: 1
    }
});
