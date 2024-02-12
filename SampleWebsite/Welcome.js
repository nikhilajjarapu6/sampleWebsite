window.onload = function() {
    loadData();
};

function loadData() {
    var formData = localStorage.getItem('formData'); // Retrieve data from localStorage
    var data = JSON.parse(formData);
    var dataDiv = document.getElementsByClassName('data3')[0];   //first should be selected

    // Construct the HTML content
    var htmlContent = `
        <p class="formData"> ${data.firstName}</p>
        <p class="formData"> ${data.lastName}</p>
        <p class="formData"> ${data.email}</p>
        <p class="formData">${data.password}</p>
        <p class="formData"> ${data.mobileNumber}</p>
        <p class="formData"> ${data.selectedGender}</p>
    `;

    // Set the HTML content to the data div
    dataDiv.innerHTML = htmlContent;
}
