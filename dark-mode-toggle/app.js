const colorSwitch = document.getElementById('input-color-switch');

function checkMode(){
    if(colorSwitch.checked){
        darkModeOn();
    } else {
        darkModeOff();
    }
};

function darkModeOn(){
    document.body.classList.add("dark-mode");
};

function darkModeOff(){
    document.body.classList.remove("dark-mode");
};

colorSwitch.addEventListener('click', checkMode);