import { Chart } from "react-google-charts";
import React from 'react';

function BeerClubChart(props) {
    const chartData = [props.beerClubTableHeader]
    props.beerClubData.forEach((value) => {
      chartData.push([value.person, value.consumption]);
    })

  return (
    <div className="BeerClubChart">
      <Chart
          width={'800px'}
          height={'400px'}
          chartType="PieChart"
          data={chartData}
          options={{
            legend: 'none',
            pieSliceText: 'label',
          }}
      />
    </div>
  );
}

export default BeerClubChart;
