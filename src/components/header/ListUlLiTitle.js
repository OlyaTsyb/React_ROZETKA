import React from "react";
import list from "../../list-ul-ul-li-component/List";

function ListUlLiTitle(){
    return(
        <ul className={"list-ul-ul"}>
            {list.map(li => (
                <li className={"list-ul-ul li"}>
                    <a href="#!" className={"list-ul-ul_li_a "}>{li.title}</a>
                </li>

            ))
            }
        </ul>
    )}
    export default ListUlLiTitle;
