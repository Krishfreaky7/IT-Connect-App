import React from 'react';
import {View, FlatList, TouchableOpacity, Text} from 'react-native'

const Newfile5 = (props) => {
    return(
        <View>
        <FlatList scrollEnabled={true} nestedScrollEnabled={true} data={props.data}   renderItem={({ item, index }) => {
            return (
                <TouchableOpacity onPress={() => {
                    props.setDropValue5(item.name);
                    props.setisClicked5(false);
                }} style={props.styles.boardingItem}>
                    <Text style={{color: "#BEBEBE"}}>{item.name}</Text>
                </TouchableOpacity>
            )
        }} />
        </View>

    )
}

export default Newfile5;