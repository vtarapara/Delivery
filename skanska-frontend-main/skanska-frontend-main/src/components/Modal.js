import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Delivery from './Delivery';
import ConfirmButton from './ConfirmButton';
import db from '../utils/request';


const Modal = ( {delivery, open, setOpen, canEdit, events, setEvents} ) => {
  const [editMode, setEditMode] = useState(false);
  const [editedDelivery, setEditedDelivery] = useState({...delivery});
  useEffect(() => setEditedDelivery({...delivery}),[delivery]);

  const deleteDelivery = () => {
    db.post('delete', delivery);
    close();
    setEvents(events.filter(event => event.id !== delivery.id));
  }
  const updateDelivery = () => {
    db.update('delivery', editedDelivery);
    close();
    setEvents(events.map(event => event.id === delivery.id ? editedDelivery : event ));
  }
  const close = () => {
    setOpen(false);
    setEditMode(false);
  }
  const toggleEditMode = () => {
    setEditedDelivery(delivery);
    setEditMode(!editMode);
  }

  if (delivery === null) return null;
  return (
    <Popup modal nested open={open} onClose={close} >
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <Delivery delivery={editedDelivery} editMode={editMode} setDelivery={setEditedDelivery} />
        
        {canEdit ?
          !editMode ?
            <div className='actions'>
              <ConfirmButton 
                text='Delete Delivery' yesAction={deleteDelivery} noAction={close} 
                confirmText={'Are you sure you would like to delete delivery?'}
              />
              <button onClick={toggleEditMode}>Edit Delivery</button>
            </div> :
            <div className='actions'>
              <ConfirmButton 
                text='Save Changes' yesAction={updateDelivery} noAction={close} 
                confirmText={'Are you sure you would like to update delivery?'}
              />
              <button onClick={toggleEditMode}>Cancel</button>
            </div> :
          <div></div>
        }
      </div>
    </Popup>
  )
}

export default Modal;