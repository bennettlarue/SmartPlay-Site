"use client";
import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";

export default function News() {
    return <div>news</div>;
}

/*
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyAoLERDjxnCQYXN7aXYwVePe5OpJuuRFdE",
    authDomain: "smartplay-site.firebaseapp.com",
    projectId: "smartplay-site",
    storageBucket: "smartplay-site.appspot.com",
    messagingSenderId: "1034733480632",
    appId: "1:1034733480632:web:17205300a9f3920343224d",
    measurementId: "G-8JPLMKMJVC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service

import { collection, query, where, getDocs } from "firebase/firestore";
import { useEffect } from "react";
const db = getFirestore(app);

async function getArticles() {
    const q = query(collection(db, "articles"));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
    });
}
    */
