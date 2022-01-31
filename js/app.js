let suivant = false
const quiz = () => {

    for (i=0 ; i<tableauQuestions.length ; ++i){
        let p = document.querySelector("h2")
        let boxquiz = document.querySelector(".boxquiz")
        let reponseA = document.querySelector(".boxa")
        let reponseB = document.querySelector(".boxb")
        let reponseC = document.querySelector(".boxc")
        let reponseD = document.querySelector(".boxd")

        let suivant = false
        p.innerHTML = tableauQuestions[i].question
        reponseA.innerHTML = tableauQuestions[i].reponseA
        reponseB.innerHTML = tableauQuestions[i].reponseB
        reponseC.innerHTML = tableauQuestions[i].reponseC
        reponseD.innerHTML = tableauQuestions[i].reponseD

        
    }
    const verification = () => {

        

    }
}


quiz()