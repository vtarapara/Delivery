import {useEffect} from 'react';

const Delivery = ( {delivery, editMode, setDelivery} ) => {
  useEffect(() => {
    const start = new Date(delivery.start);
    const end = new Date(delivery.end);
    start.setHours(start.getHours()-4);
    end.setHours(end.getHours()-4);
    setDelivery({
      ...delivery,
      start: start.toISOString().substring(0, 23),
      end: end.toISOString().substring(0, 23),
    });
  }, [editMode]);
  const dateFormat = (date) => {
    const d = new Date(date);
    if (d.toString() === 'Invalid Date') return null;
    return d.toLocaleString('en-US', {dateStyle: 'medium', timeStyle: 'short'});
  }
  const handleChange = (field, value) => {
    setDelivery({
      ...delivery,
      [field]: value,
    });
  }
  if (!editMode) {
    return (
      <div>
        Start: {dateFormat(delivery.start) || 'N/A'} <br/>
        End: {dateFormat(delivery.end) || 'N/A'}<br/>
        Company: {delivery.company || 'N/A'}<br/>
        Description: {delivery.description || 'N/A'}<br/>
        Gate: {delivery.gate || 'N/A'}<br/>
        Contact Name: {delivery.contactName || 'N/A'}<br/>
        Contact Number: {delivery.contactNumber || 'N/A'}<br/>
        Location: {delivery.location || 'N/A'}<br/>
        Scheduler Name: {delivery.schedName || 'N/A'}<br/>
        Scheduler Number: {delivery.schedNumber || 'N/A'}<br/>
        Supplier: {delivery.supplier || 'N/A'}<br/>
        Hoist Method: {delivery.hoistMethod || 'N/A'}<br/>
        Number of Trucks: {delivery.trucks || 'N/A'}<br/>
        Extra Notes: {delivery.notes || 'N/A'}<br/>
      </div>
    );
  } else {
    return (
      <div>
        Start: <input type='datetime-local' value={delivery.start} onChange={x => handleChange('start', x.target.value)} /><br/>
        End: <input type='datetime-local' value={delivery.end} onChange={x => handleChange('end', x.target.value)} /><br/>
        Company: <input type='text' value={delivery.company} onChange={x => handleChange('company', x.target.value)} /><br/>
        Description: <input type='text' value={delivery.description} onChange={x => handleChange('description', x.target.value)} /><br/>
        Gate: <input type='number' value={delivery.gate} onChange={x => handleChange('gate', x.target.value)} /><br/>
        Contact Name: <input type='text' value={delivery.contactName} onChange={x => handleChange('contactName', x.target.value)} /><br/>
        Contact Number: <input type='tel' value={delivery.contactNumber} onChange={x => handleChange('contactNumber', x.target.value)} /><br/>
        Location: <input type='text' value={delivery.location} onChange={x => handleChange('location', x.target.value)} /><br/>
        Scheduler Name: <input type='text' value={delivery.schedName} onChange={x => handleChange('schedName', x.target.value)} /><br/>
        Scheduler Number: <input type='tel' value={delivery.schedNumber} onChange={x => handleChange('schedNumber', x.target.value)} /><br/>
        Supplier: <input type='text' value={delivery.supplier} onChange={x => handleChange('supplier', x.target.value)} /><br/>
        Hoist Method: <input type='text' value={delivery.hoistMethod} onChange={x => handleChange('hoistMethod', x.target.value)} /><br/>
        Number of Trucks: <input type='number' value={delivery.trucks} onChange={x => handleChange('trucks', x.target.value)} /><br/>
        Extra Notes: <input type='text' value={delivery.notes} onChange={x => handleChange('notes', x.target.value)} /><br/>
      </div>
      
    );
  }

}

export default Delivery;