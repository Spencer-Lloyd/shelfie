let item = [
    {
        Image: '',
        Name: '',
        Price: '',
        id: 1
    },
    {
        Image: '',
        Name: '',
        Price: '',
        id: 2
    },
]

module.exports = {

    createItem(req, res) => {
        const { Image } = req.body
        let newItem = {
            Image,
            id
        }
        id++
        item.push(newItem)
        res.status(200).send(item)
    }

}