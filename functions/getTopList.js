const axios = require('axios').default;

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
const getTopList = async (req, res) => {

    const topList = await axios.get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=BRL')

    const dados = []
    for (const item of topList.data.Data) {
        const infoCrypto = {
            id: item.CoinInfo.Id,
            nome: item.CoinInfo.Name,
            nomeCompleto: item.CoinInfo.FullName,
            img: 'https://www.cryptocompare.com' + item.CoinInfo.ImageUrl,
            preco: item.RAW.BRL.PRICE
        }
        dados.push(infoCrypto);
    }

    res.send(dados);
}

module.exports = { getTopList };
