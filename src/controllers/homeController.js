import mysql from 'mysql2';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'mangalon'
});

const handleHome = (req, res) => {
    res.render('home', { title: 'Home' });
};

const handleUser = (req, res) => {
    res.render('user', { title: 'User' });
};

const handleCreateUser = (req, res) => {

    const { name, email, password } = req.body;
    connection.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, password], (error, results) => {
        if (error) {
            res.status(500).json({ message: 'Internal server error' });
            return;
        }
        res.status(201).json({ message: 'Create user successfully' });
    });

};

module.exports = { handleHome, handleUser, handleCreateUser };
