import BeerClubTable from "./BeerClubTable";
import BeerClubChart from "./BeerClubChart";
import csv from 'jquery-csv';
import React, { useEffect, useState } from 'react';

function TableAndChartWrapper() {
    //TODO Look for a better way to do this -AO
    const beerClubCSV = 'member,beer-style,date\n' +
        'steve,IPA,2015-01-01T01:00:00.000Z\n' +
        'steve,Porter,2015-01-02T02:00:00.000Z\n' +
        'steve,Stout,2015-01-03T03:00:00.000Z\n' +
        'steve,IPA,2015-01-06T04:00:00.000Z\n' +
        'steve,IPA,2015-01-06T05:00:00.000Z\n' +
        'steve,Porter,2015-01-07T06:00:00.000Z\n' +
        'steve,Porter,2015-01-07T07:00:00.000Z\n' +
        'steve,Stout,2015-01-07T08:00:00.000Z\n' +
        'steve,Stout,2015-01-08T09:00:00.000Z\n' +
        'steve,IPA,2015-01-09T01:00:00.000Z\n' +
        'steve,Porter,2015-01-10T02:00:00.000Z\n' +
        'steve,Stout,2015-01-11T03:00:00.000Z\n' +
        'steve,Stout,2015-01-12T04:00:00.000Z\n' +
        'steve,Porter,2015-01-13T05:00:00.000Z\n' +
        'steve,IPA,2015-01-15T06:00:00.000Z\n' +
        'steve,Stout,2015-01-17T07:00:00.000Z\n' +
        'bob,Porter,2015-01-01T08:00:00.000Z\n' +
        'bob,Porter,2015-03-01T09:00:00.000Z\n' +
        'bob,Stout,2015-03-01T01:00:00.000Z\n' +
        'bob,IPA,2015-08-01T02:00:00.000Z\n' +
        'jack,IPA,2015-02-01T03:00:00.000Z\n' +
        'jack,IPA,2015-04-01T04:00:00.000Z\n' +
        'jack,Porter,2015-05-01T05:00:00.000Z\n' +
        'jack,Stout,2015-05-01T06:00:00.000Z\n' +
        'jack,IPA,2015-05-01T07:00:00.000Z';
    const formatCSVToBCObj = () => {
        const csvArr = beerClubCSV.split('\n');
        let beerClubDataArr = [];
        let tableHeaders =  ['Person','Consumption'];

        for(let i=1;i<csvArr.length;i++) {
            const data = csvArr[i].split(',');
            let currBeerClubObj = {};
            for(let j=0;j<data.length;j++) {
                currBeerClubObj[tableHeaders[j].trim()] = data[j].trim();
            }
            beerClubDataArr.push(currBeerClubObj);
        }
        return beerClubDataArr;
    }
    const getBeerClubData = () => {
        const formattedBeerClubData = formatCSVToBCObj();
        console.log('beerClubData Before: ', formattedBeerClubData);

       return formattedBeerClubData;
    }
    const beerClubData = getBeerClubData();
    //TODO Promise/Data fetching here
    //TODO Change subHeader-text to be dynamic for who is selected -AO
  return (
    <div className="TableAndChartWrapper">
      <div className="TableAndChartWrapper-body">
          <span className="TableAndChartWrapper-body-subHeader-text">
              Consumption per Member: Beer consumed by Steve
          </span>
      </div>
        <BeerClubTable beerClubData={''}/>
        <BeerClubChart beerClubData={''} selectedPerson={''}/>
    </div>
  );
}

export default TableAndChartWrapper;
