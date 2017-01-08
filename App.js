import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './index.css';

const ONE_SECOND = 1000;

class App extends Component {

  render() {

    return (
      <div >
      <section id="banner">
  <div className="bg-color">
    <header id="header">
        <div className="container">
            <div id="mySidenav" className="sidenav">
              <a href="javascript:void(0)" className="closebtn" onclick="closeNav()">&times;</a>
              <br/>

              <a href="#about">About</a>
              <br/>
              <a href="#event">Event</a><br/>
              <a href="#menu-list">Menu</a><br/>
              <a href="#contact">Book a table</a><br/>
            </div>

            <span onclick="openNav()" className="pull-right menu-icon">☰</span>
        </div>
    </header>
    <div className="container">
    <div className="row">
      <div className="inner text-center">
        <h1 className="logo-name">Delicious</h1>
        <h2>Food To fit your lifestyle & health.</h2>
        <p>Specialized in Indian Cuisine!!</p>
      </div>
    </div>
    </div>
  </div>
</section>



<section id="about" className="section-paddinNameg">
    <div className="container">
        <div className="row">
            <div className="col-md-12 text-center marb-35">
                <h1 className="header-h">Delicious Journey</h1>
                <p className="header-p">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                <br/>nibh euismod tincidunt ut laoreet dolore magna aliquam. </p>
            </div>

              
            <div className="col-md-1"></div>
            <div className="col-md-10">
                <div className="col-md-6 col-sm-6">
                    <div className="about-info">
                        <h2 className="heading">vel illum qui dolorem eum</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero impedit inventore culpa vero accusamus in nostrum dignissimos modi, molestiae. Autem iusto esse necessitatibus ex corporis earum quaerat voluptates quibusdam dicta!</p>
                        <div className="details-list">
                            <ul>
                                <li><i className="fa fa-check"></i>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                <li><i className="fa fa-check"></i>Quisque finibus eu lorem quis elementum</li>
                                <li><i className="fa fa-check"></i>Vivamus accumsan porttitor justo sed </li>
                                <li><i className="fa fa-check"></i>Curabitur at massa id tortor fermentum luctus</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-6">
                    <img src="img/res01.jpg" alt="" className="img-responsive"/>
                </div>
            </div>
            <div className="col-md-1"></div>
        </div>Name
    </div>
</section>

<section id="event" className="section-paddinNameg">
    <div className="container">
        <div className="row">
            <div className="col-md-12 text-center marb-35">
                <h1 className="header-h">Delicious Journey</h1>
                <p className="header-p">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                <br/>nibh euismod tincidunt ut laoreet dolore magna aliquam. </p>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-10">
                <div className="col-md-6 col-sm-6">
                    <div className="about-info">
                        <h2 className="heading">vel illum qui dolorem eum</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero impedit inventore culpa vero accusamus in nostrum dignissimos modi, molestiae. Autem iusto esse necessitatibus ex corporis earum quaerat voluptates quibusdam dicta!</p>
                        <div className="details-list">
                            <ul>
                                <li><i className="fa fa-check"></i>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                <li><i className="fa fa-check"></i>Quisque finibus eu lorem quis elementum</li>
                                <li><i className="fa fa-check"></i>Vivamus accumsan porttitor justo sed </li>
                                <li><i className="fa fa-check"></i>Curabitur at massa id tortor fermentum luctus</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-6">
                    <img src="img/res01.jpg" alt="" className="img-responsive"/>
                </div>
            </div>
            <div className="col-md-1"></div>
        </div>Name
    </div>
</section>

<section id="contact" className="section-paddinNameg">
    <div className="container">
        <div className="row">
            <div className="col-md-12 text-center marb-35">
                <h1 className="header-h">Delicious Journey</h1>
                <p className="header-p">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                <br/>nibh euismod tincidunt ut laoreet dolore magna aliquam. </p>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-10">
                <div className="col-md-6 col-sm-6">
                    <div className="about-info">
                        <h2 className="heading">vel illum qui dolorem eum</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero impedit inventore culpa vero accusamus in nostrum dignissimos modi, molestiae. Autem iusto esse necessitatibus ex corporis earum quaerat voluptates quibusdam dicta!</p>
                        <div className="details-list">
                            <ul>
                                <li><i className="fa fa-check"></i>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                <li><i className="fa fa-check"></i>Quisque finibus eu lorem quis elementum</li>
                                <li><i className="fa fa-check"></i>Vivamus accumsan porttitor justo sed </li>
                                <li><i className="fa fa-check"></i>Curabitur at massa id tortor fermentum luctus</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-6">
                    <img src="img/res01.jpg" alt="" className="img-responsive"/>
                </div>
            </div>
            <div className="col-md-1"></div>
        </div>Name
    </div>
</section>

<section id="menu-list" className="section-paddinNameg">
    <div className="container">
        <div className="row">
            <div className="col-md-12 text-center marb-35">
                <h1 className="header-h">Delicious Journey</h1>
                <p className="header-p">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                <br/>nibh euismod tincidunt ut laoreet dolore magna aliquam. </p>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-10">
                <div className="col-md-6 col-sm-6">
                    <div className="about-info">
                        <h2 className="heading">vel illum qui dolorem eum</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero impedit inventore culpa vero accusamus in nostrum dignissimos modi, molestiae. Autem iusto esse necessitatibus ex corporis earum quaerat voluptates quibusdam dicta!</p>
                        <div className="details-list">
                            <ul>
                                <li><i className="fa fa-check"></i>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                <li><i className="fa fa-check"></i>Quisque finibus eu lorem quis elementum</li>
                                <li><i className="fa fa-check"></i>Vivamus accumsan porttitor justo sed </li>
                                <li><i className="fa fa-check"></i>Curabitur at massa id tortor fermentum luctus</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-6">
                    <img src="img/res01.jpg" alt="" className="img-responsive"/>
                </div>
            </div>
            <div className="col-md-1"></div>
        </div>Name
    </div>
</section>





      </div>

    );
  }
}

export default App;
