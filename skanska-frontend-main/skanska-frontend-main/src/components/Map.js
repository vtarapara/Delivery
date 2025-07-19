import { useState, useEffect } from "react";
import db from '../utils/request'
const Map = () => {
  const style={
    display: 'block',
    margin: 'auto'
  }
  return <img src={`${db.url}/map`} alt="Site Map" width={'100%'} style={style}/>
}


export default Map;
