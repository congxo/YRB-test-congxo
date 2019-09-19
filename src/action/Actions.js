import ApiServices from '../apiServices/apiServices';
export const PREMIER_LEAGUE = "PREMIER_LEAGUE"

export const getparam = async (dispatch, param) => {
    const listTeam = await ApiServices.teamLeague(param);
    console.log("xo get list", listTeam.data.api.teams);
    dispatch(listPremierLeague(listTeam.data.api.teams))
}

export const listPremierLeague = (teams) => {
    return {
        type: PREMIER_LEAGUE,
        teams
    }
}

