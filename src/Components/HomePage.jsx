import React,{useState} from 'react'
import "../CSS/homePage.css"
import yellowHelmet from '../Assets/Images/object1.png'
import redHelmet from '../Assets/Images/object2.png'
import blackHelmet from '../Assets/Images/object3.png'
import blueHelmet from '../Assets/Images/object4.png'
import whiteHelmet from '../Assets/Images/object6.png'
import send from '../Assets/Images/email.png'
import emoji from '../Assets/Images/happy.png'
import topPicks from '../Assets/Images/11111.PNG'
import {CaretRightOutlined} from '@ant-design/icons';
import blueMen from "../Assets/Images/blueMen.png"
import whiteMen from "../Assets/Images/whiteMen.png"
import { Divider,Collapse,Input } from 'antd'


const { Panel } = Collapse;
function HomePage() {

    const [expandIconPosition , setexpandIconPosition] = useState('right')


    return (
        <div style={{
            backgroundColor : '#f1f1f1'
        }}>
            <div>
                <div className="row">
                <div className="col-3"></div>
                <div className="col-lg-6 col-xl-6 col-md-6 col-xs-12">
                        <p className="homepageBanner">
                            AD SPACE FOR HOMEPAGE
                        </p>
                </div>
                <div className="col-3"></div>
                </div>
                <div className="row">
                    <div className="col-12">

                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                     <div className="gameWeekFixtures">
                       
                    <div className="container">
                        <div class="w3-container">
                      
                      <div class="w3-card" style={{
                          backgroundColor : 'white'
                      }}>
                             <h3 style={{
                                 backgroundColor: 'rgb(0, 0, 46)',
                                 color: 'white',
                                 textAlign: 'center',
                                 paddingTop: '10px',
                                 paddingBottom: '10px',
                                 fontFamily: 'Bebas Neue,cursive',
                                 letterSpacing: '1px'
                             }}>GAMEWEEK FIXTURES</h3>
                          
                          <div class="container" style={{
                          backgroundColor : 'white'
                      }}>
                            <p style={{
                                backgroundColor: 'rgb(241, 241, 241)',
                                padding: '10px',
                                textAlign: 'justify'
                            }}>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                            <p style={{
                                backgroundColor: 'rgb(241, 241, 241)',
                                padding: '10px',
                                textAlign: 'justify'
                            }}>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                            <p style={{
                                backgroundColor: 'rgb(241, 241, 241)',
                                padding: '10px',
                                textAlign: 'justify'
                            }}>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                            
                          </div>

                          <footer class="w3-container">
                            <p style={{
                                textAlign:'center',
                                color: 'rgb(155, 155, 155)',
                            }}> See all fixtures</p>
                          </footer>
                      </div>
                      </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-lg-6 col-xl-6">
                    
                <div class="w3" style={{
                    backgroundColor : 'white'
                }}>
                      
                      <div class="w3-card" >
                             <h3 style={{
                                 backgroundColor: 'white',
                                 color: 'rgb(0, 0, 46)',
                                 textAlign: 'center',
                                 paddingTop: '10px',
                                 paddingBottom: '10px',
                                 fontFamily: 'Bebas Neue,cursive',
                                 letterSpacing: '1px'
                             }}>UPCOMING LEAGUE MATCHUPS</h3>
                          
                            <div class="container">
                                <div className="row">
                                    <div className="col-lg-4 col-xl-4 col-xs-12 col-sm-12">
                                    <div style={{
                                        backgroundColor: 'rgb(242, 242, 242)',
                                        paddingTop: '40px',
                                        paddingBottom: '40px'
                                    }}>
                                        <div class="w3-container w3-center">
                                            <div className="container">
                                                <div className="row">
                                                <div className="col-5">
                                                    <img src={redHelmet} />
                                                    <br/>
                                                    <b style={{
                                                        fontFamily: 'Bebas Neue,cursive',
                                                        fontSize: '14px'
                                                    }}>JOE'S CLUB</b> 
                                                </div>
                                                <div className="col-2">
                                                <h1 style={{
                                                        fontFamily: 'Bebas Neue,cursive',
                                                        textAlign: 'center',
                                                        paddingTop: '10px',
                                                        color: 'rgb(82, 194, 116)'
                                                    }}>
                                                        V
                                                    </h1>
                                                </div>
                                                <div className="col-5">
                                                    <img src={blueHelmet} style={{
                                                        transform: 'scaleX(-1)'
                                                    }} />
                                                    <br/>
                                                    <b style={{
                                                        fontFamily: 'Bebas Neue,cursive',
                                                        fontSize: '14px'
                                                    }}>MARKSMEN</b> 
                                                </div>
                                                </div>
                                            </div>
                                        </div>

                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-xl-4 col-xs-12 col-sm-12">
                                        <div style={{
                                            backgroundColor: 'rgb(242, 242, 242)',
                                            paddingTop: '40px',
                                            paddingBottom: '40px'
                                        }}>
                                        <div class="w3-container w3-center">
                                            <div className="container">
                                            <div className="row">
                                                <div className="col-5">
                                                    <img src={yellowHelmet} />
                                                    <br/>
                                                    <b style={{
                                                        fontFamily: 'Bebas Neue,cursive',
                                                        fontSize: '14px'
                                                    }}>TEAM GORDON</b> 
                                                </div>
                                                <div className="col-2">
                                                <h1 style={{
                                                        fontFamily: 'Bebas Neue,cursive',
                                                        textAlign: 'center',
                                                        paddingTop: '10px',
                                                        color: 'rgb(82, 194, 116)'
                                                    }}>
                                                        V
                                                    </h1>
                                                </div>
                                                <div className="col-5">
                                                    <img src={redHelmet}  style={{
                                                        transform: 'scaleX(-1)'
                                                    }} />
                                                    <br/>
                                                    <b style={{
                                                        fontFamily: 'Bebas Neue,cursive',
                                                        fontSize: '14px'
                                                    }}>TEAM ALAN</b> 
                                                </div>
                                                </div>
                                            </div>
                                        </div>

                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-xl-4 col-xs-12 col-sm-12">
                                        <div className="thirdMatch">
                                        <div style={{
                                            backgroundColor: 'rgb(242, 242, 242)',
                                            paddingTop: '40px',
                                            paddingBottom: '40px'
                                        }}>
                                        <div class="w3-container w3-center">
                                            <div className="container">
                                                <div className="row">
                                                <div className="col-5">
                                                    <img src={whiteHelmet} />
                                                    <br/>
                                                    <b style={{
                                                        fontFamily: 'Bebas Neue,cursive',
                                                        fontSize: '14px'
                                                    }}>TEAM BIGBOYS</b> 
                                                </div>
                                                <div className="col-2">
                                                    <h1 style={{
                                                        fontFamily: 'Bebas Neue,cursive',
                                                        textAlign: 'center',
                                                        paddingTop: '10px',
                                                        color: 'rgb(82, 194, 116)'
                                                    }}>
                                                        V
                                                    </h1>
                                                </div>
                                                <div className="col-5">
                                                    <img src={blackHelmet}  style={{
                                                        transform: 'scaleX(-1)'
                                                    }} /> 
                                                    <br/>
                                                    <b style={{
                                                        fontFamily: 'Bebas Neue,cursive',
                                                        fontSize: '14px'
                                                    }}>SUPERKINGS</b>
                                                </div>
                                                </div>
                                            </div>
                                        </div>

                                        </div>
                                        </div>
                                    </div>
                                    <p className="leagueMessage"
                                    > See Full League Messages</p>
                                </div>
                                <br/>
                                <br/>
                            </div>
                      </div>
                      </div>
                      <br/>
                      {/* <h3 style={{
                                 backgroundColor: 'white',
                                 color: 'rgb(0, 0, 46)',
                                 textAlign: 'center',
                                 paddingTop: '10px',
                                 paddingBottom: '10px',
                                 fontFamily: 'Bebas Neue,cursive',
                                 letterSpacing: '1px'
                             }}>UPCOMING LEAGUE MATCHUPS</h3> */}

                             <div className="dropdownHome">
                             <Collapse
                                bordered={false}
                                defaultActiveKey={['3']}
                                expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 270 : 90} />}
                                className="site-collapse-custom-collapse"
                                expandIconPosition={expandIconPosition}
                                // style={{
                                //     color: 'white',
                                // }}
                             >
                                <Panel header="GAMEWEEK FIXTURES" key="1" className="site-collapse-custom-panel"
                                    // style={{
                                    //     backgroundColor: 'rgb(0, 0, 46)',
                                    //     textAlign: 'left',
                                    //     color: 'white',
                                    //     paddingTop: '10px',
                                    //     paddingBottom: '10px',
                                    //     fontFamily: 'Bebas Neue,cursive',
                                    //     letterSpacing: '1px'
                                    // }}
                                    
                                >
                                {/* <p style={{
                                    color: 'black',
                                    backgroundColor: 'white'
                                }}>Hello</p> */}
                                <div style={{
                                    backgroundColor: 'white'
                                }}>
                                    <p style={{
                                        backgroundColor: 'rgb(241, 241, 241)',
                                        padding: '10px',
                                        textAlign: 'justify'
                                    }}>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                                    <p style={{
                                        backgroundColor: 'rgb(241, 241, 241)',
                                        padding: '10px',
                                        textAlign: 'justify'
                                    }}>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                                    <p style={{
                                        backgroundColor: 'rgb(241, 241, 241)',
                                        padding: '10px',
                                        textAlign: 'justify'
                                    }}>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                                    
                                </div>
                                </Panel>
                                <Panel header="RECENT ACTIVITY" key="2" className="site-collapse-custom-panel" >
                                <div className="container">
                                <table class="table table-striped">
                                    <thead className="homePagetableHeader">
                                        <tr>
                                        <th scope="col"></th>
                                        <th scope="col">TRANSACTION</th>
                                        <th scope="col">DETAILS</th>
                                        
                                        </tr>
                                    </thead>
                                    <tbody className="homePagetableBody">
                                        <tr>
                                        <th scope="row"></th>
                                        <td>+</td>
                                        <td>
                                            Team Gordon added Player ABC,<br/>
                                            Sea D/ST from Free Agency to Bench
                                        </td>
                                        
                                        </tr>
                                        <tr>
                                            <th scope="row"></th>
                                            <td>+</td>
                                            <td>
                                                Team Alan added Player XYZ,<br/>
                                                ATL, QB from Free Agency to Bench
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row"></th>
                                            <td>-</td>
                                            <td>
                                                Joes Club dropped Player XYZ,<br/>
                                                NY, QB from Bench to Waivers
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row"></th>
                                            <td>+-</td>
                                            <td>
                                                Team Alan dropped Player XYZ,ATL,QB<br/>
                                                Team Alan Added Player XYZ,ATL,QB
                                            </td>
                                        </tr>
                                        
                                    </tbody>
                                    </table>
                                </div>
                                </Panel>
                                <Panel header="TOP PICKS" key="3" className="site-collapse-custom-panel">
                                <div class="w3">
                      
                                    <div class="w3-card">
                                        <div className="container">
                                        <div className="row">
                                            <div className="col-6">
                                                    <div className="row">
                                                        <div className="col-3">
                                                            <div>
                                                                    <img src={whiteMen} style={{
                                                                width : '60px'
                                                            }}/>
                                                            </div>
                                                        </div>
                                                        <div className="col-9" style={{
                                                            fontFamily: 'Bebas Neue,cursive',
                                                            textAlign : 'center' 
                                                        }}>
                                                        <h2 style={{
                                                            fontSize : '16px'
                                                        }}>
                                                            K.MURRAY
                                                            
                                                        </h2>
                                                            <span style={{
                                                                color : 'green'
                                                            }}>
                                                                QUARTERBACK
                                                            </span>
                                                            (ARI)
                                                        
                                                        </div>
                                                    </div>
                                            </div>
                                            <div className="col-6">
                                            <div className="row">
                                                        <div className="col-3">
                                                            <div style={{
                                                                paddingLeft : '15px'
                                                            }}>
                                                                    <img src={whiteMen} style={{
                                                                width : '60px'
                                                            }}/>
                                                            </div>
                                                        </div>
                                                        <div className="col-9" style={{
                                                            fontFamily: 'Bebas Neue,cursive',
                                                            textAlign : 'center' 
                                                        }}>
                                                        <h2 style={{
                                                            fontSize : '16px'
                                                        }}>
                                                            K.MURRAY
                                                            
                                                        </h2>
                                                            <span style={{
                                                                color : 'green'
                                                            }}>
                                                                QUARTERBACK
                                                            </span>
                                                            (ARI)
                                                        
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                                        <br/>
                                        <div className="row">
                                            <div className="col-6">
                                                    <div className="row">
                                                        <div className="col-3">
                                                            <div>
                                                                    <img src={whiteMen} style={{
                                                                width : '60px'
                                                            }}/>
                                                            </div>
                                                        </div>
                                                        <div className="col-9" style={{
                                                            fontFamily: 'Bebas Neue,cursive',
                                                            textAlign : 'center' 
                                                        }}>
                                                        <h2 style={{
                                                            fontSize : '16px'
                                                        }}>
                                                            K.MURRAY
                                                            
                                                        </h2>
                                                            <span style={{
                                                                color : 'green'
                                                            }}>
                                                                QUARTERBACK
                                                            </span>
                                                            (ARI)
                                                        
                                                        </div>
                                                    </div>
                                            </div>
                                            <div className="col-6">
                                            <div className="row">
                                                        <div className="col-3">
                                                            <div style={{
                                                                paddingLeft : '15px'
                                                            }}>
                                                                    <img src={whiteMen} style={{
                                                                width : '60px'
                                                            }}/>
                                                            </div>
                                                        </div>
                                                        <div className="col-9" style={{
                                                            fontFamily: 'Bebas Neue,cursive',
                                                            textAlign : 'center' 
                                                        }}>
                                                        <h2 style={{
                                                            fontSize : '16px'
                                                        }}>
                                                            K.MURRAY
                                                            
                                                        </h2>
                                                            <span style={{
                                                                color : 'green'
                                                            }}>
                                                                QUARTERBACK
                                                            </span>
                                                            (ARI)
                                                        
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                                        
                                        </div>
                                    </div>
                                </div>
                                    
                                </Panel>
                            </Collapse>
                             </div>
                            <br/>

                            <div className="recentActivity" style={{
                                backgroundColor : 'white'
                            }}>

                            
                                <div class="w3">
                      
                      <div class="w3-card" >
                             <h3 style={{
                                 backgroundColor: 'white',
                                 color: 'rgb(0, 0, 46)',
                                 textAlign: 'center',
                                 paddingTop: '10px',
                                 paddingBottom: '10px',
                                 fontFamily: 'Bebas Neue,cursive',
                                 letterSpacing: '1px'
                             }}>RECENT ACTIVITY</h3>
                          
                                <div className="container">
                                <table class="table table-striped">
                        <thead className="homePagetableHeader">
                            <tr>
                            <th scope="col"></th>
                            <th scope="col">TRANSACTION</th>
                            <th scope="col">DETAILS</th>
                            
                            </tr>
                        </thead>
                        <tbody className="homePagetableBody">
                            <tr>
                            <th scope="row"></th>
                            <td>
                                <h1 style={{
                                    backgroundColor : '#0ebf02',
                                    textAlign : 'center',
                                    display: 'inline-grid',
                                    padding: '10px 15px 10px 15px',
                                    borderRadius: '50%',
                                    color: 'white'
                                }}>
                                    +
                                </h1>
                            </td>
                            <td>
                                Team Gordon added Player ABC,<br/>
                                Sea D/ST from Free Agency to Bench
                            </td>
                            
                            </tr>
                            <tr>
                                <th scope="row"></th>
                                <td>
                                <h1 style={{
                                    backgroundColor : '#0ebf02',
                                    textAlign : 'center',
                                    display: 'inline-grid',
                                    padding: '10px 15px 10px 15px',
                                    borderRadius: '50%',
                                    color: 'white'
                                }}>
                                    +
                                </h1>
                                </td>
                                <td>
                                    Team Alan added Player XYZ,<br/>
                                    ATL, QB from Free Agency to Bench
                                </td>
                            </tr>
                            <tr>
                                <th scope="row"></th>
                                <td>
                                <h1 style={{
                                    backgroundColor : '#f80501',
                                    textAlign : 'center',
                                    display: 'inline-grid',
                                    padding: '10px 15px 10px 15px',
                                    borderRadius: '50%',
                                    color: 'white'
                                }}>
                                    -
                                </h1>
                                </td>
                                <td>
                                    Joes Club dropped Player XYZ,<br/>
                                    NY, QB from Bench to Waivers
                                </td>
                            </tr>
                            <tr>
                                <th scope="row"></th>
                                <td>
                                    <span>
                                    <h1 style={{
                                    backgroundColor : '#0dc200',
                                    textAlign : 'center',
                                    display: 'inline-grid',
                                    padding: '10px 15px 10px 15px',
                                    borderRadius: '50%',
                                    color: 'white'
                                    }}>
                                        +
                                    </h1>
                                    <h1 style={{
                                    backgroundColor : '#f80501',
                                    textAlign : 'center',
                                    display: 'inline-grid',
                                    padding: '10px 15px 10px 15px',
                                    borderRadius: '50%',
                                    color: 'white'
                                    }}>
                                        -
                                    </h1>
                                    </span>
                                </td>
                                <td>
                                    Team Alan dropped Player XYZ,ATL,QB<br/>
                                    Team Alan Added Player XYZ,ATL,QB
                                </td>
                            </tr>
                            
                        </tbody>
                        </table>
                                </div>
                            </div>
                      </div>
                            </div>
                            
                            <br/>
                            <div className="recentActivity" style={{
                                backgroundColor : 'white'
                            }}>

                            
                                <div>
                      
                      <div class="w3-card" >
                             <h3 style={{
                                 backgroundColor: 'white',
                                 color: 'rgb(0, 0, 46)',
                                 textAlign: 'center',
                                 paddingTop: '10px',
                                 paddingBottom: '10px',
                                 fontFamily: 'Bebas Neue,cursive',
                                 letterSpacing: '1px',
                                 paddingLeft : '20px'
                             }}>TOP INFORM PICKS</h3>
                          
                                <div className="container">
                                        <div className="row">
                                            <div className="col-3">
                                                    <div style={{
                                                        textAlign : 'center'
                                                    }}>
                                                        <img src={whiteMen}/>
                                                    </div>
                                                    <h2 style={{
                                                        fontFamily: 'Bebas Neue,cursive',
                                                        textAlign : 'center'
                                                    }}>
                                                        K.MURRAY
                                                    </h2>
                                                    <p style={{
                                                        textAlign : 'center',
                                                        fontSize : '20px',
                                                        fontFamily: 'Bebas Neue,cursive',
                                                        fontWeight : '1px'
                                                    }}>
                                                        QUARTERBACK<br/>ARI
                                                    </p>
                                            </div> 
                                            <div className="col-3">
                                                    <div style={{
                                                        textAlign : 'center'
                                                    }}>
                                                        <img src={blueMen}/>
                                                    </div>
                                                    <h2 style={{
                                                        fontFamily: 'Bebas Neue,cursive',
                                                        textAlign : 'center'
                                                    }}>
                                                        D.COOK
                                                    </h2>
                                                    <p style={{
                                                        textAlign : 'center',
                                                        fontSize : '20px',
                                                        fontFamily: 'Bebas Neue,cursive',
                                                        fontWeight : '1px'
                                                    }}>
                                                        RUNNINGBACK<br/>ARI
                                                    </p>
                                            </div> 
                                            <div className="col-3">
                                                    <div style={{
                                                        textAlign : 'center'
                                                    }}>
                                                        <img src={whiteMen}/>
                                                    </div>
                                                    <h2 style={{
                                                        fontFamily: 'Bebas Neue,cursive',
                                                        textAlign : 'center'
                                                    }}>
                                                        J.DOE
                                                    </h2>
                                                    <p style={{
                                                        textAlign : 'center',
                                                        fontSize : '20px',
                                                        fontFamily: 'Bebas Neue,cursive',
                                                        fontWeight : '1px'
                                                    }}>
                                                        QUARTERBACK<br/>ARI
                                                    </p>
                                            </div> 
                                            <div className="col-3">
                                                    <div style={{
                                                        textAlign : 'center'
                                                    }}>
                                                        <img src={blueMen}/>
                                                    </div>
                                                    <h2 style={{
                                                        fontFamily: 'Bebas Neue,cursive',
                                                        textAlign : 'center'
                                                    }}>
                                                        A.PLAYER
                                                    </h2>
                                                    <p style={{
                                                        textAlign : 'center',
                                                        fontSize : '20px',
                                                        fontFamily: 'Bebas Neue,cursive',
                                                        fontWeight : '1px'
                                                    }}>
                                                        RUNNINGBACK<br/>ARI
                                                    </p>
                                            </div> 
                                        </div>
                                </div>
                            </div>
                      </div>
                            </div>
                </div>
                <div className="col-3">
                <div className="container">
                    <div className="recentActivity">
                    <div class="w3-container">
                      
                      <div class="card" >
                             <h3 style={{
                                 backgroundColor: 'rgb(0, 0, 46)',
                                 color: 'white',
                                 textAlign: 'center',
                                 paddingTop: '10px',
                                 paddingBottom: '10px',
                                 fontFamily: 'Bebas Neue,cursive',
                                 letterSpacing: '1px'
                             }}>SMACKTALK ROOM</h3>
                          
                          <div class="container">
                            <div className="row">
                                <div className="col-2"></div>
                                <div className="col-10">
                                    <p style={{
                                        backgroundColor : '#03ac36',
                                        color : 'white',
                                        // fontFamily: 'Bebas Neue,cursive',
                                        borderRadius: '5px',
                                        borderTopRightRadius: '0px',
                                        padding : '5px',
                                        fontStyle: 'italic'
                                    }}>
                                    Heard that before!<br/>I am actually the table topper. So relax.<br/>
                                    We got this one
                                    </p>
                                </div>
                            </div>
                            <br/>
                            <div className="row">
                                    <div className="col-10">
                                    <p style={{
                                        backgroundColor : '#e5e4e4',
                                        color : 'black',
                                        // fontFamily: 'Bebas Neue,cursive',
                                        borderRadius: '5px',
                                        borderTopLeftRadius: '0px',
                                        padding : '5px',
                                        fontStyle: 'italic'
                                    }}>
                                    Heard that before!<br/>I am actually the table topper. So relax.<br/>
                                    We got this one
                                    </p>
                                    </div>
                            </div>
                            <div className="row">
                                <div className="col-2"></div>
                                <div className="col-10">
                                    <p style={{
                                        backgroundColor : '#03ac36',
                                        color : 'white',
                                        // fontFamily: 'Bebas Neue,cursive',
                                        borderRadius: '5px',
                                        borderTopRightRadius: '0px',
                                        padding : '5px',
                                        fontStyle: 'italic'
                                    }}>
                                    Heard that before!<br/>I am actually the table topper. So relax.<br/>
                                    We got this one
                                    </p>
                                </div>
                            </div>
                            <br/>
                            <div className="row">
                                    <div className="col-10">
                                    <p style={{
                                        backgroundColor : '#e5e4e4',
                                        color : 'black',
                                        // fontFamily: 'Bebas Neue,cursive',
                                        borderRadius: '5px',
                                        borderTopLeftRadius: '0px',
                                        padding : '5px',
                                        fontStyle: 'italic'
                                    }}>
                                    Heard that before!<br/>I am actually the table topper. So relax.<br/>
                                    We got this one
                                    </p>
                                    </div>
                            </div>
                           
                            
                          </div>
                            <Divider/>
                          <footer>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-9">
                                            {/* <p style={{
                                                color: 'rgb(155, 155, 155)',
                                            }}> Type a message...</p> */}
                                            <Input placeholder=" Type a message..." style={{
                                                border: '1px solid transparent',
                                                marginTop: '-5px'
                                            }}/>
                                        </div>
                                        <div className="col-1">
                                            <img src={emoji} style={{
                                                width: '18px'
                                            }} />
                                        </div>
                                        <div className="col-1">
                                            <img src={send}  style={{
                                                width: '18px'
                                            }}/>
                                        </div>
                                    </div>
                                </div>
                          </footer>
                      </div>
                      </div>

                      <br/>
                        <div className="container">
                        <p className="homepageBannerSmall">
                            AD SPACE<br/>FOR HOMEPAGE
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage

