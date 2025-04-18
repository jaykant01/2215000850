const { addAndCalculate } = require("../services/numberService");

function postAverage(req, res) {
    const { number, id } = req.body;

    if (typeof number !== 'number' || typeof id !== 'string') {
        return res.status(400).json({ error: "Invalid input" });
    }

    const avg = addAndCalculate(number, id.toLowerCase());

    if (avg === null)
        return res.status(204).json({ message: "Number not qualified" });

    res.status(200).json({ average: avg });
}

module.exports = { postAverage };
