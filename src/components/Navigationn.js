import React from "react";
import {Link} from "react-router-dom";

function Navigation(){
    return (
        <nav>
            <ul> 
                <li class="nav-item2"><a>소상공인을 위한 웹서비스</a></li>
                <li class="nav-item"><a><Link to="/main">Home</Link></a></li>
                <li class="nav-item"><a><Link to="/store">Street Store</Link></a></li>
                <li class="nav-item"><a><Link to="/busking">Busking</Link></a></li>
                <li class="nav-item"><a><Link to="/enroll">사업자등록하기</Link></a></li>

            </ul>
        </nav>
    )
}

export default Navigationn;