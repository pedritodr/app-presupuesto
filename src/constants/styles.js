import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#34006a",
    }, dashboardContainer: {
        flex: 2,
        padding: 20,
        backgroundColor: "white",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50
    },
    resumenContainer: {
        flex: 1,
        justifyContent: "space-evenly",
        marginHorizontal: 20
    }, rowContainer: {
        margin: 10,
        flexDirection: "row",
        justifyContent: "space-between",
    }, textPE: {
        fontSize: 20,
        color: "white"
    }, textBold: {
        fontWeight: "bold",
        fontSize: 30
    }, disponibleContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "white",
        height: 75,
        borderRadius: 50,
    }, modal: {
        width: 400,
        height: 400,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 50,
    }, textFields: {
        fontSize: 20,
        fontWeight: "bold",
    }, textInput: {
        minWidth: 200,
        borderWidth: 1,
        borderRadius: 20,
        margin: 20
    }, detalleContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginVertical: 5
    }
})

export default styles;