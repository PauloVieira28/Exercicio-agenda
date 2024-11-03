let rowCount = 0;

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const tableBody = document.getElementById('contactsTable').getElementsByTagName('tbody')[0];

    const { rows } = tableBody;

    if (isPhoneDuplicate(phone, rows)) {
        displayAlert("O número de telefone já está cadastrado.");
        return;
    }

    if (name && phone) {
        const newRow = tableBody.insertRow();
        
        const nameCell = newRow.insertCell(0);
        const phoneCell = newRow.insertCell(1);
        
        nameCell.textContent = name;
        phoneCell.textContent = phone;

        newRow.style.backgroundColor = getColorForRow(rowCount);

        rowCount++;

        document.getElementById('name').value = '';
        document.getElementById('phone').value = '';
    }
});


function isPhoneDuplicate(phone, rows) {
    for (let i = 0; i < rows.length; i++) {
        if (rows[i].cells[1].textContent === phone) {
            return true;
        }
    }
    return false;
}

function displayAlert(message) {
    const alertDiv = document.getElementById('alert');
    alertDiv.textContent = message;
    alertDiv.style.display = 'block';
    setTimeout(() => {
        alertDiv.style.display = 'none';
    }, 3000);
}

function getColorForRow(index) {
    const greenShade = Math.min(255, 50 + (index * 20));
    return `rgb(0, ${greenShade}, 0)`;
}
