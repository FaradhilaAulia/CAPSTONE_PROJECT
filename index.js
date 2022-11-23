import './styles/main.css';
import './styles/responsive.css';

const body = document.querySelector('body');
const navbar = document.querySelector('.navbar');
const menuBtn = document.querySelector('.menu-btn');
const cancelBtn = document.querySelector('.cancel-btn');

const container = document.querySelector('.container'),
  pwShowHide = document.querySelectorAll('.showHidePw'),
  pwFields = document.querySelectorAll('.password'),
  signUp = document.querySelector('.signup-link'),
  login = document.querySelector('.login-link');

menuBtn.onclick = () => {
  navbar.classList.add('show');
  menuBtn.classList.add('hide');
  body.classList.add('disabled');
};
cancelBtn.onclick = () => {
  body.classList.remove('disabled');
  navbar.classList.remove('show');
  menuBtn.classList.remove('hide');
};

//   js code to show/hide password and change icon
pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener('click', () => {
    pwFields.forEach((pwField) => {
      if (pwField.type === 'password') {
        pwField.type = 'text';

        pwShowHide.forEach((icon) => {
          icon.classList.replace('fa-eye-slash', 'fa-eye');
        });
      } else {
        pwField.type = 'password';

        pwShowHide.forEach((icon) => {
          icon.classList.replace('fa-eye', 'fa-eye-slash');
        });
      }
    });
  });
});

// js code to appear signup and login form
signUp.addEventListener('click', () => {
  container.classList.add('active');
});
login.addEventListener('click', () => {
  container.classList.remove('active');
});
