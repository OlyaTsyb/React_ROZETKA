import React from "react";

function SpanMiddleBlock(){
    return(
        <div className={"text_block"}>
            <svg viewBox="0 0 24 24" id="icon-main-eye">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 8C0 8 5.37258 16 12 16C18.6274 16 24 8 24 8C24 8 18.6274 0 12 0C5.37258 0 0 8 0 8ZM2.50431 8C3.06751 8.69496 3.87735 9.61499 4.86962 10.5289C6.93373 12.4299 9.45672 14 12 14C14.5433 14 17.0663 12.4299 19.1304 10.5289C20.1226 9.61499 20.9325 8.69496 21.4957 8C20.9325 7.30504 20.1226 6.38501 19.1304 5.47114C17.0663 3.57011 14.5433 2 12 2C9.45672 2 6.93373 3.57011 4.86962 5.47114C3.87735 6.38501 3.06751 7.30504 2.50431 8Z" transform="translate(0 4)"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6ZM4 8C6.20914 8 8 6.20914 8 4C8 1.79086 6.20914 0 4 0C1.79086 0 0 1.79086 0 4C0 6.20914 1.79086 8 4 8Z" transform="translate(8 8)"></path>
            </svg>
            <span>Останні переглянуті товари</span>
        </div>
    )
}
export default SpanMiddleBlock;