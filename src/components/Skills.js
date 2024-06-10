import React, { Component } from "react";

class Skills extends Component {
  render() {
    if (this.props.sharedSkills && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.skills;
      var primarySkills = this.props.sharedSkills.icons.map(function (skills, i) {
       if (skills.image==null&&skills.isPrimary) { return (
          <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center skills-tile">
                <i className={skills.class} style={{ fontSize: "220%" }}>
                  <p
                    className="text-center"
                    style={{ fontSize: "30%", marginTop: "4px" }}
                  >
                    {skills.name}
                  </p>
                </i>
              </div>
            </span>
          </li>
        );
      }
      else if(skills.isPrimary){
        return ( <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center skills-tile">
               <i className={skills.class}> 
                <img src={skills.image} height="42px" width="42px"></img>
                  <p
                    className="text-center"
                    style={{ fontSize: "60%", marginTop: "4px" }}
                  >
                    {skills.name}
                  </p>
                </i>
              </div>
            </span>
          </li>
        );
      }
      else { return;}
    });
    var secondarySkills = this.props.sharedSkills.icons.map(function (skills, i) {
      if (skills.image==null&&!skills.isPrimary) { return (
         <li className="list-inline-item mx-3" key={i}>
           <span>
             <div className="text-center skills-tile">
               <i className={skills.class} style={{ fontSize: "220%" }}>
                 <p
                   className="text-center"
                   style={{ fontSize: "30%", marginTop: "4px" }}
                 >
                   {skills.name}
                 </p>
               </i>
             </div>
           </span>
         </li>
       );
     }
     else if(skills.isPrimary==null||!skills.isPrimary){
       return ( <li className="list-inline-item mx-3" key={i}>
           <span>
             <div className="text-center skills-tile">
              <i className={skills.class}> 
               <img src={skills.image} height="42px" width="42px"></img>
                 <p
                   className="text-center"
                   style={{ fontSize: "60%", marginTop: "4px" }}
                 >
                   {skills.name}
                 </p>
               </i>
             </div>
           </span>
         </li>
       );
     }
     else { return;}
   });
    }

    return (
      <section id="skills">
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title">
              <span className="text-white">{sectionName}</span>
            </h1>
          </div>
          <div className="col-md-12 text-center">
            <ul className="list-inline mx-auto skill-icon">{primarySkills}</ul>
            <ul className="list-inline mx-auto skill-icon">{secondarySkills}</ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
