import React from 'react'
import { View, Text,TouchableOpacity} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { increCounter, decreCounter } from './redux/action'


const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector(data => data.counter);
    return(  
        
        <View style={{
            flex:1, 
            alignItems:'center', 
            justifyContent:'center', 
            flexDirection:'column'
            backgroundColor: "grey"
            }}>
            
            <Text style={{
                fontSize:50, 
                marginLeft:20, 
                marginRight:20
                }}>{counter}
                </Text>
            <TouchableOpacity style={{
                backgroundColor:'skyblue', 
                paddingBottom:5, 
                paddingLeft:25, 
                paddingTop:5, 
                paddingRight:25
                }} onPress={()=>dispatch(increCounter(counter))}>
                <Text style={{fontSize:25}}>Increment</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{
                backgroundColor:'skyblue', 
                paddingBottom:5, 
                paddingLeft:16, 
                paddingTop:5, 
                paddingRight:25
                }} onPress={()=>dispatch(decreCounter(counter))}> 
                <Text style={{fontSize:25}}>Decrement</Text>
            </TouchableOpacity>
        </View>
    ) 
}

export default Counter t4nunbb
