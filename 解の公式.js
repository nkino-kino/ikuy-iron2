function keisan() {
    var text01 = document.getElementById('atai1');
    var text02 = document.getElementById('atai2');
    var text03 = document.getElementById('atai3');
    var a=parseFloat(text01.value);
    var b=parseFloat(text02.value);
    var c=parseFloat(text03.value);
    if ((b * b - 4 * a * c)<0){
        document.getElementById('kotae1').innerHTML = "解なし";
        document.getElementById('kotae2').innerHTML = "解なし";
    }
    else{
    var z1 = (-1*b - ((b * b - 4*a*c)**0.5)) / (2*a);
    var z2 = (-1*b + ((b * b - 4*a*c)**0.5)) / (2*a);
    var z3 = z1.toFixed(3);
    var z4 = z2.toFixed(3);
    document.getElementById('kotae1').innerHTML = z3;
    document.getElementById('kotae2').innerHTML = z4;
    }
}