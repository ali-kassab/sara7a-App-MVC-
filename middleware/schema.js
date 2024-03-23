import joi from 'joi'

export const signUp = joi.object({
    name: joi.string().min(2).max(20).required(),
    email: joi.string().email().min(2).max(20).required(),
    password: joi.string().min(2).max(20).required(),
    rePassword: joi.string().valid(joi.ref('password')).min(2).max(20)
})
export const login = joi.object({
    email: joi.string().email().min(2).max(20).required(),
    password: joi.string().min(2).max(20).required(),
})
