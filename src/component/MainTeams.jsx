import React from 'react';
import { connect } from 'react-redux';
import { getparam } from '../action/Actions'



class MainTeams extends React.Component {


  componentDidMount() {
    var pathname = window.location.pathname;
    if(pathname==='/'){
      pathname = pathname + "2";
      return pathname;
    }
    this.props.sendparam(pathname);
  }

  render() {

    var { teams } = this.props;
    var listElement = teams.map((team, index) => {
      return (
        <li key={index}>
          <h6><span>{team.country}</span> </h6>
          <h1>{team.name}</h1>
          <p>{team.venue_name}</p>
          <p>{team.venue_address}</p>
          <p>{team.venue_city}</p>
        </li>
      )
    });

    return (
      <div className="table">
        <ul>
          {listElement}
        </ul>
      </div>
    )
  }
}


// Map all state to component props (for redux to connect)
const mapStateToProps = state => {
  return {
    teams: state.teams,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sendparam: (param) => {
      getparam(dispatch, param);
    },
  };
};

// Export a redux connected component
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainTeams);