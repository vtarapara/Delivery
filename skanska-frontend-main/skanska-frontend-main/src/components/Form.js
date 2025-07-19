import { useState, useEffect } from 'react';
import db from '../utils/request';
import '../styles/form.css';
import { toTimeString, toMinutes } from '../utils/time';

const Form = () => {
  const [delivery, setDelivery] = useState({});
  const [date, setDate] = useState('');
  const [times, setTimes] = useState({});
  useEffect(() => {
    db.get('time').then(x => setTimes(x.data));
  }, []);
  const weekdays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const handleChange = (data, field) => {
    setDelivery({
      ...delivery,
      [field]: data
    });
  }
  const style = {
    textAlign: 'center',
    margin: 'auto',
  }
  const submitForm = (event) => {
    event.preventDefault();
    for (const field in delivery) {
      if (delivery[field] === '') delivery[field] = null;
    }
    if (toMinutes(delivery.start) > toMinutes(delivery.end)) {
      alert('end time must be after start time');
      window.scrollTo(0, 0);
      return;
    }
    const day = weekdays[new Date(date).getUTCDay()];
    if (!times[day].active) {
      alert(`Deliveries cannot be scheduled on ${day}s`);
      window.scrollTo(0, 0);
      return;
    }
    if (toMinutes(delivery.start) < times[day].start || toMinutes(delivery.end) > times[day].end) {
      alert(`Deliveries on ${day}s must be between ${toTimeString(times[day].start)} and ${toTimeString(times[day].end)}.`);
      window.scrollTo(0, 0);
      return;
    }
    const d = {
      ...delivery,
      start: new Date(date + ' ' + delivery.start),
      end: new Date(date + ' ' + delivery.end)
    };
    db.post('delivery', d).then(() => {
      setDelivery({});
      alert('Your delivery has been saved.');
    });
    setDelivery({});
    window.scrollTo(0, 0);
  }
  return (
    <form onSubmit={submitForm} style={style} >
      <h2>Required Fields</h2>
      <table style={style}>
        <tbody>
          <tr>
            <td>Date:</td>
            <td><input type='date' value={date} onChange={x => setDate(x.target.value)} required /></td>
          </tr> 
          <tr>
            <td> Start Time:</td>
            <td><input type='time' value={delivery.start || ''} onChange={x => handleChange(x.target.value, 'start')} required /></td>
          </tr>
          <tr>
            <td>End Time:</td>
            <td><input type='time' value={delivery.end || ''} onChange={x => handleChange(x.target.value, 'end')} required /></td>
          </tr>
          <tr>
            <td>Company:</td>
            <td><input type='text' value={delivery.company || ''} onChange={x => handleChange(x.target.value, 'company')} required /></td>
          </tr>
          <tr>
            <td>Description:</td>
            <td><textarea value={delivery.description || ''} onChange={x => handleChange(x.target.value, 'description')} required /></td>
          </tr>
          <tr>
            <td>Gate:</td>
            <td><input type='number' value={delivery.gate || ''} onChange={x => handleChange(x.target.value, 'gate')} required /></td>
          </tr>
          <tr>
            <td>Contact Name:</td>
            <td><input type='text' value={delivery.contactName || ''} onChange={x => handleChange(x.target.value, 'contactName')} required /></td>
          </tr>
          <tr>
            <td>Contact Number</td>
            <td><input type='tel' value={delivery.contactNumber || ''} onChange={x => handleChange(x.target.value, 'contactNumber')} required /></td>
          </tr>
          <tr>
            <td>Location:</td>
            <td><input type='text' value={delivery.location || ''} onChange={x => handleChange(x.target.value, 'location')} required /></td>
          </tr>
        </tbody>
      </table>
      <h2>Optional Fields</h2>
      <table style={style}>
        <tbody>
          <tr>
            <td>Scheduler Name:</td>
            <td><input type='text' value={delivery.schedName || ''} onChange={x => handleChange(x.target.value, 'schedName')} /></td>
          </tr>
          <tr>
            <td>Scheduler Number:</td>
            <td><input type='tel' value={delivery.schedNumber || ''} onChange={x => handleChange(x.target.value, 'schedNumber')} /></td>
          </tr>
          <tr>
            <td>Supplier:</td>
            <td><input type='text' value={delivery.supplier || ''} onChange={x => handleChange(x.target.value, 'supplier')} /></td>
          </tr>
          <tr>
            <td>Hoist Method:</td>
            <td><input type='text' value={delivery.hoistMethod || ''} onChange={x => handleChange(x.target.value, 'hoistMethod')} /></td>
          </tr>
          <tr>
            <td>Number of Trucks:</td>
            <td><input type='number' value={delivery.trucks || ''} onChange={x => handleChange(x.target.value, 'trucks')} /></td>
          </tr>
          <tr>
            <td>Extra Notes</td>
            <td><textarea value={delivery.notes || ''} onChange={x => handleChange(x.target.value, 'notes')} /></td>
          </tr>
        </tbody>
      </table>
      <input type="submit" value="Submit Delivery" />
    </form>
  )
}
export default Form;