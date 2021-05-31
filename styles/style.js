import { StyleSheet } from 'react-native';

export const gStyles = StyleSheet.create({
    main: {
        backgroundColor: '#121013',
        padding: 20,
        paddingTop: 30,
        height: '100%'

    },
    course: {
        flex: 1,
        backgroundColor: '#eb596e',
        margin: 10,
        padding: 10,
        borderRadius: 6,

    },
    imgBig: {
        // width: '100%',
        // height: 200,
        flex: 1,
        borderRadius: 6,
    },
    title: {
        fontSize: 22,
        color: "#fdfaf6"
    },
    annons: {
        color: "#fdfaf6",
        fontSize: 14
    },
    bigText: {
        fontSize: 52,
        color: "#eb596e"
    },
    lesson: {
        flex: 1,
        padding: 15,
        backgroundColor: '#121013',
    },
    activeText: {
        color: "#fdfaf6",
        fontSize: 20
    },
    disabledText: {
        color: "#5a5858",
        fontSize: 20
    },
    buttons: {
        // flexDirection: 'row',
        flex: 2
    },
    lessonImg: {
        flex: 1,
        width: '100%',
        margin: 10
        // height: 200
    },
    metronome: {
        padding: 5
    },
    freq: {
        flex: 1,
        backgroundColor: '#eb596e',
        borderRadius: 6,
        // alignContent: 'center',
        alignItems: 'center',
        paddingTop: 5,
        paddingBottom: 5,
        fontSize: 22,
        // fontFamily: 'rb-bold',
        color: '#fdfaf6',
        margin: 5
    },
    container: {
        flex: 1,
        backgroundColor: '#121013',
        padding: 15,
        paddingTop: 20,
        // height: '100%'
    },
    imgView: {
        flex: 2
    },
    lessonContainer: {
        padding: 0,
        flex: 1
    },
    inlineButtons: {
        flex: 1,
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center'
    },
    sheetView: {
        flex: 2,
        // width: '100%',
        padding: 0
    },
    btn: {
        margin: 10,
        flex: 1,
        alignItems: 'center',
        padding: 25
    },
    hwTitle: {
        color: '#eb596e',
        fontSize: 32,
    },
    hwView: {
        flex: 1,
        backgroundColor: '#121013',
        padding: 15,
        paddingTop: 20,
    },
    hwListSong: {
        flex: 3
    },
    hwButtons: {
        flex: 2
    },
    hwCaption: {
        fontSize: 32,
        color: '#eb596e',
        textAlign: 'center',
    },
    hwCourse: {
        flex: 1,
        backgroundColor: '#eb596e',
        margin: 10,
        padding: 10,
        borderRadius: 6,
        flexDirection: 'row'
    },
    hwActiveText: {
        color: "#fdfaf6",
        fontSize: 18,
        flex: 4
    },
    hwPlayBtn: {
        flex: 1,
        alignContent: 'center',
        textAlignVertical: 'center'
    },
    hwAntBlock: {
        backgroundColor: 'white',
        borderRadius: 6,
        alignContent: 'center',
        alignItems: 'center',
        padding: 25,
        flex: 1
    },
    hwAntText: {
        color: '#121013',
        fontSize: 28
    },
    hwCircleImg: {
        flex: 1,
        borderRadius: 50,
        height: 50
    },
    loginForm: {
        flex: 1,
        padding: 20,
        flexDirection: "column"
    },
    searchSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#121013',
        padding: 20,
        paddingTop: 30,
        height: '100%'
    },
    loginLabel: {
        flex: 1,
        padding: 10,
        color: '#eb596e'
    },
    loginInput: {
        flex: 8,
        height: 50,
        backgroundColor: '#fff',
        color: '#424242',
        padding: 10,
        borderRadius: 6
    }
});