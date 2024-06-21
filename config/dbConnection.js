const mongoose = require('mongoose');

const uri = 'mongodb+srv://sverma70568:03qKVtsMrwAml5LX@cluster0.ttq3xbd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
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
