import Popup from 'reactjs-popup'

const ConfirmButton = ({ text, yesAction, noAction, confirmText }) => {
  return (
    <Popup
      trigger={<button className="button">{text}</button>}
      position="top center"
      nested
    >
      <span>
        {confirmText}
        <button onClick={yesAction}>yes</button>
        <button onClick={noAction}>no</button>
      </span>
    </Popup>
  )
}

export default ConfirmButton;