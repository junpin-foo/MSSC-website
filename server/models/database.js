const { initializeApp } = require('firebase/app')
const { getFirestore, doc, setDoc, collection, getDocs, query, where } = require('firebase/firestore')

// Initialize Firebase

let app;
let firestoreDb;

const initializeFirebaseApp = () => {
    try{
        app = initializeApp(firebaseConfig);
        firestoreDb = getFirestore();
        return app;
    } catch (error) {
        console.error('Error initialize firbase:', error);
    }
}

const getFirebaseApp = () => app;

const helpers = {
    addTestData: async function(data, docName) {
        //Default adding to existing doc name will update.
        const document = doc(firestoreDb, "testing", docName);
        let dataUpload = await setDoc(document, data)
    },

    getTestData: async function() {
        const collectionRef = collection(firestoreDb, "testing");

        const finalData = [];

        const q = query(
            collectionRef, 
            where("key1", '!=', null));

        const retdoc = await getDocs(q);

        //Get each document key-value pair
        retdoc.forEach((doc) => {
            finalData.push(doc.data());
        });
        return finalData;
    },
}

module.exports = { initializeFirebaseApp, getFirebaseApp, helpers }
