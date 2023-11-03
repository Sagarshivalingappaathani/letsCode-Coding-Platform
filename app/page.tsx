"use client";
import TypingAnimation from '../styles/TypingAnimation';
import "../styles/global.css"
import Courses from '../components/Courses';

const Home = () => (
  <>
    <div className='my-10'></div>
    <section className='w-full flex-center flex-col mt-20'>
      <h1 className="head_text text-center my-5">
        <div className='text-transparent bg-gradient-to-r from-black to-black bg-clip-text'>Explore the World of Coding</div>
        <br className="hidden md:inline-block" />
        <span>&lt;</span>
        <TypingAnimation text="letsCode" speed={300} delay={150} />
        <span>/&gt;</span>
      </h1>
      <p className="text-3xl text-green-600 text-center mt-10 bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text my-15">
      "Code on letsCode and 
      </p>
      <p className="text-3xl text-green-600 text-center mt-5 bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text my-15">
      inspire the world with your passion for programming."</p>
      <div className='mt-5'></div>
      <div className='flex justify-center animate-bounce mt-5'>
        <a href='/problems' className='btn-grad'>
          letsCode</a>
      </div>
    </section>
    <Courses/>
    <footer className='bg-black text-white py-4 mt-10'>
      <div className='container mx-auto px-4 text-center'>
        <div className='text-2xl font-semibold mb-2'>Connect with Us</div>
        <div className='mt-2'>&copy; 2023 letsCode. All rights reserved.</div>
        <div className='mt-2'>letsCode0418@gmail.com</div>
      </div>
    </footer>
  </>
);

export default Home;

