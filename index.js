//variables
const menuButton = document.getElementById('menu');
const menuContainer = document.getElementById('menu--container');
const bookNameInput = document.getElementById('nameInput');
const booKItemInput = document.querySelector('.select--item');
const btnBook = document.getElementById('btn--book');
const btnPost = document.getElementById('btnPost');
const queryInput = document.querySelector('.queries--input');
const scrollbtn = document.getElementById('scrollbtn');
//controlling input fields
btnBook.addEventListener('click' , function(e){
    e.preventDefault();
    bookNameInput.value = '';
})
btnPost.addEventListener('click' , function(e){
    queryInput.value = '';
})
//
menuButton.addEventListener('click' , function(){
    menuButton.style.display ='none';
    menuContainer.style.left=50+'%';

})
menuContainer.addEventListener("mouseleave" , function(){
    menuButton.style.display ='block';
    menuButton.style.transition = 1.5+'s';
    menuContainer.style.left= 100+'%';
});

//show detail on hover
const indexes = [1,2,3,4,5,6,7,8,9];
indexes.map((data)=>{
    const image = document.getElementById('image'+data);
    const detail = document.querySelector('.imageContainer--'+data);
    image.addEventListener('mouseover' , function(){
        detail.style.display ='flex';

    })
    image.addEventListener('mouseleave', function(){
        detail.style.display ='none';
    });
    image.addEventListener('mouseout', function(){
        detail.style.display ='none';
    });
    detail.addEventListener('mouseover', function(){
        detail.style.display ='flex';
    })
    detail.addEventListener('mouseout', function(){
        detail.style.display ='none';
    })
    

});
//handling the scroll button
window.addEventListener('scroll' , function(){
    if(window.scrollY >= 500){
        scrollbtn.style.display ='block';
    }
    else{
        scrollbtn.style.display ='none';
    }

});
scrollbtn.addEventListener('click' , function(){
    window.document.body.style.scrollBehavior ='smooth';
})

