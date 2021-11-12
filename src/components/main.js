import { useState } from "react";
import MainSection from "../styles/main.styles";
import jobs from "../data"


const Main = () => {   
    const [role, setRole] = useState('')
    const [lang, setLang] = useState([])
    const [level, setLevel] = useState('')
    const [tool, setTool] = useState([])  
return(   
<>
    <MainSection> 
        {jobs && jobs
             .filter(jobs => !role ? jobs.role : jobs.role === role)
             .filter(jobs => !lang[0] ? jobs.languages : jobs.languages[0] === lang[0])
             .filter(jobs=> !level ? jobs.level : jobs.level === level)
             .filter(jobs=> !tool[0] ? jobs.tools : jobs.tools[0] === tool[0])
             .map(jobs=>{
                // !role && !lang[0] && !level && !tool[0] ? console.log(false) : <div className="table">
                // {role ===""? console.log("is empty") : <div className="tab">{role}</div>}
                // {lang[0] === "" ? console.log("is empty") : <div className="tab">{lang[0]}</div>}
                // {level === "" ? console.log("is empty") : <div className="tab">{level}</div>}
                // {tool[0] === "" ? console.log("is empty") : <div className="tab">{tool[0]}</div>}
                // </div>
                // jobs.featured ? document.getElementById('info').style.borderLeft = "#fff": document.getElementById('info').style.borderLeft = "10px hsl(180, 8%, 52%) solid"
                // jobs.featured ? document.querySelector('.featured').style.display = "none" :document.querySelector('.featured').style.display = "block"
                // jobs.new ? document.querySelector('.new').style.display = "none" : document.querySelector('.new').style.display = "block"
                const job = jobs.languages
                    return(
                        
                        <div  id ="info"className="info" key = {jobs.id}>
                            <p className="image"><img src={jobs.logo} alt="" /></p>
                            <div className="position">
                                <div className="feat">
                                    <p  className="company">{ jobs.company }</p>
                                    <p  id ="new"className= "new">new!</p>
                                    <p id="new"className="featured">featured</p>
                                </div>
                                <p className="position-head">{jobs.position}</p>
                                <div className="time-location">
                                    <p className="posted">{jobs.postedAt}</p><span>.</span>
                                    <p className ="contract">{jobs.contract}</p><span>.</span>
                                    <p className="location">{jobs.location}</p>
                                </div>
                            </div>
                            <p className="hr"></p>
                            <div className="lang">
                                <div className="languages" onClick={()=>setRole(jobs.role)}>{jobs.role}</div>
                                <div className="languages"onClick={()=>setLevel(jobs.level)}>{jobs.level}</div>
                                {job.map(job => <div className="languages" onClick={()=>setLang([job])}>{job}</div>)}
                                {jobs.tools.map(job=><div className="languages"onClick={()=>setTool([job])}>{job}</div>)}
                            </div>
                        </div>  
                )})}
    </MainSection>
</>)
}

export default Main;
