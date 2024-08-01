document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const name = document.getElementById('name');
    const duty = document.getElementById('duty');
    const phone = document.getElementById('phone');
    const age = document.getElementById('age');
    const country = document.getElementById('country');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent form submission
  
      let errors = [];
  
      // Check if the name field is empty
      if (name.value.trim() === '') {
        errors.push('Name is required');
      }
  
      // Check if the duty field is selected
      if (duty.value === '') {
        errors.push('Please select your duty');
      }
  
      // Check if the phone field is empty
      if (phone.value.trim() === '') {
        errors.push('Phone number is required');
      }
  
      // Check if the age field is empty or not a number
      if (age.value.trim() === '' || isNaN(age.value)) {
        errors.push('Please enter a valid age');
      }
  
      // Check if the country field is empty
      if (country.value.trim() === '') {
        errors.push('Country is required');
      }
  
      // If there are errors, display them
      if (errors.length > 0) {
        alert(errors.join('\n'));
      } else {
        form.submit();
      }
    });
  });
  