// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDGIUHqIYcMWJru32k7Hd_gt3hfi5-42Hg",
    authDomain: "demonstration-project-369716.firebaseapp.com",
    databaseURL: "https://demonstration-project-369716-default-rtdb.firebaseio.com",
    projectId: "demonstration-project-369716",
    storageBucket: "demonstration-project-369716.appspot.com",
    messagingSenderId: "879845157063",
    appId: "1:879845157063:web:304682a11d5a24b3ebf6e2",
    measurementId: "G-MRF1L0HK0W"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Start the function

const admin = require('firebase-admin');
admin.initializeApp({
    credential: admin.credential.cert({
        "MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDI7UhJohXY3bOt\n/lvOC3tnmzWMYFG5gwz2JHblBNi/Zs+5Yr8y+TblIsb1/uiniQ0VMXJ+04r2jm9x\nCPbawPJOIBWsLOc2bmbheoAMt2ou8tiSx5xs2Ixyp7B395QMnRhB5d4OGmH72h36\nCh1kqrTT/+hHHroU/50GqVhXWUo6WJSI5zFitdOUU1a7GX5BJ77T+cow9lXaw/45\nW7oWxiJNJUub/ER7uJlzdXZkhboRr20TmQQuVbr7sXB3ztFL0j+fltOK3h1RQFO+\naynJZKFbVIWwkx15kX4FZk5QG5qkfxrdQTqdTTgHeQrfin5zE8lp/a9JZwkaCJpp\nfmW49uT9AgMBAAECggEAPn7zk5ebRQOcbjumEX4nya+QpdOVx+Z3wx3Pb2elBU+0\nv7xzrSawCPBaw0wg0G+EBroFG2awHAVsq1N2+M63703yf8XNuvP3Ax4nswzfta+q\nZmk5AfAPK2B2NrJmtc+tKl4Vxfw1yvDqjwnTX6rrKN+5v1lS1tI05MwKosyullvG\nHGOyi048oNmssKFkCCgQPxGTfqXhhN6Skd/KKX7kiERt9zEV+IOLRVKz6o3PQzUO\ndtx3q57FpmOlg7zSRu6TkYoRC+xXdbRYWUyyv2SAJiCpolh+RJf4o5tVMGCohYII\nN3XbWWdhUHc2JbRrf/bx7z7lv7QhEqnLfdiM3BHyXwKBgQD8h0EWgKl36/DIJVO+\nFQI5svjaILfwRDchnAeBdzs+WqDXcw/r4Xd/4vDgTCybHqoCQRmfr5bopC44R+PK\ncHrIcDgJD1b4nGaAO/uVG3xYWiK12ndovuSKlwsK8+l+W7iHvPdaYY6XqPxNVvvO\nzowVnW7C85ck0OBplRCTGFpf8wKBgQDLsGwnhFH4kdHZtnrv8dLKrs+WjKtT49Jp\nbzQCDXxcHKbftB2Kz3iUe61kcQ19QFcYk8fxZqveDPlKPddfWPd/0umWS6mPxIHw\n015xq9Nn8oWzI9NF5hgEGGZXo7sx2f1aMsFI/MK0ikKC3GKKSeh/rB8jtf5MZhsr\n/jRbxYrTTwKBgQDt+oSjMTMDuYzbARpPGrtTJs+PuJ+/RHn0KXeFUZi6JWxIPb32\nXC9ijLrVldO/h4FNyI3eR/peWULZdR49TAzZ0a9tElCyz6llFaH8nb9r/92QJUa8\nppD37mnQs5YKp2NaQAGW4jMfx3elZuC8vzeSsx+Lh0Wbw2CI/5p0FNIucwKBgHqM\nbKXh4IeTBBTey1xtvAsh3deQTswsN74jn8DUaEvrGSNidJu9c6iyOIJD2n/PJBev\nYg6FXUY9vAbE6j19g3suZEd+wkezTRKduSbe4FSb/4DmPwjBBRYBsCFuawP1SY7p\nFo1ZNbP1s0qUWd0l1nJqFlof9x30GMkBKnNEiN/VAoGAGzIr8DrYAZGufabTrnJw\nu0X5tiT9CJP6J/RUqpBejNTC///xpPqO9pCGQ48C/1pisS+Jw4EuCu6KKBTWYIJd\nSh95Qt0dpfI3M2m2/8OqIWGZ3SerDE7qYA2ZdumGyQt2OYT035n3SG7KIX0rBs+K\nKcjosOBP4L80IFLK1MAauf8"
        }),
    databaseURL: "https://demonstration-project-369716-default-rtdb.firebaseio.com"
});
const db = admin.firestore();
exports.storeFormDetails = (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let subject = req.body.subject;
    let message = req.body.message;
    db.collection("formDetails").add({
            name: name,
            email: email,
            subject: subject,
            message: message
        })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding doc: ", error);
        });
};