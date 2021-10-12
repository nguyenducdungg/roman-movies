
import React from 'react'
import Select from 'react-select';

const GenreSelect = ({ label, onChange, defaultValue }) => {

    const options = [
        { value: "Âm Nhạc", label: "Âm Nhạc" },
        { value: "Bí Ẩn", label: "Bí Ẩn" },
        { value: "Chiến Tranh", label: "Chiến Tranh" },
        { value: "Chính Kịch", label: "Chính Kịch" },
        { value: "Gia Đình", label: "Gia Đình" },
        { value: "Giật Gân", label: "Giật Gân" },
        { value: "Hài", label: "Hài" },
        { value: "Hành Động", label: "Hành Động" },
        { value: "Hoạt Hình", label: "Hoạt Hình" },
        { value: "Kinh Dị", label: "Kinh Dị" },
        { value: "Kỳ Ảo", label: "Kỳ Ảo" },
        { value: "Lãng Mạn", label: "Lãng Mạn" },
        { value: "Lịch Sử", label: "Lịch Sử" },
        { value: "Thực Tế", label: "Thực Tế" },
        { value: "Tội Phạm", label: "Tội Phạm" },
        { value: "Viễn Tưởng", label: "Viễn Tưởng" },
        { value: "Trẻ Em", label: "Trẻ Em" },
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
