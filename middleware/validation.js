
// with locals ==> In Express.js, res.locals is an object used to store data that is available to all requests and responses within the same cycle or request-response cycle
// export const validation = (schema) => {
//     return (req, res, next) => {
//         const { error } = schema.validate(req.body, { abortearly: true });
//         console.log(error);
//         if (error) {
//             res.locals.validationError = error.details[0].message;
//         }
//         next()
//     }
// }



export const validation = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body, { abortEarly: true });
        if (error) {
            req.flash('error', error.details[0].message);
        }
        next();
    };
};

