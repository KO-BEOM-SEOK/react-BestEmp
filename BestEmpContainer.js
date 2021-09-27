import React, { useRef } from 'react';
import HrAppBar from 'ERP/HR/util/HrAppBar'
import BestEmp from './BestEmp';
import Axios from 'axios';

// ********** 2021/09/27 고범석   이달의 BEST 사원 **********
const BestEmpContainer = () => {

    const box = useRef(null);

    const clickFunc = () => {
        return (
            Axios.get(
                "http://localhost:8282/hr/emp/bestEmp.do"
            )
            // box.current.src = require('./img/emp.png')
        )
    }

    return (
        <>
            <div>
                <HrAppBar title='이달의 BEST 사원' />
                <br />
                <br />
                <h3 align='center'> 과연 이달의 BEST 사원은 누구일까요??</h3>
                <br />
                <br />
                <div style={
                    {
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center"
                    }
                }>
                    <img src={require('./img/bestEmp.png')} onClick={clickFunc} ref={box} />
                </div>
            </div>
        </>
    )
}

export default BestEmpContainer