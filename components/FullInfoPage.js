import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, Pressable, Modal } from 'react-native';
import { gStyles } from '../styles/style'
import { AntDesign } from '@expo/vector-icons';

export default function FullInfo({ route }) {
    const [modalWindow, setModalWindow] = useState(false)
    return (
        <View style={gStyles.container}>
            <Modal visible={modalWindow}>
                <View style={gStyles.lesson}>
                    <View style={gStyles.hwView}>

                        <View style={gStyles.hwButtons}>
                            <AntDesign name="closecircleo" size={24} color="#fdfaf6" onPress={() => { setModalWindow(false) }} style={{ marginBottom: 20 }} />
                            <Text style={gStyles.hwTitle}> HOMEWORK</Text>
                        </View>
                        <View style={gStyles.hwAntBlock}>
                            <Text style={gStyles.hwAntText}>
                                Put your break to this song and work it out
                            </Text>
                        </View>
                        <View>
                            <Text style={gStyles.hwCaption}>
                                Next Try this out:
                            </Text>
                        </View>
                        <View style={gStyles.hwListSong}>
                            <View style={gStyles.hwCourse}>
                                <AntDesign style={gStyles.hwPlayBtn} name="playcircleo" size={28} color="#fdfaf6" />
                                <Text style={gStyles.hwActiveText}>
                                    Imaging Dragons: Believer
                                </Text>
                                <Image source={require('../assets/1.jpg')} style={gStyles.hwCircleImg} />
                                
                            </View>
                            <View style={gStyles.hwCourse}>
                                <AntDesign style={gStyles.hwPlayBtn} name="playcircleo" size={28} color="#fdfaf6" />
                                <Text style={gStyles.hwActiveText}>
                                    Imaging Dragons: Believer
                                </Text>
                                <Image source={require('../assets/1.jpg')} style={gStyles.hwCircleImg} />
                                
                            </View>
                            <View style={gStyles.hwCourse}>
                                <AntDesign style={gStyles.hwPlayBtn} name="playcircleo" size={28} color="#fdfaf6" />
                                <Text style={gStyles.hwActiveText}>
                                    Imaging Dragons: Believer
                                </Text>
                                <Image source={require('../assets/1.jpg')} style={gStyles.hwCircleImg} />
                                
                            </View>
                            
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={gStyles.hwCaption, gStyles.activeText, { textAlign: 'center' }}>THAT'S ALL</Text>
                        </View>
                    </View>

                </View>
            </Modal>
            <View style={gStyles.lesson}>
                <View style={gStyles.buttons}>
                    <Text style={gStyles.bigText}>{route.params.name}</Text>
                    <Text style={gStyles.activeText}>Lesson <Text style={gStyles.disabledText} onPress={() => { setModalWindow(true) }}>Homework</Text></Text>
                    <Pressable><Text style={gStyles.activeText}>Tempo: 60bpm</Text></Pressable>
                </View>
                <View style={gStyles.inlineButtons}>
                    <AntDesign style={gStyles.btn} name="banckward" size={24} color="#fdfaf6" />
                    <AntDesign style={gStyles.btn} name="playcircleo" size={28} color="#fdfaf6" />
                    <AntDesign style={gStyles.btn} name="forward" size={24} color="#fdfaf6" />
                </View>
                <View style={gStyles.sheetView}>
                    <Image style={gStyles.lessonImg} source={require('../assets/sheet.png')} />
                </View>

                <View style={gStyles.lessonContainer}>

                    <View style={gStyles.inlineButtons}>
                        <Pressable style={gStyles.freq}><Text style={gStyles.activeText}>1/4</Text></Pressable>
                        <Pressable style={gStyles.freq}><Text style={gStyles.activeText}>2/4</Text></Pressable>
                        <Pressable style={gStyles.freq}><Text style={gStyles.activeText}>3/4</Text></Pressable>
                        <Pressable style={gStyles.freq}><Text style={gStyles.activeText}>4/4</Text></Pressable>
                    </View>

                </View>


                {/* <Text style={gStyles.annons}>
                    School of Rock offers simple yet effective drum lessons for beginners that bypass entry-level pad training.
                    Students get behind a drum kit during their first lesson to start learning how to play the drums.
                    Through private drum lessons, group rehearsals, and live performances, students will learn introductory rudiments to drum fills and solos.
                    School of Rock has been teaching drum lessons to kids and adults for decades and we have given more drummers
                    a start in the business than any other music program in the world. Our core philosophy is that the best way for students to gain
                    musical proficiency is through the patented School of Rock Method and performance-based music education. All of our programs
                    (even the beginner drum programs for kids like Rookies and Rock 101) include a performance aspect.
                </Text> */}
            </View>


            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({

});
