const express = require('express');
const bodyparser = require('body-parser');


const ApplicationTypeRoute = require('./routes/ApplicationCategoryRoute');
const ApplicationRoute = require('./routes/ApplicationRoute');
const BankDetailsRoute = require('./routes/BankAccountRoute');
const CastCategory = require('./routes/CastCategoryRoute');
const CertificateDashboard = require('./routes/CertificateDashboardRoute');
const CertificateDocuments = require('./routes/CertificateDocumentsRoute');
const Certificate = require('./routes/CertificateRoute');
const CertificateType = require('./routes/CertificateTypeRoute');
const CitizenRoute = require('./routes/CitizenRoute');
const Colony = require('./routes/ColonyRoute');
const Finance = require('./routes/FinancialYearRoute')

const app = express();
app.use(bodyparser.json());


app.use('/application-type' , ApplicationTypeRoute);
app.use('/application', ApplicationRoute);
app.use('/bank', BankDetailsRoute);
app.use('/cast' , CastCategory);
app.use('/certificateDashboard' , CertificateDashboard);
app.use('/certificateDocuments',CertificateDocuments);
app.use('/certificate' , Certificate);
app.use('/certificate-type' , CertificateType);
app.use('/citizen', CitizenRoute);
app.use('/colony',Colony);
app.use('/finance',Finance);


app.get('/', (req, res) => {
    res.status(200).json({
        message: "Application is successfully running.",
        code: 200,
        status: "done"
    })
});


app.listen(3000, () => {
    console.log("Server Started...",3000);
})