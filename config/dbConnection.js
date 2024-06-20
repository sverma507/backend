const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://sverma70568:Devil@507@cluster0.bscxe03.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});