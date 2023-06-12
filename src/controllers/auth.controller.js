'use strict';

class AuthController {
    signUp = async (req, res, next) => {
        try {
            return res.status(201).json({
                code: '201',
                metadata: {userId: 1}
            });
        } catch (error) {
            next(error);
        }
    };
}

module.exports = new AuthController();