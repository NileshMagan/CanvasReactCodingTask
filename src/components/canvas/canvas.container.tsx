import { connect } from 'react-redux';
import { getFindingsSelector, getSelectedFindingSelector } from '../../store/findings/selectors';
import { FindingsState } from "../../store/findings/types";

import Canvas from './canvas';

const mapStateToProps = (state: any) => ({
    findings: getFindingsSelector(state), 
    selectedFinding: getSelectedFindingSelector(state) 
});
 
const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Canvas);
