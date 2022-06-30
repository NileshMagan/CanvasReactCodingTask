import { connect } from 'react-redux';
import { getFindingsSelector } from '../../store/findings/selectors';
import { fetchFindingsRequest, setSelectedFinding, setSelectedFindingId } from "../../store/findings/actions";

import Main from './main';

const mapStateToProps = (state: any) => ({
});
 
const mapDispatchToProps = {
    fetchData: fetchFindingsRequest,
    setSelectedFindingId: setSelectedFindingId
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
