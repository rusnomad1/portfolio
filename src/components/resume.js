import React from 'react';
import{Grid,Cell} from 'react-mdl'
import myPic from "./../мое фото.jpg"
import Education from './education'
import Experience from './experience'
import Skills from './skills'

function Resume(){
    return(
        <div>
            <Grid className='resume-grid'>
                <Cell col={4} className='resume-left-col'>
                    <div style={{textAlign:'center'}}>
                        <img
                            src={myPic}
                            alt='avatar'
                            style={{height:'200px'}}
                        />
                    </div>

                    <h2 style={{paddingTop:'2em'}}>Ruslan Shaimerdenov</h2>
                    <h4 style={{color:'grey'}}>Programmer</h4>
                    <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris sagittis pellentesque lacus eleifend lacinia...</p>

                        <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
                        <h5>Address</h5>
                        <p>1 Hacker way 025</p>
                        <h5>Phone</h5>
                        <p>(123)456-7789</p>
                        <h5>Email</h5>
                       <p>someone@gmil.com</p> 
                        <h5>Web</h5>
                        <p>www.mywebsite.com</p>
                        <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
                </Cell>
                <Cell col={8} className='resume-right-col'>
                    <h2>Education</h2>
                    <Education
                    startYear={2016}
                    endYear={2019}
                    schoolName={"Asia Pacific University of Technology and Innovation (APU)"}
                    schoolDescription={'Based in Kuala-Lumpur, Malaysia. APU has gained the reputation of technology leading university.'}
                    />
                    <Education
                    startYear={2005}
                    endYear={2009}
                    schoolName={"L.N.Gumilyov Eurasian National University"}
                    schoolDescription={'Based in Astana, Kazakhstan. Bachelor degree of Economics.'}
                    
                    />
                    <hr style={{borderTop:'3px solid #e22947'}}/>
                    <Experience
                          startYear={'October 2019'}
                          endYear={'December 2019'}
                          jobName={"Business consultant NAT Kazakhstan JSC"}
                          jobDescription={"1) Answered and made phone calls to customers andconsulted them in the field of my competence. 2) Madephone calls to other companies to collect neededinformation for customers. 3) Prepared official lettersand sent them to customers in accordance with safetyand security regulations . 4) Conducted meetings withcustomers. 5) Collected system requirements fromproduct owner. 6) Analyzed legal acts, laws in the fieldof cyber security and digitalization. 7) Preparedpresentations. 8) Prepared technical documentation. 9)Did research about new solutions for customers. 10)Weekly reported to supervisor and top managers of thecompany about project progress. 11) Prepareddocumentation in the field of cyber security forcustomers."}                                                 

                                        />  
                    <Experience
                          startYear={'July 2018'}
                          endYear={'December 2018'}
                          jobName={"Business consultant in Petronas ICT"}
                          jobDescription={"1) Prepared project related with Permit to work on theplant using augmented reality technology. 2) Followed project plan according to the Agile methodology. 3)Prepared the project milestones. 4) Collected systemrequirements from product owners. 5) Participated in thedevelopment of the project prototype that was createdas iOS mobile application. 6) Prepared projectdocumentation. 7) Reported to supervisor about projectprogress. 8) Gave presentations to product ownersduring and after project completion."}                                                 

                                        />  

                    <Experience
                        startYear={2009}
                        endYear={2015}
                        jobName={"Self-Employed entrepreneur "}
                        jobDescription={"1) Collection and recording customers’ information into company's database. 2)Made calls to customers to inform them about sales. 3)Answered phone calls from customers explaining products, policies and services. 4)Received and registered goods in warehouses. 5) Reviewed quality and quantity of goods in warehouses. 6) Worked with customers. 7) Prepared documents for participation in State's tenders for auto spare parts supply. 8) Worked with cash machine 9) Filled up and submitted tax reports to tax authorities. 10) Organized delivery to customers. 11) Promoted the company through advertising on the Internet and social media"}

                    />
                     <hr style={{borderTop:'3px solid #e22947'}}/>

                     <h2>Skills</h2>
                        <Skills 
                        skill="JavaScript"
                        progress={100}
                        />
                        <Skills 
                        skill="HTML/CSS"
                        progress={80}
                        />
                        <Skills 
                        skill="React "
                        progress={50}
                        />
                        <Skills 
                        skill="NodeJS"
                        progress={60}
                        />
                       
                           
                </Cell>
            </Grid>
        </div>
    );
}

export default Resume;