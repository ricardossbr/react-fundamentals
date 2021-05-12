import './app.css'
import React from 'react';

import Input from './components/form/input'
import IndirectFather from './components/comunication/indirect-father'
import DirectFather from './components/comunication/direct-father'
import UserInfo from './components/conditional/user-info'
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

            <Card title="Work with controlled component - Card #11" color="ice" >
                <Input />
            </Card>


            <Card title="Work with indirect cominication between element - Card #10" color="ice" >
                <IndirectFather />
            </Card>


            <Card title="Work with direct cominication between element - Card #9" color="ice" >
                <DirectFather />
            </Card>


            <Card title="Work with conditional element - Card #8" color="brown" >
                <UserInfo user="Felipe"/>
                <UserInfo user=""/>
            </Card>

            <Card title="Work with repeat element - Card #7" color="orange" >
                <ListElement></ListElement>
            </Card>

            <Card title="Family components with children - Card #6" color="green" >
                <FamilyWithChildren lastName="Santos">
                    <FamilyMember name="Leandro" />
                    <FamilyMember name="Daniel" />
                    <FamilyMember name="Marcos" />
                </FamilyWithChildren>
            </Card>


            <Card title="Family components - Card #5" color="pink" >
                <Family lastName="Santos"></Family>
            </Card>

            <Card title="Fist component - Card #4" color="green" >
                <Fist></Fist>
            </Card>
            
            <Card title="Component with paramenters - Card #3" color="#0080ff" >
                <WithParameters title="title" subtitle="subtitle "></WithParameters>    
            </Card>
            
            <Card title="Component with fragment - Card #2" color="black">
                <FragmentComponent></FragmentComponent>
            </Card>
            
            <Card title="Random component - Card #1" >
                <RandomComponent min={1} max={60}></RandomComponent>
            </Card>
        </div>
        
    </div>
)
    
