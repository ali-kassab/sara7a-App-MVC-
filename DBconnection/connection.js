import mongoose from 'mongoose';
export const DBconnection = () => {
    mongoose.connect(process.env.CONNECTION).then(() => {
        console.log('database connected');
    }).catch((error) => {
        console.log(error);
    })
}