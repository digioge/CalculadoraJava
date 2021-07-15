function _calcular() {
    var _op = document.getElementById('operacao').value;
    var _num1 = document.getElementById('n1').value;
    var _num2 = document.getElementById('n2').value;
    var _resultado = document.getElementById('result').value;


    _num1 = parseFloat(_num1);
    _num2 = parseFloat(_num2);


    if (_num1 == '' || _num1 == null || _num2 == '' || _num2 == null) {
        alert('Por favor preencha todos os campos');
        return false;
    }

    var _resultado = 0;

    switch (_op) {
        case '1':
            _resultado = _num1 - _num2;
            break;
        case '2':
            _resultado = _num1 + _num2;
            break;
        case '3':
            _resultado = _num1 * _num2;
            break;
        case '4':
            _resultado = _num1 / _num2;
            break;

        default:
            alert('Selecione uma operação');
            return false;
    }
    _resultado = parseFloat(_resultado);

    alert(_op + " " + _num1 + " " + _num2 + " " + _resultado);
    document.getElementById('result').value = _resultado;
}