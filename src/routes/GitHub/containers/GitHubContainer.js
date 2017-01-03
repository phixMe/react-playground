import { connect } from 'react-redux';
import { increment, gitHubLogin, doubleAsync } from '../modules/counter';
import GitHub from '../components/GitHub';

const mapDispatchToProps = {
  increment : () => increment(1),
  gitHubLogin: () => gitHubLogin(4),
  doubleAsync
};

const mapStateToProps = (state) => ({
  counter : state.counter
});

export default connect(mapStateToProps, mapDispatchToProps)(GitHub);
