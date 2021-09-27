import React, { useRef, useState } from 'react';
import HrAppBar from 'ERP/HR/util/HrAppBar'
import Axios from 'axios';

// ********** 2021/09/27 고범석   이달의 BEST 사원 **********
const BestEmpContainer = () => {

    const box = useRef(null);
    const [bestEmp, setBestEmp] = useState([]);

    console.log('!! here !!');
    console.log(bestEmp);
    console.log(bestEmp.img);

    const clickFunc = () => {
        return (
            Axios.get(
                "http://localhost:8282/hr/emp/bestEmp.do"
            ).then(
                ({ data }) => {
                    console.log(data);
                    console.log(data.bestEmp[0].empName);
                    console.log(data.bestEmp[0].img);
                    setBestEmp({
                        empName: data.bestEmp[0].empName,
                        deptCode: data.bestEmp[0].deptCode,
                        deptName: data.bestEmp[0].deptName,
                        img: data.bestEmp[0].img,
                        weekdayWorkDays: data.bestEmp[0].weekdayWorkDays
                    })

                    box.current.src = require(`./img/${data.bestEmp[0].img}`);

                }
            )
        )
    }

    return (
        <>
            <div>
                <HrAppBar title='저번달의 BEST 사원' />
                <br />
                <br />
                <h3 align='center'>
                    {
                        bestEmp.empName
                            ? `!! 총 일수${bestEmp.weekdayWorkDays}일 로 ${bestEmp.deptName} 부서의 ${bestEmp.empName} 사원이 BEST 사원입니다 !!`
                            : '과연 저번달의 BEST 사원은 누구일까요??'
                    }
                </h3>
                <br />
                <br />
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
                <br />
                <br />

                <h3 align='center'>
                    {
                        bestEmp.empName
                            ? ` ${bestEmp.empName} 사원님 축하드립니다 이번달도 기대할게요~`
                            : '궁금하시면 물음표를 클릭해 주세요~'
                    }
                </h3>
            </div>
        </>
    )
}

export default BestEmpContainer
// ********** 2021/09/27 고범석   이달의 BEST 사원 ************