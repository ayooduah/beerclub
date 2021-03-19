import React from 'react';

function BeerClubTable(props) {
  const getTableHeaders = () => {
    const tableHeaders = [];
    props.beerClubTableHeader.forEach(
        (value, index) => {
          tableHeaders.push(<th key={index}>{value}</th>)
        }
    )
    return tableHeaders;
  }

  const getTableBody = () => {
    const tableBody = [];
    props.beerClubData.forEach(
        (value, index) => {
          tableBody.push(
              <tr onClick={() => setSelectedPerson(value.person)}>
                <td key={"BeerClubTablePerson" + index}>{value.person}</td>
                <td key={"BeerClubTableConsumption" + index}>{value.consumption}</td>
              </tr>
          )
        }
    )
    return tableBody;
  }

  const setSelectedPerson = (selectedPerson) => {
    props.setSelectedPerson(selectedPerson);
  }
  console.log('props.beerClubData: ',props.beerClubData);
  return (
    <div className="BeerClubTableWrapper">
        <table className="table table-hover">
          <thead>
          <tr>
            {getTableHeaders()}
          </tr>
          </thead>
          <tbody>
          {getTableBody()}
          </tbody>
        </table>

    </div>
  );
}

export default BeerClubTable;
