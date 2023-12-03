const BooksModels = require('../models/books');
const getAllBooks = async  (req, res) => {
    try {
        const [data] = await BooksModels.getAllBooks();
        res.json({
            message: "Get All Books Success",
            data: data
        });
    }catch (error) {
        res.status(500).json({
            message: 'Server error',
            serverMessage: error,
        })
    }   
};

const createNewBooks = (req, res) => {
    console.log(req.body);
    res.json({
        message: "Create Books Success",
        data: req.body
    });
};

const updateBooks = (req, res) => {
    const { id } = req.params;
    console.log(req.params);
    res.json({
        message: "Update Books Success",
        data: req.body,
    });

};

const deleteBooks = (req, res) => {
    const { id } = req.params;
    res.json ({
        message: "Delete Books Success",
        data: {
            id: id,
            name: "Cerita cintaku",
            author: "Dimas Didan Febianto",
            year: "2022",
        }
    })
}

module.exports = {
    getAllBooks,
    createNewBooks,
    updateBooks,
    deleteBooks
}