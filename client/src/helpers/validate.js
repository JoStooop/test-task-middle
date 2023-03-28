export const validateFormContacts = (values) => {
  const {name, email, message} = values;

  const errors = {};

  if (!validateName(name)) {
    errors.name = 'Имя не соответствует требованиям';
  }

  if (!validateEmail(email)) {
    errors.email = 'Почта указана не верно';
  }

  if (!message) {
    errors.message = 'Введите ваше сообщение';
  } else if (message.length < 6) {
    errors.message = 'Вы не ввели текс для отправки';
  }

  return errors;
};

export const validateFormLogin = (values) => {
  const {username, password} = values;

  const errors = {};

  if (!validateUsername(username)) {
    errors.username = 'Имя пользователя не допустимое';
  }

  if (!validatePassword(password)) {
    errors.password = 'Недопустимый пароль';
  }

  return errors;
};

export const validateFormRegistration = (values) => {
  const {username, email, password, repeatPassword} = values;

  const errors = {};

  if (!validateUsername(username)) {
    errors.username = 'Имя пользователя не допустимое';
  }

  if (!validateEmail(email)) {
    errors.email = 'Почта указана не верно';
  }

  if (!validatePassword(password)) {
    errors.password = 'Недопустимый пароль';
  } else if (password !== repeatPassword) {
    errors.repeatPassword = 'Пароли не совпадают';
  }


  return errors;
};


const validatePassword = (password) => {
  const MIN_LENGTH = 5;
  const MAX_LENGTH = 16;
  const regexUpperCase = /[A-Z]/;
  const regexLowerCase = /[a-z]/;
  const regexNumber = /[0-9]/;

  if (password.length < MIN_LENGTH || password.length > MAX_LENGTH) {
    return false;
  }

  if (!regexUpperCase.test(password)) {
    return false;
  }

  if (!regexLowerCase.test(password)) {
    return false;
  }

  return regexNumber.test(password);
};

const validateEmail = (email) => {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return regex.test(String(email).toLowerCase());
};

const validateUsername = (username) => {
  const MIN_LENGTH = 4;
  const MAX_LENGTH = 16;
  const regex = /^[a-zA-Z0-9]+$/;

  if (username.length < MIN_LENGTH || username.length > MAX_LENGTH) {
    return false;
  }

  return regex.test(username);
};

const validateName = (name) => {
  const regex = /^[a-zA-Zа-яА-ЯёЁ\s]+$/;

  return regex.test(name);
};
