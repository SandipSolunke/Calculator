
const handleSubmit = () => {
    let expression=calcMain.displayMSG.value

    if (expression.includes("!")) {

        console.log("fact")
        size = expression.length;
        n = Number(expression.substring(0, size - 1));
        f = 1;

        for (i = 2; i <= n; i++)
            f = f * i;
            calcMain.displayMSG.value = f;
    }

    else if (expression.includes("%")) {
        size = expression.length;
        n = Number(calcMain.displayMSG.value.substring(0, size - 1));
        calcMain.displayMSG.value = n / 100;
    }

    else calcMain.displayMSG.value = eval(expression);
}