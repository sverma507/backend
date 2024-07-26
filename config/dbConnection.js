const mongoose = require('mongoose');

const uri = 'mongodb+srv://sverma70568:QyqzHz71H3ypnmMc@cluster0.ttq3xbd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
// const uri='mongodb+srv://sverma70568:<password>@cluster0.sa8v2fw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
mongoose.set('debug', true); 
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});
