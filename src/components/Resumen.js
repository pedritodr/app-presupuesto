import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../constants/styles'

const Resumen = ({ presupuesto, totalEgreso, showModalPresupuesto, setShowModalPresupuesto, showModalEgreso, setShowModalEgreso }) => {

    const formatMoney = (money) => {
        return '$ ' + parseFloat(money >= 0 && money)
    }

    const getDisponible = (valuePresupuesto, valueTotalEgreso) => {
        return parseFloat(parseFloat(valuePresupuesto) - parseFloat(valueTotalEgreso)).toFixed(2);
    }

    return (
        <View style={styles.resumenContainer}>
            <View style={styles.rowContainer}>
                <TouchableOpacity onPress={() => setShowModalPresupuesto(!showModalPresupuesto)}>
                    <Text style={styles.textPE}>Presupuesto</Text>
                    <Text style={[styles.textBold, { color: '#219ef3' }]}>{formatMoney(presupuesto)}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setShowModalEgreso(!showModalEgreso)}>
                    <Text style={styles.textPE}>Egreso</Text>
                    <Text style={[styles.textBold, { color: '#f0624d' }]}>{formatMoney(totalEgreso)}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.disponibleContainer}>
                <Text style={[styles.textBold, { color: 'gray' }]}>Disponible</Text>
                <Text style={[styles.textBold, { color: 'green' }]}>{formatMoney(getDisponible(presupuesto, totalEgreso))}</Text>
            </View>
        </View>
    )
}

export default Resumen