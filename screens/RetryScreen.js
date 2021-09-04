import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';




function RetryScreen() {
    return (
        <View style={styles.container}>
            <Text>Check your internet connectivity</Text>
        </View>
    );
}

export default RetryScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
