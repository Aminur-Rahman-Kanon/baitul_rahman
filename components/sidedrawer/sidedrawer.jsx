import { ScrollView, View, Image, Button, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faX, faCalendar, faPhone, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import Styles from './style';
import { connect } from 'react-redux';
import { actions } from '../../redux/actions';

const Sidedrawer = ({ sidedrawer, toggleSidedrawer }) => {
    console.log(sidedrawer)
    return (
        <View style={ sidedrawer ? Styles.open : Styles.container}>
            <ScrollView horizontal contentContainerStyle={Styles.scrollView}>
                <View style={Styles.wrapper}>
                    <View style={Styles.top}>
                        <View style={Styles.logoContainer}>
                            <Image source={require('../../assets/images/logo/logo_small.png')} style={Styles.logo} />
                        </View>
                        <Button title={
                            <FontAwesomeIcon icon={faX} style={Styles.xBtn}/>
                        } onPress={toggleSidedrawer} color={'white'}>
                        </Button>
                    </View>
                    <View style={Styles.nav}>
                        <View style={Styles.navItem}>
                            <View style={Styles.navIcon}>
                                <FontAwesomeIcon icon={faHome} style={Styles.icon}/>
                            </View>
                            <Text style={Styles.text}>Home</Text>
                        </View>
                        <View style={Styles.navItem}>
                            <View style={Styles.navIcon}>
                                <FontAwesomeIcon icon={faCalendar} style={Styles.icon}/>
                            </View>
                            <Text style={Styles.text}>Events</Text>
                        </View>
                        <View style={Styles.navItem}>
                            <View style={Styles.navIcon}>
                                <FontAwesomeIcon icon={faPhone} style={Styles.icon}/>
                            </View>
                            <Text style={Styles.text}>Contact</Text>
                        </View>
                        <View style={Styles.navItem}>
                            <View style={Styles.navIcon}>
                                <FontAwesomeIcon icon={faBookOpen} style={Styles.icon}/>
                            </View>
                            <Text style={Styles.text}>About</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        sidedrawer: state.sidedrawer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleSidedrawer: () => dispatch({ type: actions.TOGGLE_SIDEDRAWER })
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Sidedrawer);