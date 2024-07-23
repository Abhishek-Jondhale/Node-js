const { AuthRoute } = require('./authenticate.route');

AuthRoute.post('/login', (req, res) => {


    const data = await infoService.save(req.body);
    console.log(req.body)
        .then(user => {
            if (user === null) {
                res.status(500).json({
                    message: 'Login failed',
                    code: 500,
                    status: 'failed'
                });
            } else {
                res.status(200).json({
                    message: 'login successful',
                    status: 'success',
                    code: 200
                });
            }
        });
});
