function verifyRow(to_check){
    for (let i = 0; i < to_check.length; i++){
        if (verifyArray(to_check[i]) === false){
            console.log("Erreur à la ligne " + (i+1) + " : " + to_check[i]);
        }
    }
}

//Cas d'erreur
let tab1 = [[1,2,3,4,5,6,7,8,9],[1,2,3,4,3,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]];

//Cas sans erreurs
let tab2 = [[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]];

console.log(verifyRow(tab1));
console.log(verifyRow(tab2));

function verifyColumn(to_check) {
    for (let j = 0; j < 9; j++) {
        let col = [];
        for (let i = 0; i < 9; i++) {
            col.push(to_check[i][j]);
        }
        if (verifyArray(col) === false){
            console.log("Erreur à la colonne " + (j+1) + " : " + col);
        }
    }
}

//Cas sans erreurs
let tab3 = [[1,1,1,1,1,1,1,1,1],[2,2,2,2,2,2,2,2,2],[3,3,3,3,3,3,3,3,3],[4,4,4,4,4,4,4,4,4],[5,5,5,5,5,5,5,5,5],[6,6,6,6,6,6,6,6,6],[7,7,7,7,7,7,7,7,7],[8,8,8,8,8,8,8,8,8],[9,9,9,9,9,9,9,9,9]];

//Cas d'erreurs
let tab4 = [[1,1,1,1,1,1,1,1,1],[2,2,2,2,2,2,2,2,2],[3,3,3,3,3,3,3,3,3],[4,4,4,4,4,4,4,4,4],[5,5,5,5,5,5,5,5,5],[6,6,6,6,6,6,6,6,6],[7,7,7,7,7,5,7,7,7],[8,8,8,8,8,8,8,8,8],[9,9,9,9,9,9,9,9,9]];

console.log(verifyColumn(tab3));
console.log(verifyColumn(tab4));

function verifyRegion(to_check) {
    let cpt_region = 0;
    for (let blockRow = 0; blockRow < 3; blockRow++) {
        for (let blockCol = 0; blockCol < 3; blockCol++) {
            let region = [];
            cpt_region++;
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    region.push(to_check[blockRow*3 + i][blockCol*3 + j]);
                }
            }
            if (verifyArray(region) === false) {
                console.log("Erreur à la région " + cpt_region + " : " + region);
            }
        }
    }
}

// On ajoute une nouvelle erreur dans notre exemple.
let bad_tab = convert1DTo2D(array_number);
bad_tab[1][1] = 5;

console.log(verifyRegion(bad_tab));

//NOTE: Je n'ai pas eu le temps d'afficher les messages d'erreurs sur la page sous forme de tableau. Ils se trouvent dans la console.

