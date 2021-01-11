import React from "react";


function TopNavbarLine(){
    return(
          <div className="top_navbar_top_line">
                    <div className="phone">
                        <i className="fas fa-phone-square-alt color_white"></i>
                        <button className="phone_button" type = "button">044 567 76 87</button>
                        <i className="fas fa-chevron-circle-down color_white"></i>
                        <span><a href="">Контакти</a></span>
                        <span><a href="">Допомога</a></span>
                        <span><a href="">Наша відповідь COVID-19</a></span>
                    </div>
                    <div className="lang">
                        <span><a href="" >RU </a></span>
                        <span><a href="" >UA</a></span>
                    </div>
                    <div className="city">
                        <div>
                        <span>Місто</span>
                        <span><a href="">Львів</a></span>
                        </div>
                        <div>
                        <span className="user">Вітаємо,</span>
                         <i className="fas fa-portrait"></i>
                         <span ><a href="">Новий користувач</a></span>
                        </div>
                    </div>
                </div>
    )
}
export default TopNavbarLine;