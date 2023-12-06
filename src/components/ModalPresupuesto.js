import { View, Text, Modal, TextInput, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import styles from '../constants/styles'

const ModalPresupuesto = ({ showModalPresupuesto, setShowModalPresupuesto, setPresupuesto }) => {

    const [nuevoPresupuesto, setNuevoPresupuesto] = useState(0)

    const submit = () => {
        if (nuevoPresupuesto > 0) {
            setPresupuesto(nuevoPresupuesto)
            setShowModalPresupuesto(!showModalPresupuesto)
            setNuevoPresupuesto(0)
        } else {
            Alert.alert('Error', 'Monto invalido')
        }

    }

    return (
        <Modal visible={showModalPresupuesto} transparent={true}>
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <View style={styles.modal}>
                    <Text style={styles.textFields}>INGRESA PRESUPUESTO</Text>
                    <TextInput onChangeText={(value) => setNuevoPresupuesto(value)} placeholder='$ 0.00' style={styles.textInput} keyboardType={'numeric'} />
                    <View style={styles.rowContainer}>
                        <Button onPress={() => submit()} title='Ingresar' />
                        <Button color={'red'} onPress={() => setShowModalPresupuesto(!showModalPresupuesto)} title='Cancelar' />
                    </View>
                </View>

            </View>
        </Modal>
    )
}

export default ModalPresupuesto