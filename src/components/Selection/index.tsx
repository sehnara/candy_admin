import React from "react";

const SelectBank = () => {
    return (
        <div>
            <label htmlFor="bank">은행</label>
            <select name="pets" id="pet-select">
                <option value="">은행 선택</option>
                <option value="gookmin">국민은행</option>
                <option value="sinhan">신한은행</option>
                <option value="busan">부산은행</option>
                <option value="korea">한국은행</option>
                <option value="kakao">카카오뱅크</option>
                <option value="toss">토스</option>
            </select>
        </div>
    );
}

export default SelectBank
