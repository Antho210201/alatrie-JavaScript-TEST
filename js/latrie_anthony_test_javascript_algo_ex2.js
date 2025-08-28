function verifyArray(A){
    //On vérifie que A est bien un tableau de taille 9
    if (!Array.isArray(A) || A.length != 9){
        return false;
    }

    let tab_verify = [];
    for (let i = 0; i < A.length; i++){
        //Chaque élément doit être un nombre entre 1 et 9
        if (typeof A[i] !== "number" || A[i] < 1 || A[i] > 9){
            return false;
        }
        //On vérifie si la valeur n'est pas identique à l'une des valeurs précédentes
        if (tab_verify.includes(A[i])){
            return false;
        }

        //On place la valeur dans le tableau des places précédentes pour les prochains nombres
        tab_verify.push(A[i]);

    }
    return true;

}


let ex1 = verifyArray(10); //Pas de tableau
let ex2 = verifyArray([1,2,3]); //Tableau pas de la bonne taille
let ex3 = verifyArray([1,2,3,4,"a",6,7,8,9]); //Chaine de caractères disséminée
let ex4 = verifyArray([1,2,2,4,5,6,7,8,9]); //2 valeurs identiques
let ex5 = verifyArray([1,2,3,4,5,6,7,8,9]); //Ligne correct
let ex6 = verifyArray([1,2,3,4,5,6,7,8,99]);    //Nombre supérieur à 9


console.log(ex1);
console.log(ex2);
console.log(ex3);
console.log(ex4);
console.log(ex5);
console.log(ex6);