function generatePDF() {
    const { jsPDF } = window.jspdf;
    const input = document.getElementById('userInput').value;
    const output = document.getElementById('output');
    
    // Render MathJax
    output.innerHTML = input;
    MathJax.typesetPromise([output]).then(() => {
        const pdf = new jsPDF();
        pdf.html(output, {
            callback: function (pdf) {
                pdf.save('math.pdf');
            }
        });
    });
}
