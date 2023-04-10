import './App.css';
import logo from "./images/logo 1 (1).png";
import playStore from "./images/Rectangle 37.png";
import appStore from "./images/app-store-icon-png-14 1.png";
import digitize from "./images/Group 63.png";
import track from "./images/Group 214.png";
import budget from "./images/Group 216.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='container d-flex align-items-center me-5'>
          <div className='mx-auto'>
          <img className='mt-2 w-50 h-50 img-fluid pointer' src={logo} alt='app-logo'/>
          <span className='text-blue ms-5 pointer'>Home</span>
          </div>
        <span className='text-blue ms-auto pointer'>
          +91 89715 80265
        </span>
        </div>
      </header>
      <main className='m-3'>
        <div className='row mt-5'>
            <div className='features col-5 mx-auto'>
              <h1 className='text-center mt-2'>Features</h1>
              <ul>
                <li className='d-flex align-items-center p-2 pointer'>
                    <img className='features-logo' src={digitize} alt='digitize'/>
                  <div className=''>
                    <h4 className='text-start'>
                      Digitize
                    </h4>
                    <p>A Bird eye view of the entire Biomedical Operations</p>
                  </div>
                </li>

                <li className='d-flex align-items-center p-2 pointer'>
                    <img className='features-logo' src={track} alt='track'/>
                  <div>
                    <h4 className='text-start'>
                      Track
                    </h4>
                    <p>Track the product life cycle and service history</p>
                  </div>
                </li>

                <li className='d-flex align-items-center p-2 pointer'>
                    <img className='features-logo' src={budget} alt='budget'/>
                  <div>
                    <h4 className='text-start'>
                      Biomedical Budget
                    </h4>
                    <p>Regulate and save budget through analysed data and informed</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className='signin col-5 mx-auto'>
              <h4 className='orange text-center mt-2'>Sign In</h4>
              <hr/>
              <form className='px-5 m-2'>
              <h4 className='text-blue'>Sign in to your account</h4>
              <label htmlFor='email'>Email Id</label><br/>
              <input className='form-control' type='email' placeholder='xxxxxxxxxx' name='email'/><br/>

              <label htmlFor='password'>Password</label><br/>
              <input className='form-control' type='text' placeholder='xxxxxxxxxx' name='password'/>

              <div className='forgot-password pointer'>Forgot Password</div><br/>
              <button className='btn w-100' style={{backgroundColor: "#004F95", color: "#FFFFFF"}}>Sign in</button>
              <div className='text-center my-2'>
              <span className='pointer mx-2'>New to Vajra?</span>
              <span className='orange pointer mx-2'>Sing Up Now</span>
              </div>
              </form>
            </div>
        </div>
        <div className='d-flex justify-content-center align-items-center p-5 '>
            <span className='text-blue pointer mx-5'>Download our App</span>
            <img className='mx-5 pointer' src={playStore} alt='playstore-logo'/>
            <img className='mx-5 pointer' src={appStore} alt='appstore-logo'/>
        </div>
      </main>
      <footer className='fixed-bottom'>
      <div className='d-flex justify-content-evenly align-items-center '>
          <img className='mt-2 pointer' src={logo} alt='app-logo'/>
          <span className='text-blue pointer'>© 2020 VIZI, All Rights Reserved</span>
          <div>
            <span className='pointer text-blue'>Terms and Conditions</span>
            <span>|</span>
            <span className='pointer text-blue'>FAQs</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
