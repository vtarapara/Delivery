import { Tab, Tabs } from '@mui/material';

const Menu = ({ current, setCurrent, isAdmin }) => {
  const handleChange = (event, value) => {
    setCurrent(value);
  }
  return (
    <Tabs value={current} onChange={handleChange} variant="fullWidth">
      <Tab label="Delivery Calendar" value="calendar"  />
      <Tab label="Map" value="map" />
      <Tab label="Schedule Delivery" value="form"/>
      {isAdmin && <Tab label="Settings" value="settings"/>}
    </Tabs>
  )
}

export default Menu;