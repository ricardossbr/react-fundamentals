import './app.css'
import React from 'react';

import ListElement from './components/repeat/list-of-students'
import FamilyWithChildren from './components/basic/family-with-children';
import Family from './components/basic/family';
import FamilyMember from './components/basic/family-member';
import Fist from './components/basic/first';
import WithParameters from './components/basic/with-parameter';
import FragmentComponent from './components/basic/fragment';
import RandomComponent from './components/basic/random-comp';
import Card from './components/layout/card'

export default () => (
    <div className="App"> 
        <h1>React fundamentals</h1>
        <div className="Cards">            


            <Card title="Work with repeat element Card" color="orange" >
                <ListElement></ListElement>
            </Card>

            <Card title="Family components with children Card" color="green" >
                <FamilyWithChildren lastName="Santos">
                    <FamilyMember name="Leandro" />
                    <FamilyMember name="Daniel" />
                    <FamilyMember name="Marcos" />
                </FamilyWithChildren>
            </Card>


            <Card title="Family components Card" color="pink" >
                <Family lastName="Santos"></Family>
            </Card>

            <Card title="Fist component Card" color="green" >
                <Fist></Fist>
            </Card>
            
            <Card title="Component with paramenters Card" color="#0080ff" >
                <WithParameters title="title" subtitle="subtitle "></WithParameters>    
            </Card>
            
            <Card title="Component with fragment Card" color="black">
                <FragmentComponent></FragmentComponent>
            </Card>
            
            <Card title="Random component Card" >
                <RandomComponent min={1} max={60}></RandomComponent>
            </Card>
        </div>
        
    </div>
)
    
