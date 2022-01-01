// import React from 'react'
// import { useEffect } from 'react'
// import { useState } from 'react'
// import { Line } from 'react-chartjs-2'


// //https://disease.sh/v3/covid-19/historical/all?lastdays=90
// //last 90 days data



// const buildChartData = (GraphData, casesType) => {
//     let chartData = [];
//     let lastDataPoint;
//     for(let date in GraphData.cases){
//         if(lastDataPoint){
//             let newDataPoint = {
//                 x: date,
//                 y: GraphData[casesType][date] - lastDataPoint,
//               };
//               chartData.push(newDataPoint);
//         }
//         lastDataPoint = GraphData[casesType][date];  
//     }
//     return chartData;
// };

// const Graph = () => {

//    const [GraphData, setGraphData] = useState({});

//    useEffect(() => {
//        const fetchData = async () => {
//         await fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=90")
//         .then(response => response.json())
//         .then(GraphData => {
//             console.log(GraphData);
//         })  
//        }
//     fetchData();
//    },[]);
   
// return (
//     <div>
//         <Line 
//          data={{
//              datasets: [
//                  {
//                  backgroundColor: "rgba(204, 16, 52, 0.5)",
//                  borderColor: "#CC1034",
//                  data: GraphData,
//                  }
//              ],

//          }}
//          options = {option}
        
//         />
//     </div>
// )
// }

// export default Graph
