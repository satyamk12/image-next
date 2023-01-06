import React , { useEffect } from 'react';
import "./Dashboard.css";
import $ from "jquery";
import { Link } from "react-router-dom";

const Dashboard = () => {

  useEffect(() => {
    const mobileScreen = window.matchMedia("(max-width: 990px )");
$(document).ready(function () {
    $(".dashboard-nav-dropdown-toggle").click(function () {
        $(this).closest(".dashboard-nav-dropdown")
            .toggleclassName("show")
            .find(".dashboard-nav-dropdown")
            .removeclassName("show");
        $(this).parent()
            .siblings()
            .removeclassName("show");
    });
    $(".menu-toggle").click(function () {
        if (mobileScreen.matches) {
            $(".dashboard-nav").toggleclassName("mobile-show");
        } else {
            $(".dashboard").toggleclassName("dashboard-compact");
        }
    });
});
  });


  return (
    <div className='dashboard'>
    <div className="dashboard-nav">
        <header>
          <a href="#!" className="menu-toggle"><i className="fas fa-bars"></i></a>
          <a href="#"className="brand-logo"><span>BOOKING <br /> WINDOW</span></a></header>
        <nav className="dashboard-nav-list">
            <Link to="/" className="dashboard-nav-item">Home</Link>

            <Link to="/" className="dashboard-nav-item active">Dashboard</Link>
            
           <Link to="/team" className="dashboard-nav-item">Team</Link>

            <Link to="/movies" className="dashboard-nav-item">Movies</Link>
           
            <Link to="/event" className="dashboard-nav-item">Events</Link>
          

            <Link to="/task" className="dashboard-nav-item">Tasks</Link>
         

            <Link to="/task" className="dashboard-nav-item">Documentaion</Link>
         
          <div className="nav-item-divider"></div>
          <a
                    href="#" className="dashboard-nav-item"><i className="fas fa-sign-out-alt"></i> Logout</a>
        </nav>
    </div>
    <div className='dashboard-app'>
        <header className='dashboard-toolbar'>
        <div class="row">
    <div class="col-xs-10 col-xs-offset-1">
    <form action="#" method="#" role="search">
    <div class="input-group">
    <input class="form-control" placeholder="Search . . ." name="srch-term" id="ed-srch-term" type="text"/>
    <div class="input-group-btn">
    <button type="submit" id="searchbtn">
    search</button>
    </div>
    </div>
    </form>
    </div>
	</div>
          <a href="#!" className="menu-toggle"><i className="fas fa-bars"></i>
          
          </a></header>
        <div className='dashboard-content'>
            <div className='container'>
                <div className='card'>
                    <div className='card-header'>
                        <h1 className='text-left'>Welcome!</h1>
                    </div>
                   
                </div>
            </div>

          <div className="row">
            <div className="col-lg-3">
            <div class="card rounded mt-5 mx-2" style={{width: '18rem'}}>
  <div class="card-body">
    <h5 class="card-title">Shows Booking</h5>
    <h6 class="card-subtitle mb-2 text-muted"><hr /></h6>
    <h1 class="card-text">2304</h1>
    <p class="card-link">2650</p>
  </div>
</div>
            </div>

            <div className="col-lg-3">
            <div class="card rounded mt-5 mx-2" style={{width: '18rem'}}>
  <div class="card-body">
    <h5 class="card-title">Event Booking</h5>
    <h6 class="card-subtitle mb-2 text-muted"><hr /></h6>
    <h1 class="card-text">438</h1>
    <p class="card-link">239</p>
  </div>
</div>
            </div>

            <div className="col-lg-3">
            <div class="card rounded mt-5 mx-2" style={{width: '18rem'}}>
  <div class="card-body">
    <h5 class="card-title">Shows Ended</h5>
    <h6 class="card-subtitle mb-2 text-muted"><hr /></h6>
    <h1 class="card-text">1876</h1>
    <p class="card-link">2283</p>
  </div>
</div>
            </div>

            <div className="col-lg-3">
            <div class="card rounded mt-5 mx-2" style={{width: '18rem'}}>
  <div class="card-body">
    <h5 class="card-title">Upcominmg Shows</h5>
    <h6 class="card-subtitle mb-2 text-muted"><hr /></h6>
    <h1 class="card-text">3475</h1>
    <p class="card-link">3475</p>
  </div>
</div>
            </div>
          </div>

 <div className="row">
      <div className="col-lg-8">
            <div class="card rounded mt-5 mx-2" style={{width: '39rem'}}>
          <div class="card-body">
            <h5 class="card-title">Recently Book Tickets</h5>
            <h6 class="card-subtitle mb-2 text-muted"><hr /></h6>
            <p class="card-text">3 Tickets for <b>for movie 123 <br /> </b> booked by <b>Rajesh Mehta</b></p>
            <p class="card-text">5 Tickets for <b>for movie 115 <br /> </b> booked by <b>Param Sinha</b></p>
            <p class="card-text">1 Ticket for <b>for movie 125 <br /> </b> booked by <b>Sita Ramesh</b></p>
            <p class="card-text">x Tickets for <b>for movie xxx <br /> </b> booked by <b>xxxx xxxxS</b></p>
            <p class="card-text">x Tickets for <b>for movie xxx <br /> </b> booked by <b>xxxx xxxxS</b></p>
            <p class="card-text">x Tickets for <b>for movie xxx <br /> </b> booked by <b>xxxx xxxxS</b></p>
         </div>
      </div>
      </div>
 </div>

        </div>


        
    </div>
</div>
  )
}

export default Dashboard