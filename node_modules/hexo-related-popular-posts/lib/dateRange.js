module.exports.getDateRange = (inDateRange) => {
    let nDate = new Date()
    let endDateMSec = nDate.getTime() - 24*60*60*1000
    let startDateMSec = endDateMSec - inDateRange*24*60*60*1000
    return [getDateStr(startDateMSec), getDateStr(endDateMSec)]
}

module.exports.getDateStrFromDate = (inDate) => {
    if (!inDate) return '0000-00-00'
    return getDateStr(inDate.getTime())
}

module.exports.getYesterdayDateStr = () => {
    let nDate     = new Date()
    let yDateMSec = nDate.getTime() - 24*60*60*1000
    return getDateStr(yDateMSec)
}

let getDateStr = (inUnixDateTime) => {
    let d       = new Date(inUnixDateTime)
    let myYear  = d.getFullYear()
    let myMonth = d.getMonth() + 1
    let myDate  = d.getDate()
    return String(myYear) +'-'+ zeroPadding(myMonth, 2) +'-'+ zeroPadding(myDate, 2)
}

let zeroPadding = (inNum, inDigitsNum) => {
    let num
    if ( !inNum ) {
      num = 0
    } else {
      num = Number(inNum)
    }
    let zeroString = ''
    for (let i=0; i<inDigitsNum; i++) {
        zeroString += '0'
    }
    return (zeroString + String(num)).slice(-1*inDigitsNum)
}
