import React, { useContext, useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import styles from '../constants/styles'
import Dashboard from '../components/Dashboard'
import Resumen from '../components/Resumen'
import PresupuestoContext from '../context/presupuesto/PresupuestoContext'
import ModalPresupuesto from '../components/ModalPresupuesto'
import ModalEgreso from '../components/ModalEgreso'

const PresupuestoScreem = () => {

    const { presupuesto, egresos, setPresupuesto, setEgreso } = useContext(PresupuestoContext);

    const [totalEgreso, setTotalEgreso] = useState(0);
    const [showModalPresupuesto, setShowModalPresupuesto] = useState(false)
    const [showModalEgreso, setShowModalEgreso] = useState(false)

    useEffect(() => {
        let totalTemp = 0;

        egresos.map((egreso) => {
            totalTemp += parseFloat(egreso.monto);
        });
        setTotalEgreso(totalTemp);
    }, [egresos]);

    return (
        <View style={styles.container}>
            <ModalEgreso showModalEgreso={showModalEgreso} setShowModalEgreso={setShowModalEgreso} setEgreso={setEgreso} totalEgreso={totalEgreso} presupuesto={presupuesto} />
            <ModalPresupuesto showModalPresupuesto={showModalPresupuesto} setShowModalPresupuesto={setShowModalPresupuesto} setPresupuesto={setPresupuesto} />
            <Resumen presupuesto={presupuesto} totalEgreso={totalEgreso} showModalPresupuesto={showModalPresupuesto} setShowModalPresupuesto={setShowModalPresupuesto} showModalEgreso={showModalEgreso} setShowModalEgreso={setShowModalEgreso} />
            <Dashboard presupuesto={presupuesto} egresos={egresos} totalEgreso={totalEgreso} />
        </View>
    )
}

export default PresupuestoScreem