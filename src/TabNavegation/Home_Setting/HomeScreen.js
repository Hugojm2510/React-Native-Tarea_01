import { View, Text, Image, StyleSheet, TextInput, ImageBackground, Bott, Pressable } from 'react-native'
import React from 'react'

export function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
    <View style={styles.cabecera}>
      <Image 
        source ={{ uri:"https://s3-alpha-sig.figma.com/img/5cc2/326e/4b369d5d71efbfa1f6961ee2c182d04d?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jqBcbvjmFbefKzX-~lnGB6I2nxln9AnTFgw-URug80VEqH2HMq3jHIn7miU-waHyjymgvOrMlWz6oqm2iSydBQag3BibTE5rMdRK842E4TfPMSw8syvzY5znIAMApGLn1YnUet-UMdtv1T4u2JWYDJ5nSY6qwTgiTkJqdtMLtP1qKqKfAK8ZqyfyOrZy31k4limdhzjCxxxpbXWIFxDXqkxmBUHISZ1HtJkcizlQRyEOrYFxpFQRhgt-0Y5CbxW8n5Rtdu~xs-Ia6QrZdjssfp5Py272I7xGiBts7R1OCR7ODkUn47G6MZ8Hy0G0JMQX55II3LDEdKndGPnew~VguA__"}}
        style={{ width:71, height: 71}}
      />
      <View style={styles.cabeceraView}>
        <Text style={styles.textoCabecera}>Nick</Text>
        <Text style={styles.tituloCabecera}>VEDRUNA</Text>
      </View>
    </View>

    <View style={styles.body}>

      <Pressable onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.textoCabecera}>Volver</Text>
      </Pressable>

    </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#23272a',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30,
  },


  // cabecera
  cabecera: {
    flex: 0,                  // añadir flex
    flexDirection: 'row',
    gap: 10,
  },

  cabeceraView: {
  },

  textoCabecera: {
    color: '#ffff',
  },

  tituloCabecera: {
    color: '#ffff',
    fontSize: 55,
    fontWeight: 'bold',
    marginTop: '-10',
  },


  // body
  body: {
  
  },

});