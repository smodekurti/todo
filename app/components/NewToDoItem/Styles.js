import{StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
    container:{
        flexDirection: 'row',           
        marginTop:80,
        justifyContent: 'center',
        alignItems:'center'
        
    },
    input:{
        height:50,
        width:'70%',
        backgroundColor: 'rgba(255,255,255,0.3)',
        marginBottom:15,
        paddingHorizontal:10,
        fontSize:24,
        color: 'white',
        borderRadius:5
        

    },
    buttonContainer:{
        height:50,
        width:80,
        backgroundColor: '#3498db',
        alignItems:'center',
        justifyContent: 'center',        
        marginLeft:15,
        marginBottom:15,
        borderRadius:5
        
    },
    text:{
       fontSize:16,
       fontWeight: '700',
       color : 'white',
       textAlign: 'center',
       
    }

}
)

export default Styles;