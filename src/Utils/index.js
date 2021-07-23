export const Validator = (value, type) => {
    let valid = false;
    let errorMessage = "";
    switch (type) {
        case "Phone": {
            const regex = /^\d{10}$/;
            if (regex.test(value)) {
                valid = true;
            } else {
                errorMessage = "Enter a valid phone number";
            }
            break;
        }
        case "Email": {
            debugger
            const regex =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (regex.test(value)) {
                valid = true;
            } else {
                errorMessage = "Enter a valid email";
            }
            break;
        }
        case "Website": {
            const regex = /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/;
            if (regex.test(value)) {
                valid = true;
            } else {
                errorMessage = "Enter a valid web url";
            }
            break;
        }
        case "Number": {
            const regex = /^\d*$/;
            if (regex.test(value)) {
                valid = true;
            } else {
                errorMessage = "Enter only number";
            }
            break;
        }
        default: {
            break;
        }
    }
    return {valid, errorMessage};
}

export const getValidationType = (dropDownType) => {
    let compData = {};
    switch (dropDownType) {
        case "Phone": {
            compData = { placeholder: "9090909090", validation: dropDownType }; 
            break;
        }
        case "Email": {
            compData = { placeholder: "survey@gmail.com", validation: dropDownType };
            break;
        }
        case "Website": {
            compData = { placeholder: "https://", validation: dropDownType };
            break;
        }
        case "Number": {
            compData = { placeholder: "Type your answer here...", validation: dropDownType };
            break;
        }
        case "Textbox": {
            compData = { placeholder: "Type your answer here...", validation: null };
            break;
        }
        default: {
            break;
        }
    } 
    return compData;
}