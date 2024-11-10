import React from 'react';

const CourseCard = ({ image, title, description, price, duration, courses, roles, ButtonComponent }) => {
    return (
    <div className="bg-white w-96 p-2 rounded-lg">
        <div className="flex flex-col items-center">
        <img src={image} width="400" height="200" className="rounded-lg"/>
        <p className="text-[#586f85] mt-1 mb-1">{description}</p>
        <h4 className="font-semibold mt-1 mb-1">{title}</h4>
        <p className="mb-1">{price}</p>
        <div className="flex justify-evenly w-full">
            <p className="text-[#586f85] text-sm">{duration}</p>
            <p className="text-[#586f85] text-sm">{courses}</p>
            <p className="text-[#586f85] text-sm">{roles}</p>
        </div>
        <div className="flex justify-center mt-2">{ButtonComponent}</div>
        </div>
    </div>
    );
};

export default CourseCard;
