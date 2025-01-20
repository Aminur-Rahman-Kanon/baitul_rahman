import { View, StyleSheet, Image, Text } from 'react-native';

const Toppanel = () => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.column}>
                    <Image source={require('../../assets/icons/events.png')} style={styles.icon}/>
                    <Text style={styles.text}>upcoming events</Text>
                </View>
                <View style={styles.column}>
                    <Image source={require('../../assets/icons/services.png')} style={styles.icon}/>
                    <Text style={styles.text}>our services</Text>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.column}>
                    <Image source={require('../../assets/icons/donate.png')} style={styles.icon}/>
                    <Text style={styles.text}>donate</Text>
                </View>
                <View style={styles.column}>
                    <Image source={require('../../assets/icons/community.png')} style={styles.icon}/>
                    <Text style={styles.text}>community updates</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        marginVertical: 50,
        // padding: 10,
        // backgroundColor: '#202124',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15
    },
    row: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // gap: 20
    },
    column: {
        width: '48%',
        paddingVertical: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#202124',
        borderRadius: 10
    },
    icon: {
        width: 50,
        height: 50,
        margin: 10
    },
    text: {
        fontSize: 15,
        fontWeight: '500',
        color: 'white',
        textTransform: 'capitalize',
        margin: 10,
        textAlign: 'center'
    }
})

export default Toppanel;
