import React, { Component } from 'react';
import {FiSettings} from 'react-icons/fi';
import '../../CSS/PlayOffBrackets.css'
import circle from '../../Assets/Images/Ellipse.png'
import line from '../../Assets/Images/Line.png'
import vline from '../../Assets/Images/VLine.png'
import playoffs from '../../Assets/Images/Playoffs.png'


class PlayOffBrackets extends Component {
    state = {  }
    render() { 
        return ( 
            
            <div className="card PlayOffBrackets " >
            <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
            <h5 className="playOffsH5">PLAYOFFS BRACKET  <span style={{color:"#CBCBCB" , fontSize:"58px"}}>GORDON SUPER LEAGUE</span></h5>
            <hr className="new5"/>

            <h6 className="h6PlayOffs">Champions Bracket</h6>
            <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 paraContent"><p>round 1  | NFL WEEK 14-15</p></div>
            <div className="col-lg-5 col-md-5 col-sm-5 paraContent"><p>CHAMPIONSHIP  | NFL WEEK 16</p></div>
            </div>
           
           
            </div>
            
            </div>
            <div className="row">
            <div className="col-lg-4 col-md-3 col-sm-2">
            <div className="box boxSizeMobile" style={{marginTop:"50px", marginBottom:"50px"}}>
            <div><img src={circle} className="circle circleImageSize"/></div>
            <div><img src={circle} className="circle circleImageSize"/></div>
            
            
            </div>
            <div className="box boxSizeMobile" style={{marginTop:"50px", marginBottom:"50px"}}>
            <div><img src={circle} className="circle circleImageSize"/></div>
            <div><img src={circle} className="circle circleImageSize"/></div>
            
            
            </div>
            </div>
            <div className="col-lg-1 col-md-1 col-sm-1 text-center">
        
            </div>
            
            <div className="col-lg-4 col-md-3 col-sm-2">
            <div className="box1" style={{marginTop:"50px", marginBottom:"50px"}}></div>
            <div className="box boxSizeMobile" style={{ marginLeft:"35px",marginTop:"50px", marginBottom:"50px"}}>
            <div><img src={circle} className="circle circleImageSize"/></div>
            <div><img src={circle} className="circle circleImageSize"/></div>
            
            

            </div></div>
            <div className="col-lg-3 col-md-3 col-sm-3">
          
            
            
            </div>
            
            
            
            
           
            
            </div>
            <hr className="new5"/>
            <h6 className="h6">Winners Consolation ladder</h6>
            <div className="boxshade" style={{marginTop:"50px", marginBottom:"50px" ,marginLeft:"5px"} }>
            <div><img src={circle} className="circle"/></div>
            <div><img src={circle} className="circle"/></div>
            
            
            </div>
       
            </div>
          
          
         );
    }
}
 
export default PlayOffBrackets;