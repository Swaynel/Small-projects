//form
const PageForm = document.createElement('form');
PageForm.setAttribute('autocomplete', 'on');
PageForm.style.display = 'flex';
PageForm.style.flexDirection = 'column';
PageForm.style.gap = '10px';
document.body.appendChild(PageForm);
//name label
const NameLabel = document.createElement('label');
NameLabel.textContent ='Name:';
NameLabel.setAttribute('for', 'name');NameLabel.style.top = '10px';
//name container
const  NameContainer= document.createElement('input');
NameContainer.setAttribute('autocomplete', 'name');
NameContainer.type='text';
NameContainer.id ='name'
NameContainer.required = true;
NameContainer.placeholder='Enter your name'
PageForm.appendChild(NameLabel);

PageForm.appendChild(NameContainer);


//email label
const EmaiLabel = document.createElement('label');
EmaiLabel.setAttribute('for', 'name');EmaiLabel.textContent ='Email:';
EmaiLabel.style.top = '10px';



//email container
const  EmailContainer= document.createElement('input');
EmailContainer.setAttribute('autocomplete', 'email');
EmailContainer.type='email';
EmailContainer.id ='email'
EmailContainer.placeholder = 'Example@gmail.com';
EmailContainer.required = true;

PageForm.appendChild(EmaiLabel);
PageForm.appendChild(EmailContainer);

//password label
const PasswordLabel = document.createElement('label');
PasswordLabel.setAttribute('for', 'name');
PasswordLabel .textContent ='Password:';
PasswordLabel .style.top = '10px';


//password container
const  PasswordContainer= document.createElement('input');
PasswordContainer.setAttribute('autocomplete', 'new-password');
PasswordContainer.required = true;
PasswordContainer.type = 'password';
PasswordContainer.placeholder = 'Enter your password';
PasswordContainer.id ='password'
PageForm.appendChild(PasswordLabel);

PageForm.appendChild(PasswordContainer);
//submit buttno
const SubmitBtn = document.createElement('button');

SubmitBtn.textContent = 'Submit';
PageForm.appendChild(SubmitBtn);

//submit event
PageForm.onsubmit = function (e) {
    e.preventDefault();
    if (
      NameContainer.value.trim() &&
      EmailContainer.value.trim() &&
      PasswordContainer.value.trim()
    ) {
      alert("Form submitted successfully!");
    } else {
      alert("Please fill in all fields.");
    }
  };

  // 1. Handle form submission
PageForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page reload
  
    // Get values from inputs
    const name = NameContainer.value.trim();
    const email = EmailContainer.value.trim();
    const password = PasswordContainer.value.trim();
  
    // Save to localStorage
    const formData = { name, email, password };
    localStorage.setItem("formData", JSON.stringify(formData));
  
    alert("Form data saved locally! 🧠");
  });
  
  