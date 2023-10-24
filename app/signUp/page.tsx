"use client";
import React from 'react';
import Head from 'next/head';
import { app,firestore } from '../../firebaseConfig';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import { useState } from 'react';
import { doc, setDoc } from "firebase/firestore";
<<<<<<< HEAD
import '../../styles/global.css'
import Image from 'next/image';
=======
>>>>>>> 910e90f2b1fba40d886e2f6a4ef5a7403ee55ee2

const Register: React.FC = () => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const  signUp =  () => {
        if(!email || !password){
            alert("all feilds are required")
        }else{
            createUserWithEmailAndPassword(auth, email, password)
            .then(async (response) => {
                //console.log(response.user);
                const userData = {
                    uid: response.user.uid,
                    email:email,
                    displayName: username,
                    createdAt: Date.now(),
                    updatedAt: Date.now(),
                    solvedProblems: [],
                    solvedprob: {
<<<<<<< HEAD
                        easy: 0,
                        medium: 0,
                        hard: 0,
=======
                        easy: 1,
                        medium: 0,
                        hard: 0,
<<<<<<< HEAD
>>>>>>> 910e90f2b1fba40d886e2f6a4ef5a7403ee55ee2
                      },
                    ActivityInd:[
                        {
                            date:new Date(),
                            count:0
                        }
<<<<<<< HEAD
                    ],
                    imgUrl:"/assets/images/avatar.png"
=======
                    ]
=======
                      }
>>>>>>> 1d6d92bb2174d8de788d2006f9d4513de1f6f863
>>>>>>> 910e90f2b1fba40d886e2f6a4ef5a7403ee55ee2
                };
                await setDoc(doc(firestore, "users", response.user.uid), userData);
                //console.log(userData);
                window.location.href = '/'; 
            })
            .catch((err)=>{
                alert("failed to signUp with email and password")
            })
        }
        
    }

    const signUpWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(async (response) => {
                const userData = {
                    uid: response.user.uid,
                    email:response.user.email,
                    displayName: response.user.displayName,
                    createdAt: Date.now(),
                    updatedAt: Date.now(),
                    solvedProblems: [],
                    solvedprob: {
<<<<<<< HEAD
                        easy: 0,
                        medium: 0,
                        hard: 0,
                      },
                      ActivityInd:[
                          {
                              date:new Date(),
                              count:0
                          }
                      ],
                      imgUrl:response.user.photoURL
=======
                        easy: 1,
                        medium: 0,
                        hard: 0,
                      }
>>>>>>> 910e90f2b1fba40d886e2f6a4ef5a7403ee55ee2
                };
                await setDoc(doc(firestore, "users", response.user.uid), userData);
                window.location.href = '/';
            })
            .catch((err)=>{
                alert("failed to signUp with google")
            })
            
    }

    const signUpWithGithub = () => {
        signInWithPopup(auth, githubProvider)
            .then(async (response) => {
                const userData = {
                    uid: response.user.uid,
                    email:response.user.email,
                    displayName: response.user.displayName,
                    createdAt: Date.now(),
                    updatedAt: Date.now(),
                    solvedProblems: [],
                    solvedprob: {
<<<<<<< HEAD
                        easy: 0,
                        medium: 0,
                        hard: 0,
                      },
                      ActivityInd:[
                          {
                              date:new Date(),
                              count:0
                          }
                      ],
                      imgUrl:response.user.photoURL
=======
                        easy: 1,
                        medium: 0,
                        hard: 0,
                      }
>>>>>>> 910e90f2b1fba40d886e2f6a4ef5a7403ee55ee2
                };
                await setDoc(doc(firestore, "users", response.user.uid), userData);
                window.location.href = '/';
            })
            .catch(err => {
                alert('failed to signUp with Github');
            })
    }

    return (
        <div className="flex items-center justify-center">
            <Head>
                <title>Next CRUD AUTH</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <div className="form-container">
                    <p className="title">Welcome back</p>
                    <div className="form">
                        <input type="text"
                            className="input" 
                            placeholder="Name" 
                            onChange={(event) => setUsername(event.target.value)}
                            value={username}/>

                        <input type="email"
                            className="input" 
                            placeholder="Email" 
                            onChange={(event) => setEmail(event.target.value)}
                            value={email}/>

                        <input type="password" 
                            className="input" 
                            placeholder="Password"
                            onChange={(event) => setPassword(event.target.value)}
                            value={password}
                            />
                        <button className="form-btn" onClick={signUp}>Sign Up</button>
                    </div>
                    <a href='/signIn' className="sign-up-label">
                        Don't have an account?<span className="sign-up-link">Sign In</span>
                    </a>
                    
                    <div className="buttons-container">
                        <button onClick={signUpWithGithub}>
                            <div className="apple-login-button">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 32 32">
                                    <path fill-rule="evenodd" d="M 16 4 C 9.371094 4 4 9.371094 4 16 C 4 21.300781 7.4375 25.800781 12.207031 27.386719 C 12.808594 27.496094 13.027344 27.128906 13.027344 26.808594 C 13.027344 26.523438 13.015625 25.769531 13.011719 24.769531 C 9.671875 25.492188 8.96875 23.160156 8.96875 23.160156 C 8.421875 21.773438 7.636719 21.402344 7.636719 21.402344 C 6.546875 20.660156 7.71875 20.675781 7.71875 20.675781 C 8.921875 20.761719 9.554688 21.910156 9.554688 21.910156 C 10.625 23.746094 12.363281 23.214844 13.046875 22.910156 C 13.15625 22.132813 13.46875 21.605469 13.808594 21.304688 C 11.144531 21.003906 8.34375 19.972656 8.34375 15.375 C 8.34375 14.0625 8.8125 12.992188 9.578125 12.152344 C 9.457031 11.851563 9.042969 10.628906 9.695313 8.976563 C 9.695313 8.976563 10.703125 8.65625 12.996094 10.207031 C 13.953125 9.941406 14.980469 9.808594 16 9.804688 C 17.019531 9.808594 18.046875 9.941406 19.003906 10.207031 C 21.296875 8.65625 22.300781 8.976563 22.300781 8.976563 C 22.957031 10.628906 22.546875 11.851563 22.421875 12.152344 C 23.191406 12.992188 23.652344 14.0625 23.652344 15.375 C 23.652344 19.984375 20.847656 20.996094 18.175781 21.296875 C 18.605469 21.664063 18.988281 22.398438 18.988281 23.515625 C 18.988281 25.121094 18.976563 26.414063 18.976563 26.808594 C 18.976563 27.128906 19.191406 27.503906 19.800781 27.386719 C 24.566406 25.796875 28 21.300781 28 16 C 28 9.371094 22.628906 4 16 4 Z"></path>
                                </svg>
                                <span>Sign Up with GitHub</span>
                            </div>
                        </button>
                        <button onClick={signUpWithGoogle}>
                            <div className="google-login-button">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" x="0px" y="0px" className="google-icon" viewBox="0 0 48 48" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
                            c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
                            c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                    <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
                            C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                                    <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
                            c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                                    <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
                            c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                </svg>
                                <span>Sign Up with Google</span>
                            </div>
                        </button>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Register;
