import React from 'react'
import '../../../styles/global.css'

type Props = {}

const Congrats = (props: Props) => {
  return (
    <div className="results-summary-container flex justify-between items-center">
						 <div className="confetti">
						   <div className="confetti-piece"></div>
						   <div className="confetti-piece"></div>
						   <div className="confetti-piece"></div>
						   <div className="confetti-piece"></div>
						   <div className="confetti-piece"></div>
						   <div className="confetti-piece"></div>
						   <div className="confetti-piece"></div>
						   <div className="confetti-piece"></div>
						   <div className="confetti-piece"></div>
						   <div className="confetti-piece"></div>
						   <div className="confetti-piece"></div>
						   <div className="confetti-piece"></div>
						   <div className="confetti-piece"></div>
						   <div className="confetti-piece"></div>
						   <div className="confetti-piece"></div>
						   <div className="confetti-piece"></div>
						   <div className="confetti-piece"></div>
						   <div className="confetti-piece"></div>
						   <div className="confetti-piece"></div>
						 </div>
						 <div className="results-summary-container__result">
						   <div className="heading-tertiary">Your Result</div>
						   <div className="result-box">
							 <div className="heading-primary">5</div>
							 <p className="result">of 5</p>
						   </div>
						   <div className="result-text-box">
							 <div className="heading-secondary">excellent</div>
							 <p className="paragraph">
							   You scored higher than 65% of the people who have taken these tests.
							 </p>
						   </div>
						   <div className="summary__cta mt-4">
                            <div><a href="/problems" className="btn btn--large mt-3">Solution</a></div>
						   </div>
						 </div>
					   </div>
  )
}

export default Congrats