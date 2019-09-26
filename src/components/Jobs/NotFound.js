import React from 'react';
import styled from 'styled-components';

const Title = styled.header`
    font-weight: bold;
    font-size:28px;
`;

class NotFound extends React.Component {
    render() {
        return (<div><br />
            <Title>The resource you are trying to find is not available.</Title>
        </div >);
    }
}

export default NotFound;