function keisan() {
    text01 = document.getElementById('atai');
    x = parseInt(text01.value);
	document.write('戻るときはブラウザの戻るボタンで' +  "<br>\n");
    document.write('問題' + x + "<br>\n");
    stringx = String(x)
    var text_array = Array.from(stringx);
    var kumiawase = [];
    //document.write('配列' + text_array + "<br>\n");
    var x0 = parseInt(text_array[0]);
    var x1 = parseInt(text_array[1]);
    var x2 = parseInt(text_array[2]);
    var x3 = parseInt(text_array[3]);
    var s01 = [x0,x1,x2,x3]
    var s02 = [x0, x1, x3, x2]
    var s03 = [x0, x2, x1, x3]
    var s04 = [x0, x2, x3, x1]
    var s05 = [x0, x3, x1, x2]
    var s06 = [x0, x3, x2, x1]

    var s07 = [x1, x0, x2, x3]
    var s08 = [x1, x0, x3, x2]
    var s09 = [x1, x2, x0, x3]
    var s10 = [x1, x2, x3, x0]
    var s11 = [x1, x3, x0, x2]
    var s12 = [x1, x3, x2, x0]

    var s13 = [x2, x0, x1, x3]
    var s14 = [x2, x0, x3, x1]
    var s15 = [x2, x1, x0, x3]
    var s16 = [x2, x1, x3, x0]
    var s17 = [x2, x3, x0, x1]
    var s18 = [x2, x3, x1, x0]

    var s19 = [x3, x0, x1, x2]
    var s20 = [x3, x0, x2, x1]
    var s21 = [x3, x1, x0, x2]
    var s22 = [x3, x1, x2, x0]
    var s23 = [x3, x2, x0, x1]
    var s24 = [x3, x2, x1, x0]

    var S =[s01,s02,s03,s04,s05,s06,s07,s08,s09,s10,s11,s12,s13,s14,s15,s16,s17,s18,s19,s20,s21,s22,s23,s24];
    //document.write(s01+ "<br>\n" + s02 + "<br>\n");
    for (const elem of S){
    var text_array = Array.from(elem);
    //document.write('配列' + text_array + "<br>\n");
    var a = parseInt(text_array[0]);
    var b = parseInt(text_array[1]);
    var c = parseInt(text_array[2]);
    var d = parseInt(text_array[3]);
    //document.write('a=' + a + "<br>\n");
    //document.write('b=' + b + "<br>\n");
    //document.write('c=' + c + "<br>\n");
    //document.write('d=' + d + "<br>\n");
    //document.write('a,b,c,d' + "<br>\n");
    if (a + b + c + d == 10) { document.write(elem+"："+"a+b+c+d" + "<br>\n"); }
    if (a + b + c - d == 10) { document.write(elem + "：" +"a+b+c-d" + "<br>\n"); }
    if (a + b + c * d == 10) { document.write(elem + "：" +"a+b+c*d" + "<br>\n"); }
    if ((a + b + c) * d == 10) { document.write(elem + "：" + "(a+b+c)*d" + "<br>\n"); }
    if (a + (b + c) * d == 10) { document.write(elem + "：" + "a+(b+c)*d" + "<br>\n"); }
    if (a + b + c / d == 10) { document.write(elem + "：" +"a+b+c/d" + "<br>\n"); }
    if ((a + b + c) / d == 10) { document.write(elem + "：" + "(a+b+c)/d" + "<br>\n"); }
    if (a + (b + c) / d == 10) { document.write(elem + "：" + "a+(b+c)/d" + "<br>\n"); }

    if (a + b - c + d == 10) { document.write(elem + "：" +"a+b-c+d" + "<br>\n"); }
    if (a + b - c - d == 10) { document.write(elem + "：" +"a+b-c-d" + "<br>\n"); }
    if (a + b - c * d == 10) { document.write(elem + "：" +"a+b-c*d" + "<br>\n"); }
    if ((a + b - c) * d == 10) { document.write(elem + "：" + "(a+b-c)*d" + "<br>\n"); }
    if (a + (b - c) / d == 10) { document.write(elem + "：" +"a+(b-c)/d" + "<br>\n"); }

    if (a + b * c + d == 10) { document.write(elem + "：" +"a+b*c+d" + "<br>\n"); }
    if (a + b * c - d == 10) { document.write(elem + "：" +"a+b*c-d" + "<br>\n"); }
    if (a + b * c * d == 10) { document.write(elem + "：" +"a+b*c*d" + "<br>\n"); }
    if ((a + b) * c * d == 10) { document.write(elem + "：" + "(a+b)*c*d" + "<br>\n"); }
    if (a + b * c / d == 10) { document.write(elem + "：" +"a+b*c/d" + "<br>\n"); }
    if ((a + b) * c / d == 10) { document.write(elem + "：" + "(a+b)*c/d" + "<br>\n"); }

    if (a + b / c + d == 10) { document.write(elem + "：" +"a+b/c+d" + "<br>\n"); }
    if ((a + b) / c + d == 10) { document.write(elem + "：" + "(a+b)/c+d" + "<br>\n"); }
    if (a + b / c - d == 10) { document.write(elem + "：" +"a+b/c-d" + "<br>\n"); }
    if ((a + b) / c - d == 10) { document.write(elem + "：" + "(a+b)/c-d" + "<br>\n"); }
    if (a + b / c * d == 10) { document.write(elem + "：" +"a+b/c*d" + "<br>\n"); }
    if ((a + b) / c * d == 10) { document.write(elem + "：" + "(a+b)/c*d" + "<br>\n"); }
    if (a + b / c / d == 10) { document.write(elem + "：" +"a+b/c/d" + "<br>\n"); }
    if ((a + b) / c / d == 10) { document.write(elem + "：" + "a+b/c/d" + "<br>\n"); }

    if (a - b + c + d == 10) { document.write(elem + "：" +"a-b+c+d" + "<br>\n"); }
    if (a - b + c - d == 10) { document.write(elem + "：" +"a-b+c-d" + "<br>\n"); }
    if (a - b + c * d == 10) { document.write(elem + "：" +"a-b+c*d" + "<br>\n"); }
    if ((a - b + c) * d == 10) { document.write(elem + "：" + "(a-b+c)*d" + "<br>\n"); }
    if (a - (b + c) * d == 10) { document.write(elem + "：" + "a-(b+c)*d" + "<br>\n"); }
    if (a - b + c / d == 10) { document.write(elem + "：" +"a-b+c/d" + "<br>\n"); }
    if ((a - b + c) / d == 10) { document.write(elem + "：" + "(a-b+c)/d" + "<br>\n"); }
    if (a - (b + c) / d == 10) { document.write(elem + "：" + "a-(b+c)/d" + "<br>\n"); }

    if (a - b - c + d == 10) { document.write(elem + "：" +"a-b-c+d" + "<br>\n"); }
    if (a - b - c - d == 10) { document.write(elem + "：" +"a-b-c-d" + "<br>\n"); }
    if ((a - b - c) * d == 10) { document.write(elem + "：" + "(a-b-c)*d" + "<br>\n"); }
    if (a - (b - c) * d == 10) { document.write(elem + "：" + "a-(b-c)*d" + "<br>\n"); }
    if (a - b - c / d == 10) { document.write(elem + "：" +"a-b-c/d" + "<br>\n"); }
    if ((a - b - c) / d == 10) { document.write(elem + "：" + "(a-b-c)/d" + "<br>\n"); }
    if (a - (b - c) / d == 10) { document.write(elem + "：" + "a-(b-c)/d" + "<br>\n"); }

    if (a - b * c + d == 10) { document.write(elem + "：" +"a-b*c+d" + "<br>\n"); }
    if ((a - b) * c + d == 10) { document.write(elem + "：" + "(a-b)*c+d" + "<br>\n"); }
    if (a - b * (c + d) == 10) { document.write(elem + "：" + "a-b*(c+d)" + "<br>\n"); }
    if ((a - b) * (c + d) == 10) { document.write(elem + "：" + "(a-b)*(c+d)" + "<br>\n"); }
    if (a - b * c - d == 10) { document.write(elem + "：" + "a-b*c-d" + "<br>\n"); }
    if ((a - b) * c - d == 10) { document.write(elem + "：" + "(a-b)*c-d" + "<br>\n"); }
    if (a - b * (c - d) == 10) { document.write(elem + "：" + "a-b*(c-d)" + "<br>\n"); }
    if ((a - b) * (c - d) == 10) { document.write(elem + "：" + "a-b*c-d" + "<br>\n"); }
    if (a - b * c * d == 10) { document.write(elem + "：" +"a-b*c*d" + "<br>\n"); }
    if ((a - b) * c * d == 10) { document.write(elem + "：" + "(a-b)*c*d" + "<br>\n"); }
    if (a - b * c / d == 10) { document.write(elem + "：" +"a-b*c/d" + "<br>\n"); }
    if ((a - b) * c / d == 10) { document.write(elem + "：" + "(a-b)*c/d" + "<br>\n"); }

    if (a - b / c + d == 10) { document.write(elem + "：" +"a-b/c+d" + "<br>\n"); }
    if ((a - b) / c + d == 10) { document.write(elem + "：" + "(a-b)/c+d" + "<br>\n"); }
    if (a - b / (c + d) == 10) { document.write(elem + "：" + "a-b/(c+d)" + "<br>\n"); }
    if (a - b / c + d == 10) { document.write(elem + "：" + "a-b/c+d" + "<br>\n"); }
    if (a - b / c - d == 10) { document.write(elem + "：" +"a-b/c-d" + "<br>\n"); }
    if (a - b / c * d == 10) { document.write(elem + "：" +"a-b/c*d" + "<br>\n"); }
    if ((a - b) / c * d == 10) { document.write(elem + "：" + "(a-b)/c*d" + "<br>\n"); }
    if (a - b / c / d == 10) { document.write(elem + "：" +"a-b/c/d" + "<br>\n"); }

    if (a * b + c + d == 10) { document.write(elem + "：" +"a*b+c+d" + "<br>\n"); }
        if (a * (b + c) + d == 10) { document.write(elem + "：" + "a*(b+c)+d" + "<br>\n"); }
        if (a * (b + c + d) == 10) { document.write(elem + "：" + "a*(b+c+d)" + "<br>\n"); }
    if (a * b + c - d == 10) { document.write(elem + "：" +"a*b+c-d" + "<br>\n"); }
        if (a * (b + c) - d == 10) { document.write(elem + "：" + "a*(b+c)-d" + "<br>\n"); }
        if (a * (b + c - d) == 10) { document.write(elem + "：" + "a*(b+c-d)" + "<br>\n"); }
    if (a * b + c * d == 10) { document.write(elem + "：" +"a*b+c*d" + "<br>\n"); }
        if (a * (b + c) * d == 10) { document.write(elem + "：" + "a*(b+c)*d" + "<br>\n"); }
    if (a * b + c / d == 10) { document.write(elem + "：" +"a*b+c/d" + "<br>\n"); }
        if (a * (b + c) / d == 10) { document.write(elem + "：" + "a*(b+c)/d" + "<br>\n"); }

    if (a * b - c + d == 10) { document.write(elem + "：" +"a*b-c+d" + "<br>\n"); }
        if (a * (b - c + d) == 10) { document.write(elem + "：" + "a*(b-c+d)" + "<br>\n"); }
        if (a * (b - c) + d == 10) { document.write(elem + "：" + "a*(b-c)+d" + "<br>\n"); }
    if (a * b - c - d == 10) { document.write(elem + "：" +"a*b-c-d" + "<br>\n"); }
        if (a * (b - c - d) == 10) { document.write(elem + "：" + "a*(b-c-d)" + "<br>\n"); }
        if (a * (b - c) - d == 10) { document.write(elem + "：" + "a*(b-c)-d" + "<br>\n"); }
    if (a * b - c * d == 10) { document.write(elem + "：" +"a*b-c*d" + "<br>\n"); }
        if (a * (b - c) * d == 10) { document.write(elem + "：" + "a*(b-c)*d" + "<br>\n"); }
    if (a * b - c / d == 10) { document.write(elem + "：" +"a*b-c/d" + "<br>\n"); }
        if (a * (b - c) / d == 10) { document.write(elem + "：" + "a*b-c/d" + "<br>\n"); }

    if (a * b * c + d == 10) { document.write(elem + "：" +"a*b*c+d" + "<br>\n"); }
        if (a * b * (c + d) == 10) { document.write(elem + "：" + "a*b*(c+d)" + "<br>\n"); }
    if (a * b * c - d == 10) { document.write(elem + "：" +"a*b*c-d" + "<br>\n"); }
        if (a * b * (c - d) == 10) { document.write(elem + "：" + "a*b*(c-d)" + "<br>\n"); }
    if (a * b * c * d == 10) { document.write(elem + "：" +"a*b*c*d" + "<br>\n"); }
    if (a * b * c / d == 10) { document.write(elem + "：" +"a*b*c/d" + "<br>\n"); }

    if (a * b / c + d == 10) { document.write(elem + "：" +"a*b/c+d" + "<br>\n"); }
        if (a * b / (c + d) == 10) { document.write(elem + "：" + "a*b/c+d" + "<br>\n"); }
    if (a * b / c - d == 10) { document.write(elem + "：" +"a*b/c-d" + "<br>\n"); }
        if (a * b / (c - d) == 10) { document.write(elem + "：" + "a*b/(c-d)" + "<br>\n"); }
    if (a * b / c * d == 10) { document.write(elem + "：" +"a*b/c*d" + "<br>\n"); }
    if (a * b / c / d == 10) { document.write(elem + "：" +"a*b/c/d" + "<br>\n"); }

    if (a / b + c + d == 10) { document.write(elem + "：" +"a/b+c+d" + "<br>\n"); }
    if (a / b + c - d == 10) { document.write(elem + "：" +"a/b+c-d" + "<br>\n"); }
    if (a / b + c * d == 10) { document.write(elem + "：" +"a/b+c*d" + "<br>\n"); }
        if (a / (b + c) * d == 10) { document.write(elem + "：" + "a/(b+c)*d" + "<br>\n"); }
    if (a / b + c / d == 10) { document.write(elem + "：" +"a/b+c/d" + "<br>\n"); }

    if (a / b - c + d == 10) { document.write(elem + "：" +"a/b-c+d" + "<br>\n"); }
    if (a / b - c - d == 10) { document.write(elem + "：" +"a/b-c-d" + "<br>\n"); }
    if (a / b - c * d == 10) { document.write(elem + "：" +"a/b-c*d" + "<br>\n"); }
        if ((a / b - c) * d == 10) { document.write(elem + "：" + "a/b-c*d" + "<br>\n"); }
    if (a / b - c / d == 10) { document.write(elem + "：" +"a/b-c/d" + "<br>\n"); }

    if (a / b * c + d == 10) { document.write(elem + "：" +"a/b*c+d" + "<br>\n"); }
        if (a / b * (c + d) == 10) { document.write(elem + "：" + "a/b*(c+d)" + "<br>\n"); }
    if (a / b * c - d == 10) { document.write(elem + "：" +"a/b*c-d" + "<br>\n"); }
        if (a / b * (c - d) == 10) { document.write(elem + "：" + "a/b*c-d" + "<br>\n"); }
    if (a / b * c * d == 10) { document.write(elem + "：" +"a/b*c*d" + "<br>\n"); }
    if (a / b * c / d == 10) { document.write(elem + "：" +"a/b*c/d" + "<br>\n"); }

    if (a / b / c + d == 10) { document.write(elem + "：" +"a/b/c+d" + "<br>\n"); }
    if (a / b / c - d == 10) { document.write(elem + "：" +"a/b/c-d" + "<br>\n"); }
    if (a / b / c * d == 10) { document.write(elem + "：" +"a/b/c*d" + "<br>\n"); }
    if (a / b / c / d == 10) { document.write(elem + "：" +"a/b/c/d" + "<br>\n"); }
}
}

