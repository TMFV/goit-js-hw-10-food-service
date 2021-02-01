
const themeCheckboxRef = document.querySelector("#theme-switch-toggle");

const body = document.querySelector("body");

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
  const dark = Theme.DARK;
  const light = Theme.LIGHT;

  const localRef = localStorage.getItem('theme');
  let localStatus;
 function onRef (localStatus){localStorage.setItem('theme', localStatus)};
 function changeOnDark(){
    body.classList.add(`${dark}`);
    body.classList.remove(`${light}`);
 };
 function changeOnLight(){
    body.classList.add(`${light}`);
    body.classList.remove(`${dark}`);
 };

  if (localRef === null){
      localStatus = light;
      onRef (localStatus);
  } else if (localRef == light){ 
    localStatus = light;
    onRef (localStatus);
    changeOnLight();
  } else if (localRef == dark){ 
    themeCheckboxRef.setAttribute('checked', true);
    localStatus = dark;
    onRef (localStatus);
    changeOnDark();
};

themeCheckboxRef.addEventListener('click', function change (event) {
    
    if(localStatus == light){
        themeCheckboxRef.setAttribute('checked', true)
        localStatus = dark;
        onRef (localStatus);
        changeOnDark();
    } else if(localStatus == dark){
        themeCheckboxRef.setAttribute('checked', false)
        localStatus = light;
        onRef (localStatus);
        changeOnLight();
    }
});



  