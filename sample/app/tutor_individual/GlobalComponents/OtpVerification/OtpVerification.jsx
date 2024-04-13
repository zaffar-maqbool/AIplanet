"use client"
import React, { useState } from "react";

import "./styles/OtpVerification.css";
import CInput from "../Input/CInput/CInput";
import BackButton from "../Buttons/BackButton/BackButton";
import StepOTPButton from "../Buttons/SendOTPButton/SendOtpButton";
import { useRouter } from 'next/navigation'
import OTPInput from "../Input/OtpInput/OtpInput";
import NumberVerifiedPopup from '../Popups/BoostrapModals/NumberVerified/NumberVerified'

//api
import Axios from "../../../Axios/Axios";

const Otpverification = () => {
    const router = useRouter()
    const [send, setSend] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const [number, setMobileNumber] = useState("");
    const [otpValues, setOtpValues] = useState(['', '', '', '']);

    const SendMobileNumber = () =>{
        Axios.post(`/api/otpverify/sendotp/${number}`)
            .then(response => {
                
                console.log('POST request successful:', response.data);
            })
            .catch(error => {
                console.error('Error making POST request:', error);
            });
            setSend(true);
    }
    const SendOtp = () =>{
        console.log("send Opt called")
        Axios.post(`/api/otpverify/verifyotp/${number}/${otpValues}`)
            .then(response => {
                if(response.status === 200){
                    setModalShow(true);
                  }
            })
            .catch(error => {
                setShowAlert(true)
                console.error('Error making POST request:', error);
            });
        
    }
    // showing users alert message if OTP is INVALID

    const [showAlert, setShowAlert] = useState(false);
    
    return (
        <div className="verifypage">
            <div>
                <svg width="171" height="153" viewBox="0 0 171 153" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M68.3359 6.83301H13.6693C9.91094 6.83301 6.83594 9.90801 6.83594 13.6663V54.6663C6.83594 58.4247 9.91094 61.4997 13.6693 61.4997H61.5026L75.1693 75.1663V13.6663C75.1693 9.90801 72.0943 6.83301 68.3359 6.83301ZM68.3359 58.7663L64.2359 54.6663H13.6693V13.6663H68.3359V58.7663Z" fill="#6764FF" />
                    <path opacity="0.7" d="M29.153 41.14C27.8463 41.14 26.6463 40.8333 25.553 40.22C24.4596 39.6067 23.593 38.76 22.953 37.68C22.313 36.5867 21.993 35.3533 21.993 33.98C21.993 32.62 22.313 31.4 22.953 30.32C23.593 29.2267 24.4596 28.3733 25.553 27.76C26.6463 27.1467 27.8463 26.84 29.153 26.84C30.473 26.84 31.673 27.1467 32.753 27.76C33.8463 28.3733 34.7063 29.2267 35.333 30.32C35.973 31.4 36.293 32.62 36.293 33.98C36.293 35.3533 35.973 36.5867 35.333 37.68C34.7063 38.76 33.8463 39.6067 32.753 40.22C31.6596 40.8333 30.4596 41.14 29.153 41.14ZM29.153 38.64C29.993 38.64 30.733 38.4533 31.373 38.08C32.013 37.6933 32.513 37.1467 32.873 36.44C33.233 35.7333 33.413 34.9133 33.413 33.98C33.413 33.0467 33.233 32.2333 32.873 31.54C32.513 30.8333 32.013 30.2933 31.373 29.92C30.733 29.5467 29.993 29.36 29.153 29.36C28.313 29.36 27.5663 29.5467 26.913 29.92C26.273 30.2933 25.773 30.8333 25.413 31.54C25.053 32.2333 24.873 33.0467 24.873 33.98C24.873 34.9133 25.053 35.7333 25.413 36.44C25.773 37.1467 26.273 37.6933 26.913 38.08C27.5663 38.4533 28.313 38.64 29.153 38.64ZM47.8761 27.04V29.3H44.1561V41H41.3561V29.3H37.6361V27.04H47.8761ZM60.0991 31.36C60.0991 32.1067 59.9191 32.8067 59.5591 33.46C59.2124 34.1133 58.6591 34.64 57.8991 35.04C57.1524 35.44 56.2057 35.64 55.0591 35.64H52.7191V41H49.9191V27.04H55.0591C56.1391 27.04 57.0591 27.2267 57.8191 27.6C58.5791 27.9733 59.1457 28.4867 59.5191 29.14C59.9057 29.7933 60.0991 30.5333 60.0991 31.36ZM54.9391 33.38C55.7124 33.38 56.2857 33.2067 56.6591 32.86C57.0324 32.5 57.2191 32 57.2191 31.36C57.2191 30 56.4591 29.32 54.9391 29.32H52.7191V33.38H54.9391Z" fill="#6764FF" />
                    <path d="M131.336 45.667H94.0026C90.9084 45.667 87.9409 46.8962 85.753 49.0841C83.5651 51.272 82.3359 54.2395 82.3359 57.3337V136.667C82.3359 139.761 83.5651 142.729 85.753 144.917C87.9409 147.104 90.9084 148.334 94.0026 148.334H131.336C134.43 148.334 137.398 147.104 139.586 144.917C141.773 142.729 143.003 139.761 143.003 136.667V57.3337C143.003 54.2395 141.773 51.272 139.586 49.0841C137.398 46.8962 134.43 45.667 131.336 45.667ZM112.669 143.667C108.796 143.667 105.669 140.54 105.669 136.667C105.669 132.794 108.796 129.667 112.669 129.667C116.543 129.667 119.669 132.794 119.669 136.667C119.669 140.54 116.543 143.667 112.669 143.667ZM133.669 125H91.6693V59.667H133.669V125Z" fill="#6764FF" />
                </svg>
            </div>
            <div>
                Verify your Email
            </div>

            <div className="verify_description">
                {/* { !send ?
                <p>Verifying your number will give  access to more features on Rablo. Click the button to send a verification OTP"</p>
                : */}
                <p>
                Verifying your email will give  access to more features on <br/> Rablo. A one time password has been sent to your email 
                </p>
                {/* } */}
            </div>
            <div>
            {
            // (!send)?<CInput number={number} setMobileNumber={setMobileNumber}/>:
            <OTPInput otpValues={otpValues} setOtpValues={setOtpValues} showAlert={showAlert} setShowAlert={setShowAlert}/>
            }
                
            </div>

            <div>
                <div>
                    { send
                    ?
                    <button className="Back_button" onClick={(() => setSend(false))}>
                        <span style={{
                            marginBottom:"2px",
                            marginRight: "5px"
                        }}>
                            <svg width="6" height="14" viewBox="0 0 6 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.33533 13.4258C5.03184 13.8298 4.42561 13.8298 4.12212 13.4258L1.31122 9.68383C0.168821 8.16303 0.168821 6.0703 1.31122 4.5495L4.12212 0.807537C4.42561 0.403514 5.03184 0.403514 5.33533 0.807536V0.807536C5.53811 1.07748 5.53811 1.44894 5.33533 1.71888L3.47912 4.18994C2.17671 5.92375 2.17671 8.30958 3.47912 10.0434L5.33533 12.5145C5.53811 12.7844 5.53811 13.1559 5.33533 13.4258V13.4258Z" fill="#6764FF" />
                            </svg>
                        </span> 
                        Back
                    </button>
                    :
                    <BackButton/>
                    }
                </div>
                <div>
                {/* <StepOTPButton 
                number={number} 
                otpValues={otpValues}
                SendMobileNumber={SendMobileNumber}
                SendOtp ={SendOtp}
                text={(!send) ? "Step OTP >" : "Verify >"} 
                buttonKey = {(!send) ? "StepOTP" : "Verify"}
                /> */}
                <StepOTPButton 
                    otpValues={otpValues}
                    SendOtp={SendOtp} 
                />
                </div>
            </div>
            <NumberVerifiedPopup
            show={modalShow}
            onHide={() => setModalShow(false)}
            setModalShow={setModalShow}
          />
        </div>
    );
}

export default Otpverification;