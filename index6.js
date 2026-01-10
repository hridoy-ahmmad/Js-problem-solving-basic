// remove duplicate string

function removeDuplicate(str) {
    let result = []
    for (let i = 0; i < str.length; i++){
        if(!result.includes(str[i])){
            result.push(str[i])
        }
    }
    return result.toString()
}
console.log(removeDuplicate('aaaabbbbcccccddddd'));
