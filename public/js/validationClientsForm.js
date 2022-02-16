const nameInput = document.getElementById('name');
const surnameInput = document.getElementById('surname');
const phoneNumberInput = document.getElementById('phoneNumber');
const drivingLicenseNumberInput = document.getElementById('drivingLicenseNumber');

const errorName = document.getElementById('errorName');
const errorSurname = document.getElementById('errorSurname');
const errorPhoneNumber = document.getElementById('errorPhoneNumber');
const errorDrivingLicenseNumber = document.getElementById('errorDrivingLicenseNumber');


function validateForm(){
    let valid = true;
    resetErrors([nameInput,surnameInput,phoneNumberInput,drivingLicenseNumberInput],[errorName,errorSurname,errorPhoneNumber,errorDrivingLicenseNumber]);

    if(!checkRequired(nameInput.value)){
        valid = false;
        nameInput.classList.add("error-input");
        errorName.innerText = "Pole jest wymagane";
    }
    else if (!checkTextLengthRange(nameInput.value, 2, 50)){
        valid = false;
        nameInput.classList.add("error-input");
        errorName.innerText = "Pole powinno zawierać od 2 do 50 znaków";
    }

    if(!checkRequired(surnameInput.value)){
        valid = false;
        surnameInput.classList.add("error-input");
        errorSurname.innerText = "Pole jest wymagane";
    }
    else if (!checkTextLengthRange(surnameInput.value, 2, 50)){
        valid = false;
        surnameInput.classList.add("error-input");
        errorSurname.innerText = "Pole powinno zawierać od 2 do 50 znaków";
    }
    
    if(!checkRequired(drivingLicenseNumberInput.value)){
        valid = false;
        drivingLicenseNumberInput.classList.add("error-input");
        errorDrivingLicenseNumber.innerText = "Pole jest wymagane";
    }
    else if (!checkTextLengthRange(drivingLicenseNumberInput.value, 6, 6)){
        valid = false;
        drivingLicenseNumberInput.classList.add("error-input");
        errorDrivingLicenseNumber.innerText = "Pole powinno zawierać 6 znaków";
    }

    if(checkRequired(phoneNumberInput.value)){
        if(!checkNumber(phoneNumberInput.value)){
            valid = false;
            phoneNumberInput.classList.add("error-input");
            errorPhoneNumber.innerText = "Pole powinno zawierać wyłącznie cyfry";
        }
        else if (!checkTextLengthRange(phoneNumberInput.value, 9, 9)){
            valid = false;
            phoneNumberInput.classList.add("error-input");
            errorPhoneNumber.innerText = "Pole powinno zawierać 9 znaków";
        }
    }

    return valid;
}

