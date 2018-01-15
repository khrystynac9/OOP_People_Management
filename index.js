var $button, $nameValue, $birthDateValue, $addressValue, $phoneValue, $emailValue, $genderValue, $tableRow;
var userDataArray = [];
var userDataArrayIndex;

class SuperUser {
    constructor(isDataVisible) {
        this.isDataVisible = true;
    }
    changeDataVisibility() {
        if(this.isDataVisible) {
            return this.isDataVisible = false;
        } else {
            return this.isDataVisible = false;
        }

    }
}

class User extends SuperUser {
    constructor(isDataVisible, name, birthDate, address, phone, email, gender) {
        super(isDataVisible);
        this.name = name;
        this.birthDate = birthDate;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.gender = gender;
    }
}

function buttonClick() {
    $button = document.getElementsByClassName("myButton");
    $button[0].addEventListener("click", buttonAction);
}
buttonClick();

function buttonAction() {
    gettingName();
    gettingBirthDate();
    gettingAddress();
    gettingPhone();
    gettingEmail();
    gettingGender();
    usersArray();
    if (userDataArrayIndex) {
        tableCreating();
        rowClick();
    }
}

function gettingName() {
    $nameValue =  document.getElementById("name-text-input").value;
    var nameRegex = /^[A-Z]{1}[a-z]*$/;
    if(!nameRegex.test($nameValue)) {
        alert("You entered incorrect name");
        return $nameValue = false;
    }
}

function gettingBirthDate() {
    $birthDateValue =  document.getElementById("birthDate-date-input").value;
    if(!$birthDateValue) {
        alert("you forgot to enter the date");
        return $birthDateValue = false;
    }
}

function gettingAddress() {
    $addressValue = document.getElementById("address-text-input").value;
    var addressRegex = /^[A-Z]{1}[a-z]+[,]\s[A-Z]{1}[a-z]+[,]\s[0-9]+[a-z]?([\/]{1}[0-9]+)?$/;
    if(!addressRegex.test($addressValue)) {
        alert("You entered incorrect address");
        return $addressValue = false;
    }
}

function gettingPhone() {
    $phoneValue = document.getElementById("phone-tel-input").value;
    var phoneRegex = /^[0-9]{2}-[0-9]{2}-[0-9]{2}$/;
    if(!phoneRegex.test($phoneValue)) {
        alert("You entered incorrect phone");
        return $phoneValue = false;
    }
}

function gettingEmail() {
    $emailValue = document.getElementById("userEmail-email-input").value;
    var emailRegex = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;
    if(!emailRegex.test($emailValue)) {
        alert("You entered incorrect email");
        return $emailValue = false;
    }
}

function gettingGender() {
    var $a = document.getElementById("gender-select-input");
    $genderValue = $a.options[$a.selectedIndex].value;
    if ($genderValue == "Choose...") {
        alert("You forgot to select the gender");
        return $genderValue = false;
    }
}

function usersArray() {
    if($nameValue && $birthDateValue && $addressValue && $phoneValue && $emailValue && $genderValue) {
        var user = new User($nameValue, $birthDateValue, $addressValue, $phoneValue, $emailValue, $genderValue);
        userDataArray.push(user);
        userDataArrayIndex = true;
    } else {
        alert("You entered incorect data, try one more time");
        return userDataArrayIndex = false;
    }
}

function tableCreating() {
    
    var table = document.getElementsByClassName("table");
    var row = document.createElement("tr");
    var index = userDataArray.length - 1;
    row.setAttribute("data", index);
    table[0].appendChild(row);

    var dataName = document.createElement("td");
    var nameNode = document.createTextNode($nameValue);
    dataName.appendChild(nameNode);
    row.appendChild(dataName);

    var dataBirthDate = document.createElement("td");
    var dateNode = document.createTextNode($birthDateValue);
    dataBirthDate.appendChild(dateNode);
    row.appendChild(dataBirthDate);

    var dataAddress = document.createElement("td");
    var addressNode = document.createTextNode($addressValue);
    dataAddress.appendChild(addressNode);
    row.appendChild(dataAddress);

    var dataPhone = document.createElement("td");
    var phoneNode = document.createTextNode($phoneValue);
    dataPhone.appendChild(phoneNode);
    row.appendChild(dataPhone);

    var dataemail = document.createElement("td");
    var emailNode = document.createTextNode($emailValue);
    dataemail.appendChild(emailNode);
    row.appendChild(dataemail);

    var dataGender = document.createElement("td");
    var genderNode = document.createTextNode($genderValue);
    dataGender.appendChild(genderNode);
    row.appendChild(dataGender);
}

function rowClick() {
    var $tableRow = document.getElementsByTagName("tr");
    for (var i = 1; i < $tableRow.length; i++) {
        $tableRow[i].addEventListener("click", rowVisibility);
    }
}

function rowVisibility(evt) {
    var a = evt.currentTarget.childNodes;
    var $allTableRows = document.getElementsByTagName("tr");
    for(var i = 0; i < userDataArray.length; i++) {
        if (userDataArray[i].isDataVisible) {
            userDataArray[i].isDataVisible = false;
            for (var j = 1; j < $allTableRows.length; j++) {
                $allTableRows[j].style.visibility = "hidden";
            }
            a[0].style.visibility = "visible";
            a[0].style.color = "red";
        } else {
            userDataArray[i].isDataVisible = true;
            for (var k = 1; k < $allTableRows.length; k++) {
                $allTableRows[k].style.visibility = "visible";
            }
            a[0].style.color = "black";
            a[0].removeAttribute("style");

        }
    }
    a = [];
   
}