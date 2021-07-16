let TabBtn1 = document.querySelector('.sec3_tab1');
let TabBtn2 = document.querySelector('.sec3_tab2');
let TabBtn3 = document.querySelector('.sec3_tab3');

let SlideTxt1 = document.querySelector('.slide_txt1');
let SlideTxt2 = document.querySelector('.slide_txt2');
let SlideTxt3 = document.querySelector('.slide_txt3');

TabBtn1.onclick = function(){
    TabBtn1.style.backgroundColor = '#ff9b51';
    TabBtn2.style.backgroundColor = '#333333';
    TabBtn3.style.backgroundColor = '#333333';
    
    SlideTxt1.classList.remove('slide_txt_off');
    SlideTxt2.classList.add('slide_txt_off');
    SlideTxt3.classList.add('slide_txt_off');
}
TabBtn2.onclick = function(){
    TabBtn1.style.backgroundColor = '#333333';
    TabBtn2.style.backgroundColor = '#ff9b51';
    TabBtn3.style.backgroundColor = '#333333';
    
    SlideTxt1.classList.add('slide_txt_off');
    SlideTxt2.classList.remove('slide_txt_off');
    SlideTxt3.classList.add('slide_txt_off');
}
TabBtn3.onclick = function(){
    TabBtn1.style.backgroundColor = '#333333';
    TabBtn2.style.backgroundColor = '#333333';
    TabBtn3.style.backgroundColor = '#ff9b51';
    
    SlideTxt1.classList.add('slide_txt_off');
    SlideTxt2.classList.add('slide_txt_off');
    SlideTxt3.classList.remove('slide_txt_off');
}