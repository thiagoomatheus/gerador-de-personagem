"use server"

export async function generate(data: FormData) {

    let prompt = ""
    
    switch (data.get("tipo")) {
        case "celebridade":
            prompt = "Quero jogar com meus amigos um jogo imitando o programa Escolinha Improvável de Os barbixas. Quero que me retorne 5 personagens inusitados para fazermos o jogo. Espero receber personagens com combinações inusitadas. Os personagens devem ser um celebridade, adicionando uma característica inusitada."
            break;
        case "objeto":
            prompt = "Quero jogar com meus amigos um jogo imitando o programa Escolinha Improvável de Os barbixas. Quero que me retorne 5 personagens inusitados para fazermos o jogo. Espero receber personagens com combinações inusitadas. Os personagens devem ser um objeto, adicionando uma característica inusitada."
            break;
        case "profissão":
            prompt = "Quero jogar com meus amigos um jogo imitando o programa Escolinha Improvável de Os barbixas. Quero que me retorne 5 personagens inusitados para fazermos o jogo. Espero receber personagens com combinações inusitadas. Os personagens devem ter uma profissão, adicionando uma característica inusitada."
            break;
    }

    const content = {
      "contents": [{
        "parts":[{
          "text": prompt
        }]
      }]
    }

    const result = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.0-pro:generateContent?key=${process.env.GEMINI_API_KEY}`, { 
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(content),
    })

    const response = await result.json()
    const text = response.candidates[0].content.parts[0].text
    
    return text
}