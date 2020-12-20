import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col,
  InputGroup,
  DatePicker,
  InputGroupAddon,
  InputGroupText, Button } from "shards-react";
  import classNames from "classnames";


import PageTitle from "../components/PageTitle";
import SmallStats from "../components/SmallStats";
import MediamStats from "../components/MediamStats";
import UsersOverview from "../components/UsersOverview";
import CustomerExperienceTrend from "../components/CustomerExperienceTrend";
import UsersByDevice from "../components/UsersByDevice";
import CustomerSatisfactionScore from "../components/CustomerSatisfactionScore";
import NPSScore from "../components/NPSScore";
import getDashboardData from '../hooks/getDashboardData';
import RangeDatePicker from "../components/RangeDatePicker";
import DateTimePicker from 'react-datetime-picker';
import "../assets/range-date-picker.css";
import ResponseChart from "../components/ResponseChart";
import ReliabilityChart from "../components/ReliabilityChart";
import AvailabilityChart from "../components/AvailabilityChart";
import SpellChecker from "simple-spellchecker"

const { ipcRenderer , electron} = window.require("electron")
const MySpellChecker = ({ smallStats , custStats , polarChartData}) => {
const [activityByAction, experience, reliability, availability,response] = getDashboardData();
const [value, onChange] = useState(new Date());
const { className } =  React.useState(0);
const myDictionary = React.useState('');
const classes = classNames(className, "d-flex", "my-auto", "date-range");
const onRefresh = useCallback(async () => {
 window.location.reload(false);

  }, [activityByAction, experience, reliability, availability,response]);
  SpellChecker.getDictionary("fr-FR", function(err, dictionary) {
      if(!err) {
          var misspelled = ! dictionary.spellCheck('maisonn');
          if(misspelled) {
              var suggestions = dictionary.getSuggestions('maisonn');
          }
      }
  });
  SpellChecker.getDictionary("en-US", "../node_modules/simple-spellchecker/dict", function(err, result) {
      if(!err) {
          myDictionary = result;
      }
  });
  // Define function for consult the dictionary.
  electron.ipcMain.on('checkspell', function(event, word) {
      var res = null;
      if(myDictionary != null && word != null) {
          res = myDictionary.spellCheck(word);
      }
      event.returnValue = res;
  });
return(
electron.webFrame.setSpellCheckProvider("en-US", false, {
    spellCheck: function(text) {
        var res = ipcRenderer.sendSync('checkspell', text);
        return res != null? res : true;
    }
})
);
}

MySpellChecker.propTypes = {
  /**
   * The small stats dataset.
   */
  smallStats: PropTypes.array,
  polarChartData : { msg: [], osY: [] }
};

MySpellChecker.defaultProps = {

   polarChartData: {
        msg: ['id1','id2','id3'],
        osY: [40,50.30]
  },
  smallStats: [
    /*{
      label: "Reliability",
      value: "98%",
      percentage: "4.7%",
      type: 'line',
      increase: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "6", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor:  "#6970d5",
          borderColor: "#fff",
          data: [1, 2, 1, 3, 5, 4, 7]
        }
      ]
    },
    {
      label: "Availability",
      type: 'line',
      value: "100%",
      percentage: "12.4",
      increase: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "6", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: '#56d798',
          borderColor: "#fff",
          data: [1, 2, 3, 3, 3, 4, 4]
        }
      ]
    },
    {
      label: "Response",
      value: "2.34 S",
      percentage: "3.8%",
      increase: false,
      decrease: true,
      type: 'line',
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "4", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "#f38b4a",
          borderColor: "rgb(255,180,30)",
          data: [2, 3, 3, 3, 4, 3, 3]
        }
      ]
    }*/
  ],
    custStats: [
      {
        label: "Net Promoter Score",
        type: 'polarArea',
        value: "100%",
        percentage: "12.4",
        increase: true,
        chartLabels: ["Promoters", "Passives", "Detractors"],
        attrs: { md: "6", sm: "6" },
        datasets: [
          {
            label: "Today",
            fill: "start",
            borderWidth: 1.5,
            backgroundColor: 'orange',
            borderColor: "rgb(23,30,113)",
            data: [1, 2, 3]
          }
        ]
      }
    ]
};

export default MySpellChecker;

