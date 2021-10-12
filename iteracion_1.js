//1.1

const agify = async (){
    const result= await fetch("https://api.agify.io/?name=michael")
    const resultToJson = await result.json()
    console.log(resultToJson)
}
agify()

//1.2
