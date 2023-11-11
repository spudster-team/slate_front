export const checkResponse = (requirements, error) => {
  var errors = [];
  requirements.forEach((requirement) => {
    if (error[requirement]) {
      error[requirement].forEach((message) => {
        errors.push(message);
      });
    }
  });
  return errors;
};

export const validEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
}

export const validPassword = (password) => {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
    return re.test(password);
}
