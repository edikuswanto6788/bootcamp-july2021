import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import moment from "moment"



class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentMonth: moment().format("MMMM YYYY")
        }
    }

    generateCell = (content, idx) => {
        return (
            <View key={idx} style={styles.content}>
                <Text>{content}</Text>
            </View>
        )
    }

    generateDays = () => {
        const arrDay = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
        return (
            <View style={styles.rowContent}>
                {arrDay.map(this.generateCell)}
            </View>
        )
    }

    generateDate = () => {
        const lastDate = moment().endOf('month').format('D')
        const firstDay = parseInt(moment().startOf('month').format('E'))
        const arrDate = []

        let arrCell = []
        for (let emptyDate = 1; emptyDate <= firstDay; emptyDate++) {
            arrCell.push(this.generateCell("", emptyDate + 70))
        }

        for (let dt = 1; dt <= lastDate; dt++) {
            arrCell.push(this.generateCell(dt, dt + 100))

            if (((firstDay + dt) % 7 == 0) || (dt == lastDate)) {
                arrDate.push(
                    <View key={dt + 50} style={styles.rowContent}>
                        {arrCell}
                    </View>
                )
                arrCell = []
            }
        }

        return arrDate
    }

    render() {
        const {
            currentMonth
        } = this.state
        return (
            <View>
                <View style={styles.title}>
                    <Text>{currentMonth}</Text>
                </View>
                {this.generateDays()}
                {this.generateDate()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        paddingVertical: 10,
        paddingHorizontal: 15
    },
    rowContent: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    content: {
        width: 50,
        paddingVertical: 10,
        alignItems: "center",
        justifyContent: "center"
    }
})

export default Calendar;

/**
 * Tahun
 * Bulan
 * Tanggal (1-31)
 * Hari
 * Current Day
 * Hari Pertama
 * Tanggal Maksimal
 */