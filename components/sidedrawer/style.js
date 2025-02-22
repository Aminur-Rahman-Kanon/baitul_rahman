import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Styles = StyleSheet.create({
    main: {
        transform: [{ translateX: '-150%' }]
    },
    open: {
        transform: [{ translateX: '0%' }]

    },
    container: {
        width: width,
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        transform: [{ translateX: '-150%' }]
    },
    open: {
        width: width,
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        transform: [{ translateX: '-50%' }]
    },
    scrollView: {
        width: '100%',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    wrapper: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 10,
        paddingVertical: 20,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: 20
    },
    top: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    logoContainer: {
        width: 100,
        height: 100
    },
    logo: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
    xBtnContainer: {
        width: 40,
        height: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    xBtn: {
        width: '100%',
        height: '100%',
        color: 'rgb(45, 45, 45)'
    },
    nav: {
        width: '100%',
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: 30
    },
    navItem: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 10
    },
    navIcon: {
        width: 30,
        height: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        width: '100%',
        height: '100%',
        color: 'rgb(45, 45, 45)'
    },
    text: {
        fontSize: 30,
        color: 'rgb(45, 45, 45)',
        fontFamily: 'Raleway-Regular'
    }
})

export default Styles;
