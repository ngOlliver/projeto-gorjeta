let tipAmount = document.getElementById('restip');

let totalBill = document.getElementById('resbill');

const percentage = () => {
    let tip = Number(document.querySelector('input#tip').value);

    document.getElementById('percentage').innerText = `${tip}%`;
}

const totalToPay = () => {
    let bill = Number(document.getElementById('bill').value);
        
    let tip = Number(document.querySelector('input#tip').value);
    
    let theTip = bill * (tip / 100);
    
    tipAmount.innerHTML = `${theTip.toFixed(2).toLocaleString().replace('.', ',')}`;

    let theTotalBill = bill * (tip / 100 + 1);

    totalBill.innerHTML = `${theTotalBill.toFixed(2).toLocaleString().replace('.', ',')}`;
}

document.getElementById('bill').addEventListener('input', totalToPay);
document.querySelector('input#tip').addEventListener('input', totalToPay);

percentage();