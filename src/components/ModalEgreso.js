import { View, Text, Modal, TextInput, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import styles from '../constants/styles'

const ModalEgreso = ({ showModalEgreso, setShowModalEgreso, setEgreso, presupuesto, totalEgreso }) => {


    const initialState = {
        fecha: '',
        detalle: '',
        monto: 0
    }

    const [form, setForm] = useState(initialState);

    const handleChange = (name, value) => {

        setForm({
            ...form,
            [name]: value
        })
    }

    const addValidate = (totalEgreso, monto) => parseFloat(parseFloat(totalEgreso) + parseFloat(monto)).toFixed(2)

    const submit = () => {
        if (form.detalle !== '' && form.monto > 0) {
            if (parseFloat(presupuesto) < addValidate(totalEgreso, form.monto)) {
                Alert.alert(
                    'Error',
                    'El presupuesto no puede ser menor al total de egresos'
                )
            } else {
                setEgreso({
                    fecha: new Date(),
                    detalle: form.detalle,
                    monto: form.monto
                });
                setShowModalEgreso(!showModalEgreso);
                setForm(initialState)
            }
        } else {
            Alert.alert(
                'Error',
                'Debe ingresar el detalle y el monto'
            )
        }
    }


    return (
        <Modal visible={showModalEgreso} transparent={true}>
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <View style={styles.modal}>
                    <Text style={styles.textFields}>INGRESA EGRESO</Text>
                    <TextInput onChangeText={(value) => handleChange('detalle', value)} placeholder='Detalle del gasto' style={styles.textInput} />
                    <TextInput onChangeText={(value) => handleChange('monto', value)} placeholder='$ 0.00' style={styles.textInput} keyboardType={'numeric'} />
                    <View style={styles.rowContainer}>
                        <Button onPress={() => submit()} title='Ingresar' />
                        <Button color={'red'} onPress={() => setShowModalEgreso(!showModalEgreso)} title='Cancelar' />
                    </View>
                </View>
            </View>
        </Modal >
    )

}

export default ModalEgreso