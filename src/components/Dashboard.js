import { View, Text, Dimensions, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from '../constants/styles'
import { PieChart } from 'react-native-chart-kit';
import moment from 'moment';

const Dashboard = ({ presupuesto, egresos, totalEgreso }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData([
            {
                name: "Presupuesto",
                monto: presupuesto - totalEgreso,
                color: "#5b4193",
                legendFontColor: "#7F7F7F",
                legendFontSize: 15
            },
            {
                name: "Egresos",
                monto: totalEgreso,
                color: "#b54545",
                legendFontColor: "#7F7F7F",
                legendFontSize: 15
            },
        ]);
    }, [presupuesto, totalEgreso])


    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    };

    const screenWidth = Dimensions.get('window').width

    return (
        <View style={styles.dashboardContainer}>
            <View style={styles.rowContainer}>
                <Text style={[styles.textBold, { color: '#340061' }]}>Dashboard</Text>
            </View>
            <PieChart
                data={data}
                width={screenWidth}
                height={250}
                chartConfig={chartConfig}
                accessor={"monto"}
                backgroundColor={"transparent"}
                center={0}
            />
            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'gray' }}>DETALLE DE EGRESOS</Text>
            </View>
            <ScrollView>
                {
                    egresos && egresos.map((egreso, index) => (
                        <View key={index} style={styles.detalleContainer}>
                            <Text style={{ fontSize: 15 }}>{moment(egreso.fecha).format('MM/DD/YYYY')}</Text>
                            <Text style={{ fontSize: 15 }}>{egreso.detalle.toUpperCase()}</Text>
                            <Text style={{ fontSize: 15, color: '#34006a' }}>{'$ ' + egreso.monto}</Text>
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    )
}

export default Dashboard