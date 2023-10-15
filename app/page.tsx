import TypingAnimation from '../styles/TypingAnimation';
import Nav from "../components/Nav";

const Home = () => (
  <section className='w-full flex-center flex-col'>
      <h1 className="head_text text-center mb-5">
           Explore the World of Codeing
          <br className="hidden md:inline-block" />
          <TypingAnimation text="letsCode" speed={300} delay={150}/>
      </h1>
  </section>
);

export default Home;

