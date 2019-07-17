import React from 'react';

const Card = (props) => {
    return (
        <div style={styles.containerStyle}>
            {props.children}
        </div>
    );
};


const styles = {
    containerStyle: {
        backgroundColor: '#d4dde2',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#fff',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 100,


    }
};
export { Card };