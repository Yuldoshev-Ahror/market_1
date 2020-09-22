import React from 'react';
import './style.css'

export default function Navbar() {
    return(
    <div>
        <div className="top-navbar-container">
            <div className="top-navbar-container-1">
                <div><p>When buying more than 200,000 soums, delivery in Tashkent is free</p></div>
                <div className="company-email">
                    <p><a href='#'><div><i class="fal fa-envelope"></i></div> <div>info@market.co</div></a></p>
                </div>
                <div className="company-phone-number">
                    <p><a href="#"><div><i class="fal fa-phone-alt"></i></div> <div>71 001 11 12</div></a></p>
                </div>
                <div className="laung">
                    <select>
                        <option>Uz</option>
                        <option>Rus</option>
                        <option>Eng</option>
                    </select>
                </div>
                <div className="user-registor">
                    <a href="#"><div><i class="fal fa-user"></i></div> <div>sign in or sign up</div></a>
                </div>
            </div>
            <div className="top-navbar-container-2">

            </div>
        </div>
    </div>
    )
}