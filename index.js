function multiple(){
    for (var i = 1; i <= 9; i++) {
    document.write("<tr>");
    for (var j = 1; j <= 9; j++) {
        document.write("<td>" + i + " x " + j + " = " + (i*j) + "</td>");
    }
    document.write("</tr>");
}
}