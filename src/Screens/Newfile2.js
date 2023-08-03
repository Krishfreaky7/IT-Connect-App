import React from 'react';
import {View, FlatList, TouchableOpacity, Text} from 'react-native'

const Newfile2 = (props) => {
    return(
        <View>
        <FlatList scrollEnabled={true} nestedScrollEnabled={true} data={props.data}   renderItem={({ item, index }) => {
            return (
                <TouchableOpacity onPress={() => {
                    props.setDropValue2(item.name);
                    props.setisClicked2(false);
                }} style={props.styles.boardingItem}>
                    <Text style={{color: "#BEBEBE"}}>{item.name}</Text>
                </TouchableOpacity>
            )
        }} />
        </View>

    )
}

export default Newfile2;