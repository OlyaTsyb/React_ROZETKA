import React from "react";

function InputBlock(){
    return(
        <div className="input_block">
            <div>
                <i className="fas fa-search"></i>
            </div>
            <input className="search-form__input ng-pristine ng-valid ng-touched"  type="text" placeholder="Я шукаю..."/>
            <div>
                <i className="fas fa-microphone"></i>
            </div>
            <button>Знайти</button>
        </div>
    )
}

export default InputBlock;