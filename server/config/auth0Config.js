import {auth} from 'express-oauth2-jwt-bearer'

const jwtCheck = auth({
    audience: "https://real-estate-app-65d2.onrender.com",
    issuerBaseURL: "dev-h5qcb7rzdx0k8liy.us.auth0.com",
    tokenSigningAlg: "RS256"
})

export default jwtCheck