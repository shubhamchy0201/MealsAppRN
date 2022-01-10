import React , {useState ,useCallback  } from "react";
import {View , Text ,StyleSheet , TextInput, Button, Alert, Keyboard} from 'react-native';





const LoginScreen = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(false);


    const emailHandler = (email) => {

      if(!isEmailValid)
      {
       const emailCheck=email.trim().length> 0 && email.indexOf('@')>5 && email.lastIndexOf('.')>email.indexOf('@');
       if(emailCheck)
       {
         setIsEmailValid(true);
         setEmail(email);
       }
       else{
         setIsEmailValid(false);
       }
      }
            
      };

      const passwordHandler = (password) => {
        const lengthCheck=password.trim().length>6;
        if(lengthCheck)
        {
          setIsPasswordValid(true);
        }

        setPassword(password);
      };
      const resetInputHandler = () => {
        setEmail('');
        setPassword('');    
        setIsEmailValid(false);
        setIsPasswordValid(false);
      };

      const ValidateForm =() => {
          
        
       // console.log(email.indexOf('@'));
       // console.log(emailCheck);

  
       
        
          if(!(isEmailValid && isPasswordValid)){

            Alert.alert('Something is Wrong!', 'Please Enter Valid Email or Password!!.', [
                { text: 'Okay',onPress: resetInputHandler }
              ]);
             // console.log('in submit handler');
          }
          else
          {
            Alert.alert(
                'Please Confirm!',
                'Your Email :  '+email+'\nPassword: '+password,
                [{ text: 'Confirm', style: 'destructive', onPress: resetInputHandler }]
              );
          }

         
          Keyboard.dismiss();
      }

 return (
    <View style = {styles.container}>
    <TextInput style = {styles.input}
       placeholder = " Enter your Email"
       blurOnSubmit
       placeholderTextColor = "#9a73ef"
       keyboardType="email-address"
       onChangeText={emailHandler}
      //  value={email}
       returnKeyType='next'
       textContentType="emailAddress"
    />
     {!isEmailValid && <Text style={{color:'red', margin:8}}>Please Enter Valid Email</Text>}
    <TextInput style = {styles.input}
       placeholder = " Enter Password"
       placeholderTextColor = "#9a73ef"
       blurOnSubmit
       onChangeText={passwordHandler}
       //value={password}
       secureTextEntry={true}
       textContentType="password"
       />
       <View style={styles.buttonContainer} >
        <Button title="Login" onPress= {ValidateForm} />
        </View>
 </View>
 );
};

const styles= StyleSheet.create({
    container: {
        paddingTop: 23,
        marginTop:120,
        marginHorizontal:60,
        borderWidth:2,
        borderColor:'black',
        borderRadius:20
     },
     input: {
        margin: 15,
        height: 40,
        paddingHorizontal: 2,
        paddingVertical: 5,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
     },
     buttonContainer : {
         width:100,
         marginLeft:180,
         marginTop:20,
         padding:10
     }
    
});

export default LoginScreen;