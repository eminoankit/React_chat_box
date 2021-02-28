import React from 'react'
import BasicTimeline from './BasicTimeline'
import FallbackAvatars from './FallbackAvatars'
import FileSystemNavigator from './FileSystemNavigator'
import Projects from './Projects'
import responsive from './responsive'
import Responsive from './responsive'
// import FormPropsTextFields from './FormPropsTextFields'
// import FormPropsTextFields1 from './FormPropsTextFields1'
// import MultilineTextFields from './MultilineTextFields'
import './View.css'

const View = () => {
    return (
        <div>
            {/* <form>
                    <div className='resume-form-control'>
                      <div className='name-headers candid-name'>
                        <input type="text" name='name' placeholder="Enter your Name"
                           />
                        </div>
                    </div>

                    <div className='resume-form-control'>
                    <div className='name-headers'>
                        <input type="text" name='designation' placeholder="Enter your Designation"
                           />
                    </div>
                    </div>

                    <div className='resume-form-control'>
                    <div className='detailed-text'>
                        <input type="text" name='designation' placeholder="Enter your Designation"
                           />
                    </div>
                    
           
            </form> */}

            {/* <FormPropsTextFields resumeText='Ankit Tailor'/>
            <FormPropsTextFields1 resumeText='Software Engineer'/>
            <FormPropsTextFields1 resumeText='Objective'/>
            <MultilineTextFields objText='' /> */}

            <div class='resume-main'>
                <div className='resume-header-background'>
                    <div className='header-super'>
                        <div className='header-resume'>   
                          <div className='header-sub'>
                            <h2 className=' name-margin'>Ankit Tailor</h2>
                            <h3 className=' designition-margin'>Project Manger</h3>
                          </div>
                          <FallbackAvatars />
                        </div>
                        <div className='obj-sub'>
                        <div className='obj-heading'>
                            <h1>Objective</h1>
                        </div>
                        <div className='obj-text'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                 sed do eiusmod tempor incididunt ut labore et dolore magna 
                                 aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                 ullamco laboris nisi ut aliquip ex .</p>
                        </div>
                     </div>                

                    </div>
                </div>  


                <div className='body-resume'>

                    <div className='body-sub'>
                        <div className='body-heading'>
                            <h2>Skills</h2>
                        </div>
                        <div className='body-text'>
                            <FileSystemNavigator />
                        </div>
                    </div>
                    <div className='body-sub'>
                    <div className='body-heading'>
                            <h2>Experience</h2>
                        </div>
                        <div className='body-text'>
                            <BasicTimeline />
                        </div>
                    </div>
                    <div className='body-sub'>
                    <div className='body-heading'>
                            <h2>Projects</h2>
                        </div>
                        <div className='body-text'>
                            <div className='projects-contain'>
                                {/* <responsive /> */}
                                <Projects ProjName="Web Enhancement" />
                                <Projects ProjName="Web Devlopment" />
                            </div>
                        </div>
                    </div>
                    <div className='body-sub'>
                    <div className='body-heading'>
                            <h2>Achievement</h2>
                        </div>
                        <div className='body-text'>
                            
                        </div>
                    </div>
                    <div className='body-sub'>
                    <div className='body-heading'>
                            <h3></h3>
                        </div>
                        <div className='body-text'>
                            
                        </div>
                    </div>

                
                </div>

            </div>
        

        </div>
    )
}

export default View
