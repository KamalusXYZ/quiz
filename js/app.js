let suivant = true
let score = 0

let boxquiz = document.querySelector(".boxquiz")
let boutonA = document.querySelector(".boxa")
let boutonB = document.querySelector(".boxb")
let boutonC = document.querySelector(".boxc")
let boutonD = document.querySelector(".boxd")

let reponse = ""

const quiz = () => {
    
const cliquerA = () =>{ 

    reponse = "a"
    console.log("a")
    console.log(reponse)
 
}
const cliquerB = () =>{ 

    reponse = "b"
    console.log("b")
 
}
const cliquerC = () =>{ 

    reponse = "c"
    console.log("c")
 
}
const cliquerD = () =>{ 

    reponse = "d"
    console.log("d")
 
}

    

    for (i=0 ; i<tableauQuestions.length ; ++i){
        
        if (suivant === true){
            suivant = false     

        let p = document.querySelector("h2")


        
        p.innerHTML = tableauQuestions[i].question
        boutonA.innerHTML = tableauQuestions[i].reponseA
        boutonB.innerHTML = tableauQuestions[i].reponseB
        boutonC.innerHTML = tableauQuestions[i].reponseC
        boutonD.innerHTML = tableauQuestions[i].reponseD
        

        boutonA.onclick = cliquerA
        boutonB.onclick = cliquerB
        boutonC.onclick = cliquerC
        boutonD.onclick = cliquerD
        
       
        if(reponse == tableauQuestions[i].reponseCorrecte){
            console.log(reponse)
           
             score = score + 1
             suivant = true
            
            }
        

        
    



            


        }


    

        
    }
    const verification = () => {

        

    }
}


quiz()