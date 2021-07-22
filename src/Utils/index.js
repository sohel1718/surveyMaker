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