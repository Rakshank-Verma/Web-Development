const registerUser = (req, res)=>{

    const userName = req.body.username;
    const userPassword = req.body.password;
    console.log(userName);


    res.json({
        success: true,
        name: userName,
        password: userPassword,
    });
}

module.exports = registerUser;