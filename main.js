let popped = 0;

for (const balloon of document.querySelectorAll('.balloon')){
    balloon.addEventListener('mouseover', popAnimate);
}

function popAnimate(){
        this.style.backgroundColor = "#ededed";
        this.textContent = 'POP!';
        popped++;
    //    console.log(this);
        this.removeEventListener('mouseover', popAnimate);
        this.addEventListener('mouseout', hidePOP);
        checkAllPopped();
    }
    
    function hidePOP(){
    this.textContent = "";
}

// function changeEvent(balloon){
//     balloon.removeEventListener('mouseover', popAnimate);
//     balloon.addEventListener('mouseout', hidePOP);
// };

function checkAllPopped(){
    if (popped === 24){
        console.log('all popped!');
        let gallery = document.querySelector('#balloon-gallery');
        let message = document.querySelector('#no-balloons');
        gallery.innerHTML = '';
        message.style.display = 'block';
    };
};