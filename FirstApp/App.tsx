import { SafeAreaView, Text, StyleSheet,  } from 'react-native'
import React, { useEffect, useState } from 'react'



const App = () => {

  const [message, setMessage] = useState("Fetching From Api");

  useEffect(()=> {
    fetch('http://10.0.2.2:4000/hello')
    .then((res)=> res.json())
    .then((data)=> setMessage(data.message))
    .catch(()=> setMessage('Failed to fetch'));
  }, [])



  return (
    <SafeAreaView style={styles.container}>
    {/* Heading */}
      <Text style={styles.heading}>Welcome to My React Native App</Text>
      <Text style={styles.para}>This React Native app fetches data from a Node.js backend and displays it below.</Text>

    {/* API Response Message */}
      <Text style={styles.msg}>{message}</Text>
     </SafeAreaView>
 
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    margin : 10
     
  },
  msg:{
    marginTop: 8,
    fontSize : 27,
    fontWeight : 'semibold',
    textAlign: 'center'
  },
  heading:{
   fontSize: 24,
   fontWeight: 'bold',
   color: '#333',
   marginBottom: 5,
   textAlign : 'center',
  },
  para:{
   fontSize: 15,
   textAlign: 'center',  

  }
  
})

export default App

