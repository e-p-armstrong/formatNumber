function formatNumber(num){
    const resultArray = []
    const splitAtPeriod = num.toString().split('.');
    const workingNumber = splitAtPeriod[0]
    const endDigits = workingNumber.length % 3
    const workingNumberArray = workingNumber.split('')
    if (endDigits !== 0){
        resultArray.push((workingNumberArray.splice(0,endDigits)).join(''))
    }
    const timesToIterate = Math.floor(workingNumber.length / 3)
    for (let n=0; n < timesToIterate; n += 1){
        resultArray.push((workingNumberArray.splice(0,3)).join(''))
    }
    let resultString = resultArray.join()
    return splitAtPeriod[1] ? resultString + '.' + splitAtPeriod[1] : resultString
}

console.log(formatNumber(1234.5))