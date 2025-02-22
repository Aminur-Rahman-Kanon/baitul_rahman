import { View, Image, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const Background = () => {

    const dimensions = Dimensions.get('window').width;
    
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/logo/bg.jpg')} style={styles.bg}/>
        </View>
    )
}

export default Background;

const styles = StyleSheet.create({
    container: {
        width: '95%',
        height: 300,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bg: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    }
})