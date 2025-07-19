import Calendar from './Calendar';
import Map from './Map';
import Form from './Form';
import Config from './Config';

const Modes = ({ mode, isAdmin }) => {
  if (mode === 'calendar') {
    return (
      <div className="u-custom-html-1" style={{marginBottom: 40}}>
        <Calendar canEdit={isAdmin} />
      </div>
    )
  } else if (mode === 'map') {
    return (
      <div className="u-custom-html-1" style={{marginBottom: 40}}>
        <Map />
      </div>
    )
  } else if (mode === 'form') {
    return (
      <div className="u-custom-html-1" style={{marginBottom: 40}}>
        <Form />
      </div>
    )
  } else if (mode === 'settings') {
    return (
    <div className="u-custom-html-1" style={{marginBottom: 40}}>
      <Config />
    </div>
    )
  } else {
    return (<h1>error</h1>)
  }
}

export default Modes;