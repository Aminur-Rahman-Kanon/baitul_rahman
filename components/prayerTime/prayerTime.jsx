import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useEffect, useState } from 'react';

const api = 'https://www.londonprayertimes.com/api/times/?format=json&key=2a99f189-6e3b-4015-8fb8-ff277642561d&24hours=true';

const PrayerTime = () => {

    const [spinner, setSpinner] = useState(false);
    const [error, setError] = useState(false);
    const [prayerData, setPrayerData] = useState(null);

    useEffect(() => {
        setSpinner(true);

        fetch(api)
        .then(res => res.json())
        .then(data => {
            setSpinner(false);
            //filter data
            if (data){
                const filteredData = {};
                filteredData['fajr'] = {
                    id: 1,
                    start: data['fajr'],
                    jamat: data['fajr_jamat']
                }
                filteredData['dhuhr'] = {
                    id: 2,
                    start: data['dhuhr'],
                    jamat: data['dhuhr_jamat']
                }
                filteredData['asr'] = {
                    id: 3,
                    start: data['asr'],
                    jamat: data['asr_jamat']
                }
                filteredData['magrib'] = {
                    id: 4,
                    start: data['magrib'],
                    jamat: data['magrib_jamat']
                }
                filteredData['isha'] = {
                    id: 5,
                    start: data['isha'],
                    jamat: data['isha_jamat']
                }
                setPrayerData(filteredData);
            }
        })
        .catch(err => {
            setSpinner(false);
            setError(true);
        });
    }, [])

    const displayPrayerTimes = prayerData ? <View style={styles.secDisplay}>
        <View style={styles.header}>
            <Text style={styles.headingLargeWhite}>Prayer times</Text>
        </View>
        <View style={styles.table}>
            <View style={styles.row}>
                <View style={styles.column}>
                    <Text style={styles.text}>Prayer</Text>
                </View>
                <View style={styles.iconColumn}>
                    <Image source={require('../../assets/icons/clock.png')} style={styles.icon} />
                </View>
                <View style={styles.iconColumn}>
                    <Image source={require('../../assets/icons/pray.png')} style={styles.icon} />
                </View>
            </View>
            <View style={styles.prayerTable}>
                {Object.keys(prayerData).map(prayer => <View key={prayerData[prayer].id} style={styles.row}>
                    <View style={styles.column}>
                        <Text style={styles.text}>{prayer}</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.text}>{prayerData[prayer].start}</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.text}>{prayerData[prayer].jamat}</Text>
                    </View>
                </View>)}
            </View>
        </View>
    </View>
    :
    <View>
        <Text style={styles.text}>No data available</Text>
    </View>

    const mainDisplay = spinner ? <FontAwesomeIcon icon={faSpinner} style={styles.spinner} />
    :
    displayPrayerTimes

    return (
        <View style={styles.container}>
            {mainDisplay}
        </View>
    )
}

export default PrayerTime;

const styles = StyleSheet.create({
    container: {
        width: '95%',
        marginVertical: 50,
        padding: 10,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#202124'
    },
    secDisplay: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        width: '100%',
        display: 'flex',
        marginVertical: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headingLargeWhite: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
    },
    table: {
        width: '100%',
        minWidth: '300px',
        display: 'flex',
        marginVertical: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    prayerTable: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    row: {
        width: '100%',
        display: 'flex',
        padding: 10,
        gap: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: 'lightgray',
    },
    endRow: {
        width: '100%',
        display: 'flex',
        padding: 10,
        gap: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    column: {
        flex: 0.4,
        display: 'flex',
        flex: 0.3,
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconColumn: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 14,
        color: 'white',
        textTransform: 'capitalize'
    },
    icon: {
        width: 35,
        height: 35
    },
    spinner: {
        fontSize: 30,
        color: 'white'
    }
})



