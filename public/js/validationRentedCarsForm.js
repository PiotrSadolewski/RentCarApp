const rentedForInput = document.getElementById('rentedFor');
const typeOfRentInput = document.getElementById('typeOfRent');
const carRentalDayInput = document.getElementById('carRentalDay');
const dayOfReturnCarInput = document.getElementById('dayOfReturnCar');
const clientIdInput = document.getElementById('client_id');
const carIdInput = document.getElementById('car_id');


const errorRentedFor = document.getElementById('errorRentedFor');
const errorTypeOfRent = document.getElementById('errorTypeOfRent');
const errorCarRentalDay = document.getElementById('errorCarRentalDay');
const errorDayOfReturnCar = document.getElementById('errorDayOfReturnCar');
const errorClientID = document.getElementById('errorClientID');
const errorCarID = document.getElementById('errorCarID');

function validateForm(){
    let valid = true;

    resetErrors([rentedForInput,typeOfRentInput,carRentalDayInput,dayOfReturnCarInput],
        [errorRentedFor,errorTypeOfRent,errorCarRentalDay,errorDayOfReturnCar]);

        if(!checkRequired(rentedForInput.value)){
            valid = false;
            rentedForInput.classList.add("error-input");
            errorRentedFor.innerText = "Pole jest wymagane";
        }
        else if (!checkTextLengthRange(rentedForInput.value, 2, 50)){
            valid = false;
            rentedForInput.classList.add("error-input");
            errorRentedFor  .innerText = "Pole powinno zawierać od 2 do 50 znaków";
        } 

        if(!checkRequired(typeOfRentInput.value)){
            valid = false;
            typeOfRentInput.classList.add("error-input");
            errorTypeOfRent.innerText = "Pole jest wymagane";
        }
        else if (!checkTextLengthRange(typeOfRentInput.value, 2, 50)){
            valid = false;
            typeOfRentInput.classList.add("error-input");
            errorTypeOfRent  .innerText = "Pole powinno zawierać od 2 do 50 znaków";
        }

        if(!checkRequired(clientIdInput.value)){
            valid = false;
            clientIdInput.classList.add("error-input");
            errorClientID.innerText = "Pole jest wymagane";
        }

        if(!checkRequired(clientIdInput.value)){
            valid = false;
            clientIdInput.classList.add("error-input");
            errorClientID.innerText = "Pole jest wymagane";
        }

        if(!checkRequired(carIdInput.value)){
            valid = false;
            carIdInput.classList.add("error-input");
            errorCarID.innerText = "Pole jest wymagane";
        }

        if(checkRequired(dayOfReturnCarInput.value) && checkRequired(carRentalDayInput.value)){
            if(checkDateIfAfter(carRentalDayInput.value,dayOfReturnCarInput.value)){
                valid = false;
                dayOfReturnCarInput.classList.add("error-input");
                carRentalDayInput.classList.add("error-input");
                errorDayOfReturnCar.innerText = "Błędne daty";
                errorCarRentalDay.innerText = "Błędne daty";
            }
        }

        if(checkRequired(dayOfReturnCarInput.value) && !checkRequired(carRentalDayInput.value)){
            valid = false;
            dayOfReturnCarInput.classList.add("error-input");
            errorDayOfReturnCar.innerText = "Wypełnij najpierw polę data podpisania umowy";
        }

    return valid;
}

