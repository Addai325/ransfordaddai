function closeMenu() {
    document.getElementById('menuToggle').checked = false
}


const navModal = document.getElementById('navModal')
const closeNavModal = document.getElementById('closeNavModal')
const menuToggle = document.getElementById('menuToggle');


// closeNavModal.addEventListener('click', ()=> {
//     navModal.style.display = 'none'
// });


closeNavModal.addEventListener('click', () => {
    menuToggle.checked = false; // Uncheck the checkbox to close the menu
});


const openOmniblogsModal = document.getElementById('openOmniblogsModal')
const theOmniblogsModal = document.getElementById('theOmniblogsModal')
const closeOmniblogsModal = document.getElementById('closeOmniblogsModal')


const pcOpenOmniblogsModal = document.getElementById('pcOpenOmniblogsModal')
const pcTheOmniblogsModal = document.getElementById('pcTheOmniblogsModal')
const pcCloseOmniblogsModal = document.getElementById('pcCloseOmniblogsModal')


openOmniblogsModal.addEventListener('click', ()=> {
    theOmniblogsModal.style.display = 'block';
    setTimeout(() => { // Add the "show" class after a tiny delay
        theOmniblogsModal.classList.add('show');
    }, 10);
});


closeOmniblogsModal.addEventListener('click', ()=> {
    theOmniblogsModal.classList.remove('show'); // Remove the "show" class
    setTimeout(() => { // Delay hiding the modal until the animation ends
        theOmniblogsModal.style.display = 'none';
    }, 300); // Match the CSS transition duration
})

pcOpenOmniblogsModal.addEventListener('click', ()=> {
    pcTheOmniblogsModal.style.display = 'block';
    setTimeout(() => { // Add the "show" class after a tiny delay
        pcTheOmniblogsModal.classList.add('show');
    }, 10);
});


pcCloseOmniblogsModal.addEventListener('click', ()=> {
    pcTheOmniblogsModal.classList.remove('show'); // Remove the "show" class
    setTimeout(() => { // Delay hiding the modal until the animation ends
        pcTheOmniblogsModal.style.display = 'none';
    }, 300); // Match the CSS transition duration
})





const openDecraveModal = document.getElementById('openDecraveModal')
const theDecraveModal = document.getElementById('theDecraveModal')
const closeDecraveModal = document.getElementById('closeDecraveModal')

const pcOpenDecraveModal = document.getElementById('pcOpenDecraveModal')
const pcTheDecraveModal = document.getElementById('pcTheDecraveModal')
const pcCloseDecraveModal = document.getElementById('pcCloseDecraveModal')




openDecraveModal.addEventListener('click', ()=> {
    theDecraveModal.style.display = 'block';
    setTimeout(() => { // Add the "show" class after a tiny delay
        theDecraveModal.classList.add('show');
    }, 10);
});

closeDecraveModal.addEventListener('click', ()=> {
    theDecraveModal.classList.remove('show'); // Remove the "show" class
    setTimeout(() => { // Delay hiding the modal until the animation ends
        theDecraveModal.style.display = 'none';
    }, 300); // Match the CSS transition duration
});


pcOpenDecraveModal.addEventListener('click', ()=> {
    pcTheDecraveModal.style.display = 'block';
    setTimeout(() => { // Add the "show" class after a tiny delay
        pcTheDecraveModal.classList.add('show');
    }, 10);
});

pcCloseDecraveModal.addEventListener('click', ()=> {
    pcTheDecraveModal.classList.remove('show'); // Remove the "show" class
    setTimeout(() => { // Delay hiding the modal until the animation ends
        pcTheDecraveModal.style.display = 'none';
    }, 300); // Match the CSS transition duration
});


const openSholetModal = document.getElementById('openSholetModal');
const theSholetModal = document.getElementById('theSholetModal');
const closeSholetModal = document.getElementById('closeSholetModal');

const pcOpenSholetModal = document.getElementById('pcOpenSholetModal');
const pcTheSholetModal = document.getElementById('pcTheSholetModal');
const pcCloseSholetModal = document.getElementById('pcCloseSholetModal');



openSholetModal.addEventListener('click', ()=> {
    theSholetModal.style.display = 'block';
    setTimeout(() => { // Add the "show" class after a tiny delay
        theSholetModal.classList.add('show');
    }, 10);
});

closeSholetModal.addEventListener('click', ()=> {
    theSholetModal.classList.remove('show'); // Remove the "show" class
    setTimeout(() => { // Delay hiding the modal until the animation ends
        theSholetModal.style.display = 'none';
    }, 300); // Match the CSS transition duration
})


pcOpenSholetModal.addEventListener('click', ()=> {
    pcTheSholetModal.style.display = 'block';
    setTimeout(() => { // Add the "show" class after a tiny delay
        pcTheSholetModal.classList.add('show');
    }, 10);
});

pcCloseSholetModal.addEventListener('click', ()=> {
    pcTheSholetModal.classList.remove('show'); // Remove the "show" class
    setTimeout(() => { // Delay hiding the modal until the animation ends
        pcTheSholetModal.style.display = 'none';
    }, 300); // Match the CSS transition duration
})





// Scroll to top functionality
document.querySelector('.sttop').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


// Add dynamic movement to the scroll-to-top button
window.addEventListener('scroll', function () {
    const scrollTopButton = document.querySelector('.sttop');
    const scrolled = window.scrollY;

    // Add subtle movement and fade-in effect
    scrollTopButton.style.transform = `translateY(${Math.min(scrolled / 20, 20)}px)`;
    scrollTopButton.style.opacity = scrolled > 100 ? 1 : 0; // Fade in after 100px of scrolling
});



// Scroll to top functionality
document.querySelector('.pcSttop').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


// Add dynamic movement to the scroll-to-top button
window.addEventListener('scroll', function () {
    const scrollTopButton = document.querySelector('.pcSttop');
    const scrolled = window.scrollY;

    // Add subtle movement and fade-in effect
    scrollTopButton.style.transform = `translateY(${Math.min(scrolled / 20, 20)}px)`;
    scrollTopButton.style.opacity = scrolled > 100 ? 1 : 0; // Fade in after 100px of scrolling
});






