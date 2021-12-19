import dotenv from 'dotenv'
dotenv.config()

export default {
    port: process.env.PORT || '4000',
    secret: process.env.SECRET_JWT || 'reset'
}