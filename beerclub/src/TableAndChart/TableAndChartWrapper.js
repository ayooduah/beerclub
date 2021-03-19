import BeerClubTable from "./BeerClubTable";
import BeerClubChart from "./BeerClubChart";
import React, {useEffect,useState } from 'react';

function TableAndChartWrapper() {
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
    const [beerClubData,setBeerClubData] = useState([])
    const [tableHeader,setTableHeader] = useState([])
    const [selectedPerson,setSelectedPerson] = useState("")
    //fetch Data
    //Static header now - here in case of need to change
    useEffect(() => {
        setBeerClubData(formatCSVToBCObj());
        setTableHeader(['Person','Consumption']);
    },[setBeerClubData,setTableHeader])

    const formatCSVToBCObj = () => {
        const csvArr = beerClubCSV.split('\n');
        let beerClubDataArr = [];
        let count = 1;
        for(let i=1;i<csvArr.length;i++) {
            let currBeerClubObj = {};
            //check for count
            if(csvArr[i+1] && csvArr[i].includes(csvArr[i+1].split(',')[0])){
                count++
            } else {
                currBeerClubObj.person = csvArr[i].split(',')[0];
                currBeerClubObj.consumption = count;
                beerClubDataArr.push(currBeerClubObj);
                count=1;
            }
        }
        return beerClubDataArr;
    }
  return (
    <div className="TableAndChartWrapper">
        <p className="lead">
            Consumption per Member: {
            selectedPerson === '' ? 'Please Select a Person' :
                'Beer consumed by ' + selectedPerson
        }
        </p>

        {beerClubData && tableHeader &&
        <div className="TableAndChartWrapper-body">
            <BeerClubTable
                beerClubTableHeader={tableHeader}
                beerClubData={beerClubData}
                setSelectedPerson={setSelectedPerson}
            />
            <BeerClubChart
                beerClubTableHeader={tableHeader}
                beerClubData={beerClubData}
                selectedPerson={selectedPerson}
            />
        </div>
        }
    </div>
  );
}

export default TableAndChartWrapper;
