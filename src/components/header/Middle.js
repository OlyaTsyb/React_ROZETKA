import React from "react";
import first from "../../img/266266.jpg";
import second from "../../img/1831721.jpg";
import third from "../../img/1840796.jpg";
import fourth from "../../img/1840826.jpg";
import fifth from "../../img/27157655.jpg";

function Middle(){
    return(
        <div id="carousel" class="carousel slide d-inline-block" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carousel" data-slide-to="0" class="active"></li>
                <li data-target="#carousel" data-slide-to="1"></li>
                <li data-target="#carousel" data-slide-to="2"></li>
                <li data-target="#carousel" data-slide-to="3"></li>
                <li data-target="#carousel" data-slide-to="4"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="img-fluid" src={first} alt="..."/>
                </div>
                <div class="carousel-item">
                    <img class="img-fluid" src={second} alt="..."/>
                </div>
                <div class="carousel-item">
                    <img class="img-fluid" src={third} alt="..."/>
                </div>
                <div className="carousel-item">
                    <img className="img-fluid" src={fourth} alt="..."/>
                </div>
                <div className="carousel-item">
                    <img className="img-fluid" src={fifth} alt="..."/>
                </div>
            </div>

        <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Предыдущий</span>
        </a>
        <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Следующий</span>
        </a>
        </div>

    )
}
export default Middle;