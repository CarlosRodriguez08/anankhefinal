function validateForm() {
  var formInputs = {
    materia: document.getElementById("materia1").value,
    profesor: document.getElementById("profesor1").value,
    carrera: document.getElementById("carrera1").value
  };
  
  var pattern = /\D/;
  var atLeastOneFilled = false;
  
  for (const input in formInputs) {
    if (pattern.test(formInputs[input])) {
      alert("No se permiten números en los campos de materia, profesor y carrera");
      return false;
    }
    if (formInputs[input]) {
      atLeastOneFilled = true;
    }
  }
  if (!atLeastOneFilled) {
    alert("Por favor llena al menos un campo del formulario");
    return false;
  }
  location.href='grupos aleatorios/grupos.html';
  return true;
}
