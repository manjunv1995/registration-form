function toCreateAnAccount() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let mobile_number = document.getElementById('mobile_number').value;
    let date_of_birth = document.getElementById('date_of_birth').value;
    let password = document.getElementById('password').value;

    if (name && email && mobile_number && date_of_birth && password) {
        // window.alert(`${name} ${email} ${mobile_number} ${date_of_birth}`)
        window.alert('sit back and relax your account has been created')
    } else {
        window.alert('please fill all feilds')
    }
}

function loginInToYourAccount() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (email && password) {
        window.alert('hi and welcome to JAVASCRIPT');
        // window.alert(`${email} ${password}`)
    } else if (email || password) {
        window.alert('please fill all feilds');
    } else {
        window.alert('please enter correct email or password');
    }
}

// for A katha 600 squar feet
// b katha 1200 squar feet ground + 1st floor and it should be DC convert