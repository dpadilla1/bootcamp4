import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';
//import RemoveBuilding from './components/RemoveBuilding';
import { getAllJSDocTagsOfKind } from 'typescript';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0,
      data: this.props.data
    };
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({filterText: value});
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    var id2 = id - 1;
    this.setState({selectedBuilding: id2});
  }

  addBuilding(code, name, longitude, latitude, address) {
    var lastId = this.state.data[this.state.data.length - 1].id;
    var newData = this.state.data;
    newData.push({
        id: lastId + 1,
        code: code,
        name: name,
        coordinates: {
            longitude: longitude,
            latitude: latitude
        },
        address: address
    });
    this.setState({
      data: newData
    });
  }

  removeBuilding(id) {
    var newData = this.state.data.filter(building => {
      return building.id != id;
    });
    this.setState({
      data: newData
    });
  }

  render() {
    
    return (
      <div className="bg">
        <div className="row">
          <h1 class="header">UF Directory App</h1>
        </div>
          <Search 
            filterText={this.state.filterText}
            filterUpdate={this.filterUpdate.bind(this)}
          />
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    data={this.state.data}
                    filterText={this.state.filterText}
                    selectedUpdate={this.selectedUpdate.bind(this)}
                    removeBuilding={this.removeBuilding.bind(this)}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <div class="card text-white bg-success mb-3">
                <div class="card-body">
                  <h3 class="card-title">
                    Detailed Info
                  </h3>
                  <ViewBuilding
                    selectedBuilding={this.state.selectedBuilding}
                    data={this.props.data}
                  />
                </div>
              </div>
          {/*Start Copy--------------------*/}
              <div class="card">
                <div class="card-body">
                  <h3 class="card-title">
                    Add Building
                  </h3>
                  <AddBuilding addBuilding={this.addBuilding.bind(this)} />
                </div>
              </div> {/*End copy---------------*/}
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
