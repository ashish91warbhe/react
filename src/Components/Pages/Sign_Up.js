import React, { useState } from "react";
import { FormControl, Input, InputLabel } from '@mui/material';
import Button from '@mui/material/Button';



const Sign_Up = () => {

    //constant of the elements

    const [pharmacyName, setPharmacyName] = useState("");
    const [pharmacyNameErr, setPharmacyNameErr] = useState(false);
    const [owner, setOwner] = useState("");
    const [ownerErr, setOwnerErr] = useState(false);
    const [licence, setLicence] = useState("");
    const [licenceErr, setLicenceErr] = useState(false);
    // const [value, setValue] = useState();
    // const [valueErr, setValueErr] = useState(false);
    const [addressOfPharmacy, setAddressOfPharmacy] = useState("");
    const [addressOfPharmacyErr, setAddressOfPharmacyErr] = useState(false);
    const [state, setState] = useState("");
    const [stateErr, setStateErr] = useState(false);
    const [pin, setPin] = useState("");
    const [pinErr, setPinErr] = useState(false);
    const [email, setEmail] = useState("");
    const [emailErr, setEmailErr] = useState(false);
    const [primaryNo, setPrimaryNo] = useState("");
    const [primaryNoErr, setPrimaryNoErr] = useState(false);
    const [secondaryNo, setSecondaryNo] = useState("");
    const [secondaryNoErr, setSecondaryNoErr] = useState(false);
    const [username, setUsername] = useState("");
    const [usernameErr, setUsernameErr] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordErr, setPasswordErr] = useState(false);
    const [confirmPass, setConfirmPass] = useState("");
    const [confirmPassErr, setConfirmPassErr] = useState(false);


    // form submit
    function signUpHandler(e) {
        if ((pharmacyName === " " || pharmacyName === undefined || pharmacyName.length < 1)
            && (owner === " " || owner === undefined || owner.length < 1)
            && (licence === " " || licence === undefined || licence.length < 1)
            // && (value !== 'Wholesellr' || 'Retailer')
            && (addressOfPharmacy === " " || addressOfPharmacy === undefined || addressOfPharmacy.length < 1)
            && (state === " " || state === undefined || state.length < 1)
            && (pin === " " || pin === undefined || pin.length < 1)
            && (email === " " || email === undefined || email.length < 1)
            && (primaryNo === " " || primaryNo === undefined || primaryNo.length < 1)
            && (secondaryNo === " " || secondaryNo === undefined || secondaryNo.length < 1)
            && (username === " " || username === undefined || username.length < 1)
            && (password === " " || password === undefined || password.length < 1)
            && (confirmPass === " " || confirmPass === undefined || confirmPass.length < 1)) {
            setPharmacyNameErr(true);
            setOwnerErr(true);
            setLicenceErr(true);
            // setValue(true);
            // setValueErr(true);
            setAddressOfPharmacyErr(true);
            setStateErr(true);
            setPinErr(true);
            setEmailErr(true);
            setPrimaryNoErr(true);
            setSecondaryNoErr(true);
            setUsernameErr(true);
            setPasswordErr(true);
            setConfirmPassErr(true);
        }
        e.preventDefault();
    };
    function resetHandler(e) {
        setPharmacyNameErr(false);
        setPharmacyName('');
        setOwnerErr(false);
        setOwner('');
        setLicenceErr(false);
        setLicence('');
        // setValueErr(false);
        // setValue('');
        setAddressOfPharmacyErr(false);
        setAddressOfPharmacy('');
        setStateErr(false);
        setState('');
        setPinErr(false);
        setPin('');
        setEmailErr(false);
        setEmail('');
        setPrimaryNoErr(false);
        setPrimaryNo('');
        setSecondaryNoErr(false);
        setSecondaryNo('');
        setUsernameErr(false);
        setUsername('');
        setPasswordErr(false);
        setPassword('');
        setConfirmPassErr(false);
        setConfirmPass('');
        e.preventDefault();
    };

    function PharmacyHandler(e) {
        let item = e.target.value;
        if (pharmacyName === " " || pharmacyName === undefined || pharmacyName.length < 1) {
            setPharmacyNameErr(true);
        } else {
            setPharmacyNameErr(false);
        }
        setPharmacyName(item);
    };

    function ownerHandler(e) {
        let item = e.target.value;
        if (owner === " " || owner === undefined || owner.length < 1) {
            setOwnerErr(true);
        } else {
            setOwnerErr(false);
        }
        setOwner(item);
    };


    function licenceHandler(e) {
        let item = e.target.value;
        if (licence === " " || licence === undefined || licence.length < 1) {
            setLicenceErr(true);
        } else {
            setLicenceErr(false);
        }
        setLicence(item);
    };

    // function radioChange(e) {
    //     let item = e.target.value;
    //     alert(item)
    //     if (value === 'Wholeseller' || 'Retailer') {
    //         setValueErr(false);
    //     } else {
    //         setValueErr(true);
    //     }
    //     setValue(item);
    // };

    function addHandler(e) {
        let item = e.target.value;
        if (addressOfPharmacy === " " || addressOfPharmacy === undefined || addressOfPharmacy.length < 1) {
            setAddressOfPharmacyErr(true);
        } else {
            setAddressOfPharmacyErr(false);
        }
        setAddressOfPharmacy(item);
    };


    function stateHandler(e) {
        let item = e.target.value;
        if (state === " " || state === undefined || state.length < 1) {
            setStateErr(true);
        } else {
            setStateErr(false);
        }
        setState(item);
    };

    function pinHandler(e) {
        let item = e.target.value;
        if (pin === " " || pin === undefined || pin.length < 1) {
            setPinErr(true);
        } else {
            setPinErr(false);
        }
        setPin(item);
    };

    function emailHandler(e) {
        let item = e.target.value;
        if (email === " " || email === undefined || email.length < 1) {
            setEmailErr(true);
        } else {
            setEmailErr(false);
        }
        setEmail(item);
    };

    function priNoHandler(e) {
        let item = e.target.value;
        if (primaryNo === " " || primaryNo === undefined || primaryNo.length < 1) {

            setPrimaryNoErr(true);
        } else {
            setPrimaryNoErr(false);
        }
        setPrimaryNo(item);
    };

    function secNoHandler(e) {
        let item = e.target.value;
        if (secondaryNo === " " || secondaryNo === undefined || secondaryNo.length < 1) {
            setSecondaryNoErr(true);
        } else {
            setSecondaryNoErr(false);
        }

        setSecondaryNo(item);
    };

    function userHandler(e) {
        let item = e.target.value;
        if (username === " " || username === undefined || username.length < 1) {
            setUsernameErr(true);
        } else {
            setUsernameErr(false);
        }
        setUsername(item);
    };

    function passHandler(e) {
        let item = e.target.value;
        if (password.trim().length > 6 && password.length <= 12) {
            setPasswordErr(false);
        } else if (password.match('^((?=.*?[A-Za-z])(?=.*?[0-9])(?=.*?[!@#$%&^*])).{8,16}$')) {
            setPasswordErr(false);
        } else {
            setPasswordErr(true);
        }
        setPassword(item);
    };

    function confPassHandler(e) {
        let item = e.target.value;
        if (confirmPass.trim().length > 6 && confirmPass.length <= 12) {
            setConfirmPassErr(false);
        } else if (confirmPass.match('^((?=.*?[A-Za-z])(?=.*?[0-9])(?=.*?[!@#$%&^*])).{8,16}$')) {
            setConfirmPassErr(false);
        } else {
            setConfirmPassErr(true);
        }
        setConfirmPass(item);
    };



    return (
        <div className='col-md-7 mx-auto text-dark shadow-lg'
            style={{
                display: "flex",
                justifyContent: "center",
                margin: 10,
                padding: 20,
                height: "auto"
            }}>
            <div className="content-wrap cardwrap">
                <form style={{ width: "100%" }} onSubmit={signUpHandler}>
                    <div className='winlead'>
                        <h2>User SignUp</h2>
                    </div>
                    <div >
                        <FormControl>
                            <InputLabel>Parmacy Name </InputLabel>
                            <Input type="text" name="pharmacyName" value={pharmacyName} onChange={PharmacyHandler} style={{ width: "450px" }} />{pharmacyNameErr ? <span style={{ color: "red" }}>*Enter pharmacy name*</span> : " "}

                        </FormControl>
                        <br />
                        <br />
                        <FormControl>
                            <InputLabel>Owner</InputLabel>
                            <Input
                                type="text"
                                name="owner"
                                onChange={ownerHandler}
                                style={{ width: "450px" }} />{ownerErr ? <span style={{ color: "red" }}>*Owner name*</span> : " "}
                        </FormControl>
                        <br />
                        <br />
                        <FormControl>
                            <InputLabel>Licence No.</InputLabel>
                            <Input type="number" name="licence" onChange={licenceHandler} style={{ width: "450px" }} />{licenceErr ? <span style={{ color: "red" }}>*Enter licence*</span> : " "}
                        </FormControl>
                        <br />
                        <br />
                        <div className="dropdown">
                            <button className="btn btn-text-light dropdown-toggle"  type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Type Of Buisness
                            </button>
                            <section className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <option value="Holeseller"> Holeseller</option>
                               <option value="Retailer"> Retailer</option>
                            </section>
                           
                        </div>
                        <br />
                        <br />
                        <FormControl>
                            <InputLabel>Address Of Pharmacy</InputLabel>
                            <Input type="text" name="addressOfPharmacy" onChange={addHandler} style={{ width: "450px" }} />{addressOfPharmacyErr ? <span style={{ color: "red" }}>*Enter pharmacy address*</span> : " "}
                        </FormControl>
                        <br />
                        <br />
                        <FormControl>
                            <InputLabel>State</InputLabel>
                            <Input type="text" name="state" onChange={stateHandler} style={{ width: "450px" }} />
                            {stateErr ? <span style={{ color: "red" }}>*Enter state*</span> : " "}
                        </FormControl>
                        <br />
                        <br />
                        <FormControl>
                            <InputLabel>Pin Code</InputLabel>
                            <Input type="number" name="pin" onChange={pinHandler} style={{ width: "450px" }} />{pinErr ? <span style={{ color: "red" }}>*Enter valid pin*</span> : " "}
                        </FormControl>
                        <br />
                        <br />
                        <FormControl>
                            <InputLabel>Email Id</InputLabel>
                            <Input type="email" name="email" onChange={emailHandler} style={{ width: "450px" }} />{emailErr ? <span style={{ color: "red" }}>*Enter valid email*</span> : " "}
                        </FormControl>
                        <br />
                        <br />
                        <FormControl>
                            <InputLabel>Primary Mobile No</InputLabel>
                            <Input type="number" name="primaryNo" onChange={priNoHandler} style={{ width: "450px" }} />{primaryNoErr ? <span style={{ color: "red" }}>*Enter primary mobile number*</span> : " "}
                        </FormControl>
                        <br />
                        <br />
                        <FormControl>
                            <InputLabel>Secondary Mobile No</InputLabel>
                            <Input type="number" name="secondaryNo" onChange={secNoHandler} style={{ width: "450px" }} />{secondaryNoErr ? <span style={{ color: "red" }}>*Enter  secondary mobile number*</span> : " "}
                        </FormControl>
                        <br />
                        <br />
                        <FormControl>
                            <InputLabel>Username</InputLabel>
                            <Input type="text" name="username" onChange={userHandler} style={{ width: "450px" }} />{usernameErr ? <span style={{ color: "red" }}>*Username is invalid*</span> : ""}
                        </FormControl>
                        <br />
                        <br />
                        <FormControl>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input type="password" name="password" onChange={passHandler} style={{ width: "450px" }} />
                            {passwordErr ? <span style={{ color: "red" }}>password lenght should be less than 8 charectors and grater than 12 charectors</span> : ""}
                        </FormControl>
                        <br />
                        <br />
                        <FormControl>
                            <InputLabel htmlFor="password">Confirm password</InputLabel>
                            <Input type="password" name="confirmPass" onChange={confPassHandler} style={{ width: "450px" }} />
                            {confirmPassErr ? <span style={{ color: "red" }}>password lenght should be less than 8 charectors and grater than 12 charectors</span> : ""}
                        </FormControl>
                        <br />
                        <br />
                        <Button variant="contained" size="small" className='mt-3' id="btn1" style={{ width: '100%' }} onClick={signUpHandler}>SignUp</Button>
                        <br /><br />
                        <Button variant="contained" size="small" id='btn2' onClick={resetHandler} style={{ width: '100%' }}>Reset</Button>
                    </div>
                </form>
            </div>
        </div>
    )

}
export default Sign_Up;
