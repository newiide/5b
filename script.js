function calculateArea() {
    const side1 = parseFloat(document.getElementById('side1').value);
    const side2 = parseFloat(document.getElementById('side2').value);
    const side3 = parseFloat(document.getElementById('side3').value);
  
    const s = (side1 + side2 + side3) / 2;
  
    const area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
  
    if (!isNaN(area)) {
      document.getElementById('result').innerText = `Площа трикутника: ${area.toFixed(2)}`;
    } else {
      document.getElementById('result').innerText = 'Введіть коректні значення сторін!';
    }}



function calculateAreaByAngle() {
    const side4 = parseFloat(document.getElementById('side4').value);
    const side5 = parseFloat(document.getElementById('side5').value);
    const angle = parseFloat(document.getElementById('angle').value); 

    const angleInRadians = angle * (Math.PI / 180);

    const area2 = 0.5 * side4 * side5 * Math.sin(angleInRadians); 

    if (!isNaN(area2)) {
      document.getElementById('result2').innerText = `Площа трикутника: ${area2.toFixed(2)}`;
    } else {
      document.getElementById('result2').innerText = 'Введіть коректні значення сторін та кута!';
    }
}


function calculateAreaBySideAndHeight() {
  const side6 = parseFloat(document.getElementById('side6').value);
  const height = parseFloat(document.getElementById('height').value);

  const area3 = 0.5 * side6 * height;

  if (!isNaN(area3)) {
    document.getElementById('result3').innerText = `Площа трикутника: ${area3.toFixed(2)}`;
  } else {
    document.getElementById('result3').innerText = 'Введіть коректні значення сторони і висоти!';
  }
}



function calculateAreaBySidesAndRadius() {
  const side7 = parseFloat(document.getElementById('side7').value);
  const side8 = parseFloat(document.getElementById('side8').value);
  const side9 = parseFloat(document.getElementById('side9').value);
  const radius = parseFloat(document.getElementById('radius').value);

  const area4 = (side7 * side8 * side9)/(4*radius);

  if (!isNaN(area4)) {
    document.getElementById('result4').innerText = `Площа трикутника: ${area4.toFixed(2)}`;
  } else {
    document.getElementById('result4').innerText = 'Введіть коректні значення сторонін і радіуса!';
  }
}