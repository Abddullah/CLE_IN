import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../utilities/constants';

const RadioButton = ({ options, onSelect }) => {
    const [selected, setSelected] = useState(null);

    const handleSelect = (value) => {
        setSelected(value);
        onSelect(value);
    };

    return (
        <View>
            {
                options.map((option, index) => (
                    <TouchableOpacity
                        activeOpacity={.8}
                        key={index}
                        style={styles.radioButtonContainer}
                        onPress={() => handleSelect(option.value)}
                    >
                        <View style={styles.radioButton}>
                            {selected === option.value && <View style={styles.radioButtonSelected} />}
                        </View>
                        <Text style={styles.radioButtonLabel}>{option.label}</Text>
                    </TouchableOpacity>
                ))
            }
        </View>
    );
};

const styles = StyleSheet.create({
    radioButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 10
    },
    radioButton: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: colors.Primary_01,
        alignItems: 'center',
        justifyContent: 'center',
    },
    radioButtonSelected: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: colors.Primary_01,
    },
    radioButtonLabel: {
        marginLeft: 10,
        fontSize: 16,
        color: colors.black
    },
});

export default RadioButton;
