import React from 'react';


const Input = ({label, value,onChangeText,placeholder,secureTextEntry}) => {

    return (
        <div style ={styles.containerStyle}>
            {/* <Text style ={styles.labelStyle}>{label}</Text> */}
            <Input
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            autoCorrect={false}
            style={styles.inputStyle}
            value={value}
            onChangeText={onChangeText}
           
            
            />
        </div>

    );

};

const styles={
inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 1
    

},
labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
    color: '#6d9cb8'

},
containerStyle: {
    height:50,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#6d9cb8',
    borderRadius: 15,
    // padding: 5,
    borderWidth: 2
}
};
export {Input};