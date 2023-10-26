// JS FOR REPLACE NAME
function replaceName () {
    let name = prompt ("Hello, What is your name?", "");
    document.getElementById("name").innerHTML = name;
}

replaceName();



// JS FOR CONTACT ME
document.getElementById("contact-button").addEventListener("click", function() {
    document.getElementById("contact-modal").style.display = "block";
});

document.getElementsByClassName("close-button")[0].addEventListener("click", function() {
    document.getElementById("contact-modal").style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target === document.getElementById("contact-modal")) {
        document.getElementById("contact-modal").style.display = "none";
    }
});



// JS FOR AUDITION SUBMIT RESULT
const auditionForm = document.getElementById('auditionForm');
const results = document.getElementById('results');

auditionForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const resultName = document.getElementById('resultName');
    const resultDob = document.getElementById('resultDob');
    const resultGender = document.getElementById('resultGender');
    const resultEmail = document.getElementById('resultEmail');
    const resultPhone = document.getElementById('resultPhone');
    const resultAbout = document.getElementById('resultAbout');
    const timeResult = document.getElementById('timeResult'); // Perubahan di sini
    const currentTime = new Date();

    resultName.textContent = auditionForm.name.value;
    resultDob.textContent = auditionForm.dob.value;
    resultGender.textContent = auditionForm.gender.value;
    resultEmail.textContent = auditionForm.email.value;
    resultPhone.textContent = auditionForm.phone.value;
    resultAbout.textContent = auditionForm.about.value;

    // Perbarui waktu saat ini pada div 'timeResult' (bukan 'resultAbout')
    timeResult.textContent = `Submitted at: ${currentTime.toLocaleString()}`;

    results.style.display = 'block';
});
