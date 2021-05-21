const CoronaService = require("../services/CoronaService")
const {format, sub, endOfMonth, startOfMonth} = require("date-fns")
const country = 'brazil'
const date = new Date()

exports.getSixMonths = async (req,res) => {
    const initialDate = format( sub(date,{months: 1}), "yyyy-MM-dd" )
    const finalDate = format(date,"yyyy-MM-dd")
    const dadosCorona = await CoronaService.getCases(country,initialDate,finalDate)
    return res.status(200).json(dadosCorona.data)
}

exports.getWeek = async (req,res) => {
    let {qtdWeeks} = req.params  // qtd de semanas pra trás
    qtdWeeks = Number(qtdWeeks)
    const initialDate = format( sub(date,{weeks: qtdWeeks+1}), "yyyy-MM-dd" )
    const finalDate = format( sub(date,{weeks: qtdWeeks, days: 1}) ,"yyyy-MM-dd")
    const dadosCorona = await CoronaService.getCases(country,initialDate,finalDate)
    return res.status(200).json(dadosCorona.data)
}

exports.getLastMonth = async (req,res) => {
    const initialDate = format( startOfMonth( sub(date,{months: 1}) ) ,"yyyy-MM-dd")
    const finalDate = format( endOfMonth( sub(date,{months: 1}) ) ,"yyyy-MM-dd")
    let dadosCorona = await CoronaService.getCases(country,initialDate,finalDate)
    if(req.query.full){
        const mortesCorona = await CoronaService.getDeaths(country,initialDate,finalDate)
        dadosCorona = dadosCorona.data.concat(mortesCorona.data)
    }
    return res.status(200).json(dadosCorona)
}