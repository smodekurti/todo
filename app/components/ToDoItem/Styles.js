import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
    container: {
        flex:1,
    },
    list:{
       backgroundColor: '#485163',
       borderBottomColor: '#f1f2f6',
       marginBottom: 20
    },
    listItem:{
        marginTop: 20,
        marginBottom:20,
    },
    title:{
        color: 'white',
        textAlignVertical:'center'
        
    },
    titleComplete:{
        color: '#00b894',
        textDecorationLine: 'line-through',
        fontWeight:'900',
        textDecorationStyle:'solid',
        textDecorationColor:'#2d3436'
    }
})

export default Styles;