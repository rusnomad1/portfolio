import React from 'react';
import {Grid, Cell, List,ListItem,ListItemContent} from 'react-mdl'
import myPic from "./../мое фото.jpg"

function Contact(){
    return(
        <div className='contact-body'>
            <Grid className='contact-grid'>
                <Cell col={6}>
                    <h2>Ruslan Shaimerdenov</h2>
                    <img
                        src={myPic}
                        alt="avatar"
                    className='contact-avatar'
                    
                    />

                    <p style={{width:'100%', margin:'auto',paddingTop:'1em'}}>Lorem Ipsum is simply dummy text of 
                        the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                        text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not
                         only five centuries.</p>
                
                </Cell>
                <Cell col={6} style={{marginTop:'2em'}}>
                    <h2>Contact Me</h2>
                    <hr/>

                    <div className='contact-list'>
                    <List>
                        <ListItem>
                            <ListItemContent style={{fontSize:'20px',fontFamily:'Anton'}}>
                               <i className="fa fa-phone-square" aria-hidden='true'/>
                                (123) 456-7890
                            </ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent style={{fontSize:'20px',fontFamily:'Anton'}}>
                               <i className="fa fa-envelope" aria-hidden='true'/>
                                someone@mail.com
                            </ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent style={{fontSize:'20px',fontFamily:'Anton'}}>
                               <i className="fa fa-skype" aria-hidden='true'/>
                                myskype
                            </ListItemContent>
                        </ListItem>
                    </List>
                    </div>

                    


                </Cell>
            </Grid>
        </div>
    );
}

export default Contact;