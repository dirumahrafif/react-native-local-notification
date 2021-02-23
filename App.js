import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import {notifikasi} from './src/Notifikasi'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  klikTombol=()=>{
    notifikasi.configure();
    notifikasi.buatChannel("1");
    notifikasi.kirimNotifikasiJadwal("1","Programming di Rumahrafif","Terima kasih sudah subscribe");
  }
  render() {
    return (
      <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
        <Button
          title="Klik Notifikasi"
          onPress={this.klikTombol}
        />
      </View>
    );
  }
}

export default App;
