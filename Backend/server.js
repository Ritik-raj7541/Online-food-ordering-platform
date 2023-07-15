const express = require('express') ;

const app = express() ;

app.use(express.json()) ;
app.use('/api/customer', require('./routes/customerRoutes'));
app.use('/api/admin', require('./routes/adminRoutes')) ;

app.listen(5000, (req, res)=>{
      console.log('port is running on port 5000');
})