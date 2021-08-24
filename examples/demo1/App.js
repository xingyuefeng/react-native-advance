import React, {useEffect} from 'react';
import {SafeAreaView, Text} from 'react-native';
// import calendarmanaager from 'calendarmanaager';
import add from 'add';

const App = () => {
  useEffect(() => {
    // console.log(CalendarManager);
    // CalendarManager.addEvent('Birthday Party', '4 Privet Drive, Surrey');
  }, []);

  return (
    <SafeAreaView>
      <Text>{add(1, 2, 1, 1)}</Text>
    </SafeAreaView>
  );
};

export default App;
