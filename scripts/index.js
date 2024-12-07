// Create hamburger menu slide

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const navItem = document.querySelectorAll('.navigation a');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

// apply 'active' class to selected <a> tag

navItem.forEach(link => {
    link.addEventListener('click', () => {
        navItem.forEach(nav => nav.classList.remove('active'));

        link.classList.add('active');
    });
});
