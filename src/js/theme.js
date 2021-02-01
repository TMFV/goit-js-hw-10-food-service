
const themeCheckboxRef = document.querySelector("#theme-switch-toggle");

const body = document.querySelector("body");

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
  const dark = Theme.DARK;
  const light = Theme.LIGHT

  const localRef = localStorage.getItem('theme');
  let localStatus;
 

  if (localRef === null){
      localStatus = light;
      localStorage.setItem('theme', localStatus);
  } else if (localRef == light){ 
    localStatus = light;
    localStorage.setItem('theme', localStatus);
      body.classList.add(`${light}`);
      body.classList.remove(`${dark}`);
  } else if (localRef == dark){ 
    themeCheckboxRef.setAttribute('checked', true);
    localStatus = dark;
    localStorage.setItem('theme', localStatus);
    body.classList.add(`${dark}`);
    body.classList.remove(`${light}`);
};


themeCheckboxRef.addEventListener('click', function change (event) {
    
    if(localStatus == light){
        console.dir(event.target);
        themeCheckboxRef.setAttribute('checked', true)
        localStatus = dark;
        localStorage.setItem('theme', localStatus);
        body.classList.add(`${dark}`);
        body.classList.remove(`${light}`);
    } else if(localStatus == dark){
        themeCheckboxRef.setAttribute('checked', false)
        localStatus = light;
        localStorage.setItem('theme', localStatus);
        body.classList.add(`${light}`);
        body.classList.remove(`${dark}`);
    }
});



  