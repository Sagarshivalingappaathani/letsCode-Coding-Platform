"use client";
import {app} from "../firebaseConfig"
import { User, getAuth, signOut, onAuthStateChanged} from 'firebase/auth';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Nav: React.FC = () => {
  const auth = getAuth(app);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Add a listener to check if the user is authenticated
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user)
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      window.location.href = '/'; // Redirect to the home page after sign-out
    } catch (error) {
      console.error('Error signing out', error);
    }
  };

  return (
    <nav className="flex-between w-full mt-5 mb-10 px-10">
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
            {/* Display user profile image when logged in */
            user ? (
              <div className="flex items-center gap-3 md:gap-5">
               <Image
                    src={user?.photoURL || "/assets/images/avatar.png"}
                    alt="logo"
                    width={45}
                    height={45}
                    className="object-contain rounded-full"
                    />

                <button
                  onClick={handleSignOut}
                  className="orange_gradient py-2 px-4 rounded-lg"
                >
                  <Image
                    src="/assets/images/logout.png"
                    alt="logo"
                    width={25}
                    height={25}
                    className="object-contain rounded"
                    />
                 
                </button>
              </div>
            ) : (
              // Display sign-in and sign-up links when not logged in
              <div className="flex gap-3 md:gap-5">
                <a href="/signIn" className="outline_btn">
                  Sign In
                </a>
                <a href="/signUp" className="outline_btn">
                  Sign Up
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
