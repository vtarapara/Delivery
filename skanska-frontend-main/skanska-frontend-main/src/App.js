import { useState, useEffect } from 'react';
import Modes from './components/Modes'
import Menu from './components/Menu'
import Login from './components/Login';
import db from './utils/request';
import './styles/App.css'
import './styles/nicepage.css';

const App = () => {
  const [admin, setAdmin] = useState(false);
  const [mode, setMode] = useState('calendar');
  const [number, setNumber] = useState('');
  useEffect(() => {
    db.get('phone').then(x => setNumber(x.data));
  }, []);
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta name="keywords" content="" />
      <meta name="description" content="" />
      <meta name="page_type" content="np-template-header-footer-from-plugin" />
      <title>SKANSKA Delivery Scheduling</title>
      <meta name="generator" content="Nicepage 4.4.3, nicepage.com"/>
      <link id="u-theme-google-font" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i|Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i"/>
      <link id="u-page-google-font" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Alegreya+Sans+SC:100,100i,300,300i,400,400i,500,500i,700,700i,800,800i,900,900i|Alegreya+Sans:100,100i,300,300i,400,400i,500,500i,700,700i,800,800i,900,900i"/>
      <meta name="theme-color" content="#478ac9" />
      <meta property="og:title" content="SKANSKA Delivery Scheduling" />
      <meta property="og:description" content="" />
      <meta property="og:type" content="website" />
      <div className="u-clearfix u-gradient u-header" id="sec-4f0a">
        <div className="u-clearfix u-sheet u-sheet-1" >
          <a
            href="/"
            className="u-image u-logo u-image-1"
            data-image-width={1030}
            data-image-height={352}
          >
            <img
              src="https://www.architecturecincy.org/wp-content/uploads/2021/08/Skanska-logo-1.png"
              className="u-logo-image-1"
            />
          </a>
          <div className='horizontal'>
            <h3 className="u-text u-text-custom-color-1 u-text-1 title">
              {!admin && <a href="/">Delivery Scheduling Application</a>}
              {admin && <a href="/">Delivery Scheduling Application Admin</a>}
              {!admin && <Login setAdmin={setAdmin}/>} 
			  
            </h3>
              <h3 className="u-text-custom-color-1"> Text 'Help' to {number} to Access Calendar. </h3>
			  	

          </div>
          
          <div className="vertical body" >
            <Menu current={mode} setCurrent={setMode} isAdmin={admin}/>
            <Modes mode={mode} isAdmin={admin} />
          </div>
        </div>
      </div>
      <footer
        className="u-align-center u-clearfix u-footer u-grey-80 u-footer"
        id="sec-8e9f"
      >
        <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
          <p className="u-small-text u-text u-text-variant u-text-1">
            Product Created For SKANKA by Duke University Students: Delali Cudjoe,
            Will Denton, Ken Kalin, Vivek Tarapara, and Desmond Decker.
          </p>
        </div>
      </footer>
      <section className="u-backlink u-clearfix u-grey-80">
        <a
          className="u-link"
          href="https://nicepage.com/website-templates"
          target="_blank"
        >
          <span>Website Templates</span>
        </a>
        <p className="u-text">
          <span> created with </span>
        </p>
        <a className="u-link" href="" target="_blank">
          <span>Website Builder Software</span>
        </a>
        .
      </section>
    </>

  )
}

export default App;