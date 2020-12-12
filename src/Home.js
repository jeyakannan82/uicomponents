import React, { useState, useEffect, useCallback } from "react";
import styled from 'styled-components';
import Dashboard from "./view/Dashboard";
import { Container, Row, Col } from 'react-bootstrap';
import getDashboardData from './hooks/getDashboardData';

const Home = (props) => {
const [npsScore, satisfactionScore, errMessage] = useState(0);
const onRefresh = useCallback(async () => {
    await Promise.all([
      npsScore(),
      satisfactionScore(),
    ]);
  }, [npsScore, satisfactionScore]);

  return(
   <div className={'aztech-container'}>
  <Dashboard npsScore={npsScore} satisfaction={satisfactionScore} />
  </div>);

};


export default Home;