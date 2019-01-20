import styled from 'styled-components';
import WithDirection from '../../settings/withDirection';

const CollapseStyleWrapper = styled.div`
  #background-video{

    float: left;
    top: 0;
    padding: none;
    position: fixed; /* optional depending on what you want to do in your app */


  }
`;

export default WithDirection(CollapseStyleWrapper);
