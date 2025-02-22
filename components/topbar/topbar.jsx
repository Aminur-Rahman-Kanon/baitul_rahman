import { ScrollView, StyleSheet, View, Image, Dimensions, Button } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { actions } from '../../redux/actions';

const Topbar = ({ toggleSidedrawer }) => {

    const dimenstions = Dimensions.get('window').width;

    return (
        <ScrollView contentContainerStyle={{ width: dimenstions }} horizontal>
            <View style={styles.container}>
                <View style={styles.left}>
                    <Image source={require('../../assets/images/logo/logo_small.png')} style={styles.logo}/>
                </View>
                <Button title={
                    <FontAwesomeIcon style={styles.icon} icon={faBars} />
                } color={'#ffffff00'} onPress={toggleSidedrawer}>
                </Button>
            </View>
        </ScrollView>
    )
}

const mapStateToProps = state => {
    return {
        sidedrawer: state.sidedrawer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleSidedrawer: () => dispatch({type: actions.TOGGLE_SIDEDRAWER })
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Topbar);


const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#b3bbd385',
        zIndex: 1
    },
    left: {
        width: 50,
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
    right: {
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