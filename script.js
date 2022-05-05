function compute()
{
    //Validate principal entered should be positive number
    var principal = document.getElementById("principal").value;
    if (principal <= 0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }

    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var amount = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);

    document.getElementById("result").innerHTML = 
        "If you deposit \<mark\>" + principal + 
        "\<\/mark\>,\<br\> at an interest rate of \<mark\>" + rate + 
        "%\<\/mark\>,\<br\> you will receive an amount of \<mark\>" + amount + 
        "\<\/mark\>,\<br\>in the year \<mark\>" + year + "\<\/mark\>\<br\>";
}

// Update Interest Rate text string
function updateRate() {

    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML = rateval;

}

