import { View, Image, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const Background = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/bg/bg_1.png')} style={styles.bg}/>
        </View>
    )
}

export default Background;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexGrow: 'none',
        flexShrink: 'none',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bg: {
        width: 300,
        height: 300,
    }
})