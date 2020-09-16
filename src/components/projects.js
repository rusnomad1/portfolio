import React, { useState } from 'react';
import { Tabs,Tab,Grid,Cell,Card,CardTitle,CardActions,Button,CardMenu,IconButton, CardText } from 'react-mdl';

function Projects(){
 
    const[activeTab, setState]=useState(0);

       function toggleCategories(){
            if(activeTab===0){
                return(
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
    <CardTitle style={{color: 'black', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/320px-React-icon.svg.png) center / cover'}}>
        React Project #1</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border>
        <Button colored>GitHub</Button>
        <Button colored>CodePen</Button>
        <Button colored>LiveDemo</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>
                )
            }else if (activeTab===1){
                return(
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
    <CardTitle style={{color: 'black', height: '176px', background: 'url(https://learn.javascript.ru/courses/list/angular.png) center / cover'}}>
        Angular Project #2</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border>
        <Button colored>GitHub</Button>
        <Button colored>CodePen</Button>
        <Button colored>LiveDemo</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>
                )
            }else if (activeTab===2){
                return(
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '176px', background: 'url(https://miro.medium.com/max/894/1*DOJsfgBEBqzudQeakxGBbw.jpeg) center / cover'}}>
                        VueJS Project #3</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris sagittis pellentesque lacus eleifend lacinia...
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                )
            }
            else if (activeTab===3){
                return(
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '176px', background: 'url(https://www.bloorresearch.com/wp-content/uploads/2013/03/MONGO-DB-logo-300x470--x.png) center / cover'}}>
                        MongoDB Project #3</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris sagittis pellentesque lacus eleifend lacinia...
                    </CardText>
                    <CardActions border>
                        <Button colored> GitHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                )
            }

            
        }
        


    
    return(
        <div className='category-tabs'>
        <Tabs activeTab={activeTab} onChange={(tabId) => setState( tabId )} ripple>
                <Tab>React</Tab>
                <Tab>Angular</Tab>
                <Tab>Vue.js</Tab>
                <Tab>MongoDB</Tab>
            </Tabs>

                <section className='project-grid'>
                
                    <Grid className='project-grid'>
                        <Cell col={12}>
                        <div className="content"> {toggleCategories()}</div>
                        </Cell>
                    </Grid>
                    
                </section>

                </div>
    );
}


export default Projects;