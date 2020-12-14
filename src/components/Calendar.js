import React from "react";
import ReactLightCalendar from '@lls/react-light-calendar'
import '@lls/react-light-calendar/dist/index.css'

const DAY_LABELS = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']
const MONTH_LABELS = ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aûot', 'Septembre', 'Octobre', 'Novembre', 'Décembre']

class Calendar extends React.Component  {
    onDatesChange = ({ startDate, endDate }) => {
        console.log(({ startDate, endDate }));
    }
    render() {
        return (
            <LinkedCalendar onDatesChange={this.onDatesChange} showDropdowns={false} />
        );
    }
}

export default Calendar;