// Toggle on Features 
function myFunction(){
    document.querySelector('.dropdown').classList.toggle('active');
    document.querySelector('.shown').classList.toggle('hide');
    document.querySelector('.hidden').classList.toggle('visible');
}

// Toggle on Company
function secondFunction(){
    document.querySelector('.dropdown-company').classList.toggle('active');
    document.querySelector('.show').classList.toggle('hidden');
    document.querySelector('.invisible').classList.toggle('showcase');
}


// Opening SideNav
let openNav = document.getElementById('open-nav');

openNav.addEventListener("click", function(){
    document.getElementById('my-side-nav').style.width = "220px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
})

// Closing SideNav
let closeNav = document.getElementById('close-nav');

closeNav.addEventListener("click", function(){
    document.getElementById('my-side-nav').style.width = "0";
    document.body.style.backgroundColor = "hsl(0, 0%, 98%)";
})

// Toggle on Features-Mobile
let featureClickMobile = document.getElementById('features-mobile-click');

featureClickMobile.addEventListener("click", function(){
    document.querySelector('.dropdown-mobile').classList.toggle('dropdown-mobile-show');
    document.querySelector('.features-arrow-down').classList.toggle('features-arrow-down-hide');
    document.querySelector('.features-arrow-up').classList.toggle('features-arrow-up-show');
})

// Toggle on Company-Mobile
let companyClickMobile = document.getElementById('company-mobile-click');

companyClickMobile.addEventListener("click", function(){
    document.querySelector('.dropdown-company-mobile').classList.toggle('dropdown-company-mobile-show');
    document.querySelector('.company-arrow-down').classList.toggle('company-arrow-down-hide');
    document.querySelector('.company-arrow-up').classList.toggle('company-arrow-up-show');
})