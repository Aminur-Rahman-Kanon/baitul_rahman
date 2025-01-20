import { SafeAreaView, StyleSheet, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars, faBell, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Topbar = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style = {styles.iconContainer}>
                <FontAwesomeIcon style={styles.icon} icon={faBars} />
            </View>
            <View style={styles.rightPanel}>
                <View style={styles.iconContainer}>
                    <FontAwesomeIcon style={styles.icon} icon={faEnvelope} />
                </View>
                <View style={styles.iconContainer}>
                    <FontAwesomeIcon style={styles.icon} icon={faBell} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Topbar;


const styles = StyleSheet.create({
    container: {
        // position: ,
        // top: 0,
        // left: 0,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#20212485',
        zIndex: 1
    },
    rightPanel: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconContainer: {
        width: 50,
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        fontSize: 20,
        color: 'white'
    }
})