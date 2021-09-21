
import React from 'react'
import Select from 'react-select';

const GenreSelect = ({ label, onChange, defaultValue }) => {

    const options = [
        { value: "Hài", label: "Hài" },
        { value: "Lãng Mạn", label: "Lãng Mạn" },
        { value: "Hành Động", label: "Hành Động" },
        { value: "Kinh Dị", label: "Kinh Dị" },
        { value: "Gia Đình", label: "Gia Đình" },
        { value: "Hoạt Hình", label: "Hoạt Hình" },
        { value: "Khác", label: "Khác" }
    ]

    if (defaultValue) {
        var filterOption = options.map((e) => { return e.label }

        );
        console.log(filterOption)
        for (let i = 0; i < defaultValue.length; i++) {
            let indexFilter = filterOption.indexOf(defaultValue[i]);
            console.log(indexFilter)
        }
    }





    return (
        <div >
            <p className="m-0">{label}</p>
            <Select className="w-80" isMulti options={options} onChange={onChange}></Select>

        </div>

    );
};

export default GenreSelect;
