import TypingAnimation from '../styles/TypingAnimation';

const Home = () => (
  <section className='w-full flex-center flex-col'>
      <h1 className="head_text text-center mb-5">
           <div className='mb-5'>Explore the World of Codeing
           </div>
          <br className="hidden md:inline-block" />
          <span>&lt;</span>
          <TypingAnimation text="letsCode" speed={300} delay={150} />
          <span>/&gt;</span>
      </h1>
  </section>
);

export default Home;

