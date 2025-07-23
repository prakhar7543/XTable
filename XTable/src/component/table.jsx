import './table.css';
import React from 'react';


let dummyData = 
[

    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2020-09-03", views: 200, article: "Article 4" }

]

export default function Table(){


    return (
        <div className='container'>
            <div className='tableContainer'>
                <h1>Date and Views Table</h1>
                <div className='btn'>
                    <button>Sort by Date</button>
                    <button>Sort by Views</button>
                </div>
                <div className='table'>
                    <table>
                        <tr className='dataHeader'>
                            <th>Date</th>
                            <th>Views</th>
                            <th>Article</th>
                        </tr>

                    {dummyData && dummyData.map((data, index) => (
                        <div key={index}>
                            <tr className='dataRows'>
                                <td className='date'>{data.date}</td>
                                <td className='views'>{data.views}</td>
                                <td className='article'>{data.article}</td>
                            </tr>
                           
                        </div>
                    ))
                    }
                    </table>

                </div>
            </div>
        </div>
    )
}