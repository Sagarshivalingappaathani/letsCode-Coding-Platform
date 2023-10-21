"use client";
import {app} from "../firebaseConfig"
import { User, getAuth, signOut, onAuthStateChanged} from 'firebase/auth';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Loader from './loader/loader'
import '../styles/global.css'

const Nav: React.FC = () => {
  const auth = getAuth(app);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) { 
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setLoading(false);
    } catch (error) {
      console.error('Error signing out', error);
    }
  };

  return (
    <nav className="flex-between w-full mt-5 px-10">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-10">
          <a href="/">
            <Image
              src="/assets/images/logo.jpg" 
              alt="logo"
              width={180}
              height={90}
              className="object-contain"
            />
          </a>
          <a href="/">
            <p className="text-lg font-semibold orange_gradient text-center hover:text-black">
              Home
            </p>
          </a>
          <a href="/problems">
            <p className="text-lg font-semibold orange_gradient text-center hover:text-black">
              Problems
            </p>
          </a>
          <a href="/explore">
            <p className="text-lg font-semibold orange_gradient text-center hover:text-black">
              Explore
            </p>
          </a>
          <a href="/contest">
            <p className="text-lg font-semibold orange_gradient text-center hover:text-black">
              Contest
            </p>
          </a>
        </div>

        <div className="sm:flex hidden">
          <div className="flex items-center gap-3 md:gap-5">
              {loading && <Loader/>}
              {user &&!loading && <div className="flex items-center gap-3 md:gap-5">
                    <a href="https://leetcode.com/subscribe/?ref=lp_pl&source=nav-premium">
                    <button className="btn-grad-sm rounded-full">Premium</button>
                    </a>
                    <a href="/profile">
                      <Image
                        src={user?.photoURL || '/assets/images/avatar.png'}
                        alt="avatar"
                        width={45}
                        height={45}
                        className="object-contain rounded-full"
                      />
                    </a>
                  
                    <button onClick={handleSignOut} className="orange_gradient py-2 px-4 rounded-lg">
                      <Image src="/assets/images/logout.png" alt="logo" width={25} height={25} className="object-contain rounded" />
                    </button>
              </div>}
              {!user && !loading &&<div className="flex gap-3 md:gap-5">
                  <a href="/signIn" className="outline_btn">
                    Sign In
                  </a>
                  <a href="/signUp" className="outline_btn">
                    Sign Up
                  </a>
              </div>}
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Nav;
