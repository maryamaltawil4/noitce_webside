import "./about.css"
import  photo  from "../assets/images/image.png"
function About() {
    return (
<div className="margin">
          <div className="mb-3 about" style={{ background: "rgba(183, 166 , 178 ,0.356)" }}>
          <p>
           Imagine a web page designed to transform the way you tackle your day-to-day tasks.
            It is not just a tool, but a motivator that encourages you to organize your tasks and 
            conquer your objectives with enthusiasm. Add a task with a surge of excitement, 
            setting the tone for a day of productivity and progress. 
           This is a place where you can start strong, armed with a clear plan, 
           and finish even stronger, celebrating your achievements. Welcome to a platform that empowers
            you to seize the day and realize your aspirations, one task at a time.
           </p>
           <div className="image">
           <img className="todo" alt="error" src={photo} />
           </div>
           
          </div>
    </div>
    )}

export default About