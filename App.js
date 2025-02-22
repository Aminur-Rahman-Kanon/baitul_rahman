import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Topbar from './components/topbar/topbar';
import PrayerTime from './components/prayerTime/prayerTime';
import Background from './components/background/background';
import Toppanel from './components/topPanel/topPanel';
import Sidedrawer from './components/sidedrawer/sidedrawer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from './redux/reducer';

export default function App() {

  const store = createStore(reducer);

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} stickyHeaderIndices={[0]} contentContainerStyle={styles.scrollView}>
          <Sidedrawer />
          <Topbar />
          <Background />
          <PrayerTime />
          <Toppanel />
        </ScrollView>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  main: {
    width: '100%'
  },
  scrollView: {
    position: 'relative',
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
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
