//Tableau à deux dimensions (9*9)
let to_verify = new Array(9);
for (let cpt = 0; cpt < to_verify.length; cpt++){
    to_verify[cpt] = new Array(9);
}
console.log(to_verify);

function convert1DTo2D(table_digits, to_check = to_verify){
    for (let i = 0; i < table_digits.length; i++){
        for (let j = 0; j < table_digits[i].length; j++){
            //On ignore les espaces qui se trouvent aux indices impairs
            if (j % 2 === 0){   
                to_check[i][j/2] = Number(table_digits[i][j]);

            }
        }

    }
    return to_check;
}


//On utilise une chaine de caractères pour représenter les instructions en HTML
function convert2DInHTML(to_be_verified){
    let html = "<table border='1' cellspacing='0' cellpadding='5'>";
    for (let i = 0; i < to_be_verified.length; i++){
        html += "<tr>";
        for (let j = 0; j < to_be_verified[i].length; j++){
            html += "<td>" + to_be_verified[i][j] + "</td>";
        }
        html += "</tr>"
    }
    html += "</table>";
    document.getElementById("output").innerHTML = html;
}


