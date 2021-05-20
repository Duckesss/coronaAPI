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