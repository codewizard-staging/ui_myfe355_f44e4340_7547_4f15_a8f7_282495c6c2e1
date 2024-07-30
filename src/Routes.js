import React from "react";
import { Routes, Route } from "react-router-dom";
import {
PetInfoForm
} from "screens";

const Component = (props) => {

    return (
        <Routes>
            

                        
            
                <Route path="/ssd" element={<PetInfoForm {...props} title={'Information Form Layout'} />} />
        </Routes>
    )

};

export default Component;