import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar,  XAxis,
    YAxis,
    Tooltip,
    Legend, 
    Line} from "recharts";
const Statistics = () => {

    const data = useLoaderData()
    
    return (
        <>
           <div className='bg-[#9538E2] h-[200px] rounded-lg flex flex-col justify-center items-center gap-3'>
            <h1 className='text-white text-2xl font-bold'>Statistics</h1>
            <p className='text-gray-200 text-center'>Explore the latest gadgets that will take your experience to the next level. From smart devices <br /> to the coolest accessories, we have it all!</p>
            </div> 
            <h1 className='text-3xl font-bold py-10 ml-24'>Statistics</h1>
           <div className="flex justify-center mx-auto bg-[#FFFFFF] h-[450px] rounded-lg  shadow-lg shadow-indigo-300 pt-4">
           <BarChart width={600} height={400} data={data} barSize={29}>
           <XAxis dataKey="category"  />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="price" fill="#9538E3" />
      <Bar dataKey="rating" fill="red" />
    </BarChart>
           </div>
        </>

    );
    
};

export default Statistics;