const CoronaService = require("../services/CoronaService")
const {format,sub} = require("date-fns")
exports.getSixMonths = async (req,res) => {
    const country = 'brazil'
    const date = new Date()
    const initialDate = format( sub(date,{months: 1}), "yyyy-MM-dd" )
    const finalDate = format(date,"yyyy-MM-dd")
    const dadosCorona = await CoronaService.getCases(country,initialDate,finalDate)
    return res.status(200).json(dadosCorona.data)
}

exports.getWeek = async (req,res) => {
    const country = 'brazil'
    let {qtdWeeks} = req.params  // qtd de semanas pra trás
    qtdWeeks = Number(qtdWeeks)
    const date = new Date()
    const initialDate = format( sub(date,{weeks: qtdWeeks+1}), "yyyy-MM-dd" )
    const finalDate = format( sub(date,{weeks: qtdWeeks, days: 1}) ,"yyyy-MM-dd")
    console.log(initialDate,finalDate)
    const dadosCorona = await CoronaService.getCases(country,initialDate,finalDate)
    return res.status(200).json(dadosCorona.data)
}