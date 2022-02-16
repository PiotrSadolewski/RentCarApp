const markInput = document.getElementById('mark');
const modelInput = document.getElementById('model');
const dayOfProductionInput = document.getElementById('dayOfProduction');
const pricePerDayInput = document.getElementById('pricePerDay');
const licensePlateNumberInput = document.getElementById('licensePlateNumber');

const errorMark = document.getElementById('errorMark');
const errorModel = document.getElementById('errorModel');
const errorDayOfProduction = document.getElementById('errorDayOfProduction');
const errorPricePerDay = document.getElementById('errorPricePerDay');
const errorLicensePlateNumber = document.getElementById('errorLicensePlateNumber');

function validateForm(){
    let valid = true;

    resetErrors([markInput,modelInput,dayOfProductionInput,pricePerDayInput,licensePlateNumberInput],
        [errorMark,errorModel,errorDayOfProduction,errorPricePerDay,errorLicensePlateNumber]);

        if(!checkRequired(markInput.value)){
            valid = false;
            markInput.classList.add("error-input");
            errorMark.innerText = "Pole jest wymagane";
        }
        else if (!checkTextLengthRange(markInput.value, 2, 50)){
            valid = false;
            markInput.classList.add("error-input");
            errorMark.innerText = "Pole powinno zawierać od 2 do 50 znaków";
        }       
        
        if(!checkRequired(modelInput.value)){
            valid = false;
            modelInput.classList.add("error-input");
            errorModel.innerText = "Pole jest wymagane";
        }
        else if (!checkTextLengthRange(modelInput.value, 2, 50)){
            valid = false;
            modelInput.classList.add("error-input");
            errorModel.innerText = "Pole powinno zawierać od 2 do 50 znaków";
        }
        
        if(!checkRequired(licensePlateNumberInput.value)){
            valid = false;
            licensePlateNumberInput.classList.add("error-input");
            errorLicensePlateNumber.innerText = "Pole jest wymagane";
        }
        else if (!checkTextLengthRange(licensePlateNumberInput.value, 2, 50)){
            valid = false;
            licensePlateNumberInput.classList.add("error-input");
            errorLicensePlateNumber.innerText = "Pole powinno zawierać od 2 do 15 znaków";
        }

        if(!checkRequired(pricePerDayInput.value)){
            valid = false;
            pricePerDayInput.classList.add("error-input");
            errorPricePerDay.innerText = "Pole jest wymagane";
        }
        else {
            if (!checkNumber(pricePerDayInput.value)){
            valid = false;
            pricePerDayInput.classList.add("error-input");
            errorPricePerDay.innerText = "Pole powinno byc liczbą";
            }
            else if (!checkNumberRange(pricePerDayInput.value, 1000, 150000)){
                valid = false;
                pricePerDayInput.classList.add("error-input");
                errorPricePerDay.innerText = "Pole powinno być liczbą w zakresie od 1000 do 150000"
            }
        }

        if(!checkRequired(dayOfProductionInput.value)){
            valid = false;
            dayOfProductionInput.classList.add("error-input");
            errorDayOfProduction.innerText = "Pole jest wymagane";
        }
        else if(checkDateIfFuture(dayOfProductionInput.value)){
            valid = false;
            dayOfProductionInput.classList.add("error-input");
            errorDayOfProduction.innerText = "Podana data jest z przyszłości";
        }
        

    return valid;
}
