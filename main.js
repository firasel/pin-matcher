//generate 4 digit pin number
function generatePinNumber() {
    let createNumber = (Math.random() * 10000 + '').split('.')
    if (createNumber[0].length === 4) {
        return parseInt(createNumber[0])
    } else {
        generatePinNumber()
    }
}


//added event listener in generate Button
(function () {
    document.getElementById('generatePin').addEventListener('click', function () {
        let generatePin = generatePinNumber()
        if (typeof generatePin == 'number') {
            document.getElementById('showGeneratePin').value = generatePin
        }
    })
})()


//added event listener in all number button
function addEventNumberButton() {
    const button = document.getElementsByClassName('numberButton')
    const enterInput = document.getElementById('showEnterInput')
    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener('click', function (event) {
            if (enterInput.value.length < 4) {
                enterInput.value = enterInput.value + event.target.innerText
            }
        })
    }
}
addEventNumberButton();


//clear enter input value
(function () {
    const enterInput = document.getElementById('showEnterInput')
    document.getElementById('clearButton').addEventListener('click', function () {
        enterInput.value = ''
    })
})();


//backspace button in add event listener
(function () {
    const enterInput = document.getElementById('showEnterInput')
    document.getElementById('backSpaceButton').addEventListener('click', function () {
        enterInput.value = enterInput.value.slice(0, -1)
    })
})();


//show alert message
function alertMessageShow(message,color){
    const alertBox = document.getElementById('alertBox')
    const alertMessage = document.getElementById('alertMessage')
    alertMessage.textContent = message
    //show message 1 second and hide
    alertBox.style.display = 'block'
    alertMessage.style.color = color
    alertMessage.style.background = 'white'
    setTimeout(() => {
        alertBox.style.display = 'none'
    }, 1000);
}


//added event listener in submit button
(function () {
    const submitButton=document.getElementById('submitButton')
    const generatePin = document.getElementById('showGeneratePin')
    const enterInput = document.getElementById('showEnterInput')
    const tryLeft=document.getElementById('tryLeft')
    let count=5
    //add event listener and show alert message after condition check
    submitButton.addEventListener('click', function () {
        if (enterInput.value.length === 4 && generatePin.value.length === 4) {
            if (enterInput.value === generatePin.value) {
                //alert message
                alertMessageShow('✅ Pin Matched... Secret door is opening for you','green')
                count=5
                tryLeft.innerText=''
                enterInput.value=''
                generatePin.value=''
            } else {
                //alert message
                alertMessageShow('❌ Pin Didn\'t Match, Please try again','red')
                //try left show message
                if(count>0){
                    tryLeft.innerText=count+' try left'
                    count--;
                }else{
                    tryLeft.innerText='You can\'t try anymore'
                    submitButton.style.display='none'
                }
            }
        } else {
            //alert message
            alertMessageShow('❌ please provide 4 digit number','white')
            //alert message background color change
            document.getElementById('alertMessage').style.background = 'orange'
        }
    })
})();