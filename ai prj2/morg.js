document.getElementById("mortgage-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const amount = parseFloat(document.getElementById("amount").value);
    const annualRate = parseFloat(document.getElementById("rate").value) / 100;
    const years = parseInt(document.getElementById("years").value);

    const monthlyRate = annualRate / 12;
    const totalPayments = years * 12;

    const monthlyPayment =
        (amount * monthlyRate) /
        (1 - Math.pow(1 + monthlyRate, -totalPayments));

    const totalPaid = monthlyPayment * totalPayments;

    document.getElementById("results").innerHTML = `
      <h2>תוצאה</h2>
      <p>החזר חודשי: ₪${monthlyPayment.toFixed(2)}</p>
      <p>סה"כ תשלומים: ₪${totalPaid.toFixed(2)}</p>
    `;
});
