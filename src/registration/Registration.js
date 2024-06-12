import React from "react";
import './Registration.css'

class Registration extends React.Component{
    constructor() {
        super();
        this.state = {
            asso_name: '',
            asso_id: '',
            project_id: '',
            locationType: "",
            offshore: ["Chennai", "Banglore", "Hyderabad", "Pune", "Kochi"],
            onshore: ["US", "NonUS"],
            location: '',
            skils: ["HTML5,CSS3,JS", "Angular 8", "Express JS",
                "SASS", "React JS", "Node JS",
                "ES5,ES6,ES7", "Veu JS", "Mongo DB",
                "Bootstrap 4", "TypeScript"],
            selectedSkills: [],
            profileImg: '',
            profileImgUrl: '',
            comments: '',

           //errors

            asso_name_err_msg: "",
            asso_id_err_msg: '',
            skill_err_msg: "",
            comments_err_msg: "",
            profileImg_err_msg: "",
            location_err_msg: "",

            //flags

            asso_name_flag:false,
            asso_id_flag:false,
            project_id_flag:false,
            skill_flag:false,
            profile_flag:false,
            comments_flag:false,
            location_flag:false,
    
            formStatus:false,
          
        }
    }
    changeHandler = (event) => {
        // console.log(event.target.value);
        this.setState({[event.target.name]:event.target.value})
    }
    registrationHandler = (event) => {
        event.preventDefault();
        console.log(this.state);
    }
    profileChangeHandler = (event) => {
        console.log(event.target.files);
        if(event.target.files.length===0){
            console.log("No file is selected");
            return;
        }
        let profileImg = event.target.files[0];
        // type validation
        let types = ['image/jpeg', 'image/png', 'image/web'];
        if (!types.includes(profileImg.type)) {

            return
        }
        console.log("File: ", profileImg);
        console.log("FileName", profileImg.name);
        console.log("File Size: ", profileImg.size);
        console.log("File Type: ", profileImg.type);
        // profileImgUrl:profileImg.name
        this.setState({profileImg, })
    }
    skillChangeHandler = (e) => {
        console.log("Name: ", e.target.name);
        console.log("Value: ", e.target.value);
        console.log("Checked: ", e.target.checked);
        let { selectedSkills } = this.state;
        if (e.target.checked) {
            selectedSkills.push(e.target.value)
        } else {
            let ind = selectedSkills.indexOf(e.target.value);
            selectedSkills.splice(ind, 1);
        }
        this.setState({selectedSkills})
    }
    validations = (e) => {
        console.log("from validations");
        console.log(e.target.name);

        // Associate Name Validations

        if (e.target.name === "asso_name") {
            let { asso_name, asso_name_err_msg } = this.state;
            if (asso_name===undefined || asso_name.length === 0) {
                asso_name_err_msg = "Please enter the Associate Name."
            } else {
                console.log("Associate Name: ", asso_name);
                console.log("Name Length: ", asso_name.length);
                let nareReg = /^([a-zA-Z ]{5,30})$/
                if (!nareReg.test(asso_name)) {
                    asso_name_err_msg = "Accepts Alphabets, space & Min 5 to Max 30 Char"
                } else {
                    asso_name_err_msg = ""
                }
                console.log(nareReg.test(asso_name));
            }
           /*    
            if (asso_name_err_msg) {
                e.target.classList.add("field-error")
            } else {
                e.target.classList.remove("field-error")
            }
            this.setState({asso_name_err_msg})
        }*/
        let {asso_name_flag, asso_id_flag, project_id_flag, skill_flag,  profile_flag, comments_flag, location_flag, formStatus} = this.state;
        if (asso_name_err_msg) {
            e.target.classList.add("field-error")
            asso_name_flag=false
        } else {
            e.target.classList.remove("field-error")
            asso_name_flag=true
        }
        if(asso_name_flag &&  asso_id_flag && project_id_flag  && skill_flag && profile_flag && comments_flag && location_flag)
        {
            formStatus=true
        }else{
            formStatus=false
        }
        this.setState({asso_name_err_msg, asso_name_flag, formStatus})
        this.setState({ asso_name_err_msg })
    }
        
    
         // Associate Id Validations

         if (e.target.name === "asso_id") {
            let { asso_id, asso_id_err_msg } = this.state;
            if (asso_id === undefined || asso_id.length === 0) {
                asso_id_err_msg = "Please enter the Associate id."
            } else {
                console.log("Associate Id: ", asso_id);
                console.log("Associate Id: ", asso_id.length);
                let assoIdReg = /^([0-9]{6,6})$/
                if (!assoIdReg.test(asso_id)) {
                    asso_id_err_msg = "Invalid Associate Id"
                } else {
                    asso_id_err_msg = ""
                }
                console.log(assoIdReg.test(asso_id));
            }/*
            if (asso_id_err_msg) {
                e.target.classList.add("field-error")
            } else {
                e.target.classList.remove("field-error")
            }
            this.setState({asso_id_err_msg})
        }*/
        let {asso_name_flag, asso_id_flag, project_id_flag,  skill_flag,  profile_flag, comments_flag,location_flag, formStatus} = this.state;

        if (asso_id_err_msg) {
            e.target.classList.add("field-error")
            asso_id_flag=false
        } else {
            e.target.classList.remove("field-error")
            asso_id_flag=true
        }
        if( asso_name_flag &&  asso_id_flag && project_id_flag  && skill_flag && profile_flag && comments_flag && location_flag)
        {
            formStatus=true
        }else{
            formStatus=false
        }
        this.setState({asso_id_err_msg, asso_id_flag, formStatus})
        
    }

        // Project Id Validations

        if (e.target.name === "project_id") {
            let { project_id, project_id_err_msg } = this.state;
            if (project_id === undefined || project_id.length === 0) {
                project_id_err_msg = "Please enter the Project id."
            } else {
                console.log("Project Id: ", project_id);
                console.log("Project Id: ", project_id.length);
                let projectIdReg = /^([a-zA-Z0-9]{12,12})$/
                if (!projectIdReg.test(project_id)) {
                    project_id_err_msg = "Invalid Project Id"
                } else {
                    project_id_err_msg = ""
                }
                
                console.log(projectIdReg.test(project_id));
            }/*
            if (project_id_err_msg) {
                e.target.classList.add("field-error")
            } else {
                e.target.classList.remove("field-error")
            }
            this.setState({project_id_err_msg})
        }*/
        let {asso_name_flag, asso_id_flag, project_id_flag,  skill_flag,  profile_flag, comments_flag, location_flag, formStatus} = this.state;

        if (project_id_err_msg) {
            e.target.classList.add("field-error")
            project_id_flag=false
        } else {
            e.target.classList.remove("field-error")
            project_id_flag=true
        }
        if(asso_name_flag &&  asso_id_flag && project_id_flag  && skill_flag && profile_flag && comments_flag && location_flag  )
        {
            formStatus=true
        }else{
            formStatus=false
        }
        this.setState({project_id_err_msg, project_id_flag, formStatus})
        this.setState({ project_id_err_msg })
    }

         
        // Skills validations

        if (e.target.name === 'skill') {
            let { selectedSkills, skill_err_msg } = this.state;
            if (selectedSkills.length < 5) {
                skill_err_msg = 'Please select Min 5 skills.';
            } else {
                skill_err_msg = '';
            }
           /* this.setState({ skill_err_msg })
        }*/
        let {asso_name_flag, asso_id_flag, project_id_flag, skill_flag, profile_flag, comments_flag,location_flag, formStatus} = this.state;
        if ( skill_err_msg) {
            e.target.classList.add("field-error")
            skill_flag=false
        } else {
            e.target.classList.remove("field-error")
            skill_flag=true
        }
        if(asso_name_flag &&  asso_id_flag && project_id_flag  && skill_flag && profile_flag && comments_flag && location_flag )
        {
            formStatus=true
        }else{
            formStatus=false
        }
        this.setState({ skill_err_msg, skill_flag,formStatus })
        this.setState({ skill_err_msg })
    }

        
    


    // comments validation
     
         if (e.target.name === "comments") {
            let { comments, comments_err_msg } = this.state;
            if (comments === undefined || comments.length === 0) {
                comments_err_msg = "Please enter the comments."
                } else {
                    comments_err_msg = ""
                }
                /*
            
            if (comments_err_msg) {
                e.target.classList.add("field-error")
            } else {
                e.target.classList.remove("field-error")
            }
            this.setState({comments_err_msg})
        }*/

          let {asso_name_flag, asso_id_flag, project_id_flag, skill_flag, profile_flag, comments_flag, location_flag, formStatus} = this.state;
        if ( comments_err_msg) {
            e.target.classList.add("field-error")
            comments_flag=false
        } else {
            e.target.classList.remove("field-error")
            comments_flag=true
        }
        if(asso_name_flag &&  asso_id_flag && project_id_flag  && skill_flag && profile_flag && comments_flag && location_flag)
        {
            formStatus=true
        }else{
            formStatus=false
        }
        this.setState({ comments_err_msg, comments_flag,formStatus })
        this.setState({ comments_err_msg })
    }
         
         
    //location validation
    if (e.target.name === 'location') {
        let { location, location_err_msg } = this.state;
        if (location===undefined || location.length === 0) {
            location_err_msg = "Please select the location"
        }else {
            location_err_msg = '';
        }
        /*
        if (location_err_msg) {
            e.target.classList.add("field-error")
        } else {
            e.target.classList.remove("field-error")
        }
        this.setState({ location_err_msg })
    } */
    let {asso_name_flag, asso_id_flag, project_id_flag, skill_flag, profile_flag, comments_flag, location_flag, formStatus} = this.state;
    if ( location_err_msg) {
        e.target.classList.add("field-error")
        location_flag=false
    } else {
        e.target.classList.remove("field-error")
        location_flag=true
    }
    if(asso_name_flag &&  asso_id_flag && project_id_flag  && skill_flag && profile_flag && comments_flag && location_flag)
    {
        formStatus=true
    }else{
        formStatus=false
    }
    this.setState({ location_err_msg, location_flag,formStatus })
    this.setState({ location_err_msg })
}

    //profile img validation
    if (e.target.name === 'profileImg') {
        let { profileImg, profile_err_msg } = this.state;
        if (profileImg.length === 0) {
            profile_err_msg = 'Please upload Profile Picture';
        } else {
            profile_err_msg = '';
        }
        /*
        this.setState({ profile_err_msg })

        if (profile_err_msg) {
            e.target.classList.add("field-error")
        } else {
            e.target.classList.remove("field-error")
        }
        this.setState({profile_err_msg})
    }*/
    let {asso_name_flag, asso_id_flag, project_id_flag, skill_flag, profile_flag, comments_flag, location_flag,formStatus} = this.state;
    if ( profile_err_msg) {
        e.target.classList.add("field-error")
        profile_flag=false
    } else {
        e.target.classList.remove("field-error")
        profile_flag=true
    }
    if(asso_name_flag &&  asso_id_flag && project_id_flag  && skill_flag && profile_flag  && comments_flag && location_flag)
    {
        formStatus=true
    }else{
        formStatus=false
    }
    this.setState({ profile_err_msg, profile_flag,formStatus })
    this.setState({ profile_err_msg })
}


}
    
    resetForm = () => {
        let { asso_name, asso_id, project_id, locationType,
            location, selectedSkills, profileImgUrl, comments,
        } = this.state;
    //    form fields
        asso_name = '';
        asso_id = '';
        project_id = '';
        locationType = '';
        location = '';
        selectedSkills = [];
        profileImgUrl = '';
        comments = '';

        this.setState({asso_name, asso_id, project_id, locationType,
            location, selectedSkills, profileImgUrl, comments,
        }, () => console.log(this.state))
        let { asso_name_err_msg, asso_id_err_msg, skill_err_msg, project_id_err_msg, comments_err_msg, location_err_msg, profileImg_err_msg } = this.state;
        // Error Properties 
        asso_name_err_msg = "";
        asso_id_err_msg = '';
        skill_err_msg = "";
        project_id_err_msg = "";
        comments_err_msg = "";
        location_err_msg = "";
        profileImg_err_msg = "";
        this.setState({ asso_name_err_msg, asso_id_err_msg, skill_err_msg, project_id_err_msg, comments_err_msg, location_err_msg, profileImg_err_msg});

        let fieldsElts = document.getElementsByClassName('field-error');
        fieldsElts = [...fieldsElts];
        fieldsElts.forEach((ele) => {
            ele.classList.remove('field-error');
        })
        console.log(fieldsElts);
        
    }

    render() {
        // Form Fields
        let { asso_id, project_id,
            location, selectedSkills, comments, 
        } = this.state;
    

        // Error Properties
        let { asso_name_err_msg, asso_id_err_msg, skill_err_msg, project_id_err_msg, comments_err_msg, profileImg_err_msg, location_err_msg
        } = this.state;
        return (
            <div>
                <h3>Form Validation<span className="text-danger">*</span></h3>
                <div className="text-start">
                    <form onSubmit={this.registrationHandler}>
                        <div className="py-2">
                            <input type="text" className="form-control"
                                placeholder="Associate Name"
                                name="asso_name"
                                value={this.state.asso_name}
                                onChange={this.changeHandler}
                                onBlur={ this.validations}
                            >
                            </input>
                            {asso_name_err_msg &&
                                <p className="text-danger">{ asso_name_err_msg}</p>
                            }
                            
                        </div>
                        <div className="py-2">
                            <input type="number" className="form-control"
                                placeholder="Associate ID"
                                name="asso_id"
                                value={ asso_id}
                                onChange={this.changeHandler}
                                onBlur={ this.validations}
                            >
                            </input>
                            {asso_id_err_msg &&
                                <p className="text-danger">{ asso_id_err_msg}</p>
                            }
                            
                        </div>
                        <div className="py-2">
                            <input type="text" className="form-control"
                                placeholder="Project ID"
                                name="project_id"
                                value={project_id }
                                onChange={ this.changeHandler}
                                onBlur={ this.validations}
                            >
                            </input>
                            {project_id_err_msg &&
                                <p className="text-danger">{ project_id_err_msg}</p>
                            }
                        </div>
                        <div className="row">
                            <div className="col-md-2">
                                <input type="radio" name="locationType" value="Offshore"
                                    onChange={this.changeHandler}
                                    className="form-check-input"
                                ></input>
                                <label className="mx-2">Offshore</label>
                            </div>
                            <div className="col-md-2">
                                <input type="radio" name="locationType" value="Onshore"
                                    onChange={this.changeHandler}
                                    className="form-check-input"
                                ></input>
                                <label className="mx-2">Onshore</label>
                            </div>
                        </div>
                        <div className="py-2">
                            <select name="location" value={location}
                                onChange={this.changeHandler}
                                onBlur={ this.validations}
                                className="form-select"
                            >
                                
                                <option>Select Location</option>
                                {/* <option value="Hyderabad">Hyderabad</option>
                                <option value="Chennai">Chennai</option>
                                <option value="Banglore">Banglore</option> */}
                                {this.state.locationType === "Offshore" &&
                                    this.state.offshore.map((location, ind)=>{
                                        return <option value={location} key={ ind}>{location}</option>
                                    })
                                }
                                {this.state.locationType === "Onshore" &&
                                    this.state.onshore.map((location, ind)=>{
                                        return <option value={ location} key={ind}>{location}</option>
                                    })
                                }
                                
                            </select> 
                            {location_err_msg &&
                                <p className="text-danger">{ location_err_msg}</p>
                            }
                           
                        </div>
                        <div onBlur={ this.validations} name="skills-container" className="row">
                            {
                                this.state.skils.map((skill, ind) => {
                                    return <div className="col-md-4  text-start" key={ ind}>
                                        <input type="checkbox" name="skill"
                                            value={ skill}
                                            checked={selectedSkills.includes( skill )}
                                            onChange={this.skillChangeHandler}
                                            className="form-check-input"
                                        ></input>
                                        <label className="mx-3">{skill }</label>
                                        </div>
                                })
                            }
                            {skill_err_msg &&
                                <p className="text-danger">{ skill_err_msg}</p>
                            }
                            
                        </div>
                        <div className="clearfix"></div>
                        <div className="py-2 text-start">
                            <label>Upload Profile</label>
                            <input type="file" className="form-control"
                                placeholder="Project ID"
                                name="profileImg"
                                // value={profileImgUrl }
                                onChange={ this.profileChangeHandler}
                                onBlur={ this.validations}
                            >

                            </input>
                            
                                <p className="text-danger">{ profileImg_err_msg}</p>
                           
                           
{/*                             
                            <div>
                                <img src={require(profileImgUrl)} alt="profile img" width="300px"></img>
                            </div> */}
                        </div>

                        <div className="py-2">
                            <textarea name="comments" value={comments}
                                onChange={this.changeHandler}
                                placeholder="Comments"
                                className ="form-control"
                                onBlur={ this.validations}
                            />
                             {comments_err_msg &&
                                <p className="text-danger">{ comments_err_msg}</p>
                            }
                        </div>
                        <div className="mt-3">
                            <button disabled={!this.state.formStatus} className="btn btn-primary btn-lg" >Submit</button>
                            
                            <button className="btn btn-danger btn-lg mx-3"
                                type="reset"
                                onClick ={this.resetForm}
                            >Reset</button>
                        </div>
                    </form>
                </div>
             </div>
        );
    }
}
    


export default Registration