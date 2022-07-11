import React from 'react';

type MapType = {
    students: Array<StudentType>
    topCars: Array<TopCarsType>
}
type StudentType = {
    id: number,
    name: string,
    age: number,
}
type TopCarsType = {
    manufacturer: string,
    model: string,
}
export const Map = (props: MapType) => {
    return (
        <>
            <ul>
                {props.students.map((objectFromStudentArray, index) => {
                    return (
                        <li key={objectFromStudentArray.id}>
                            <span>{objectFromStudentArray.name}</span>
                            <span>{objectFromStudentArray.age}</span>
                        </li>
                    )
                })}
            </ul>
            <table>
                {props.topCars.map((objectFromCarsArray,index) => {
                    return (
                        <>
                            <tr>
                                <th>manufacturer</th>
                                <th>model</th>
                            </tr>
                            <tr key={index}>
                                <td>{objectFromCarsArray.manufacturer}</td>
                                <td>{objectFromCarsArray.model}</td>
                            </tr>
                        </>
                    )
                })}
            </table>
        </>
    );
};