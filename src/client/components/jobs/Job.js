import React from 'react';
import styled from 'styled-components';
import device from '../Device';

const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
`;

const Widget = styled.div`
    position: relative;
    padding: 15px;
    box-sizing: border-box;
    @media ${device.laptop} {  
        flex: 0 0 25%;
        max-width : 25%;
    }

    @media ${device.laptopL} {  
        flex: 0 0 25%;
        max-width : 25%;
    }

    @media ${device.desktop} {
        flex: 0 0 25%;
        max-width : 25%;
    }

    @media ${device.tablet} {
        flex-direction: row;
        width: 100%;
    }

    @media ${device.mobileM} {
        flex-direction: row;
        width: 100%;
    }

    @media ${device.mobileS} {
        flex-direction: row;
        width: 100%;
    }

    @media ${device.mobileL} {
        flex-direction: row;
        width: 100%;
    }
`;

const Boxwidget = styled.div`
    position: relative;
    border: 1px solid #ccc;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border-radius: .25rem;
`;

const Cardheader = styled.div`
    margin-bottom: 0px;
    font-weight: bold;
    background-color: #999999;
    color: #fff;
    font-size: 16px;
    font-family: 'Graphik-Semibold';
    padding: 10px 18px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

const Cardblock = styled.div`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

const CardblockP = styled.p`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: bold;
    padding-left:10px;
    font-size: 12px;
`
const CardFooter = styled.div`
    padding: 10px;
    text-align: right;
    border-top: 1px solid #cccccc;
`
const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  cursor: pointer;
  text-decoration:none;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

class Job extends React.Component {
    //this is to populate list of all jobs 
    populateList(job, index) {
        return (           
            <Widget data-test="BoxWidget" key={index}>
                <Boxwidget>
                    <Cardheader>
                        <Cardheader>{job.title}</Cardheader>
                    </Cardheader>
                    <Cardblock>
                        <CardblockP>Employment Type - {job.employment_type}</CardblockP>
                        <CardblockP>Posted Date - {job.posted_date}</CardblockP>
                    </Cardblock>
                    <CardFooter>
                        <Button as="a" href={'/JobDetails/' + job.id} primary>View</Button>
                    </CardFooter>
                </Boxwidget>
            </Widget >
        );
    }

    render() {
        const { isFetching, jobs } = this.props
        return (
            <div id="tileview">
                <Row>
                    {isFetching && jobs.length === 0 && <h2>Loading...</h2>}
                    {!isFetching && jobs.length === 0 && <h2>Empty.</h2>}
                    {this.props.jobs && this.props.jobs.map(this.populateList, this)}
                </Row>
            </div>
        );
    }
}

export default Job;