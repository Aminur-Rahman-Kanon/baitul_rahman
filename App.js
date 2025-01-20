import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Topbar from './components/topbar/topbar';
import PrayerTime from './components/prayerTime/prayerTime';
import Background from './components/background/background';
import Toppanel from './components/topPanel/topPanel';

export default function App() {
  return (
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} stickyHeaderIndices={[0]} contentContainerStyle={styles.scrollView} style={styles.main}>
          <Topbar />
          <Background />
          <PrayerTime />
          <Toppanel />
        </ScrollView>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    width: '100%'
  },
  scrollView: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    width: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
