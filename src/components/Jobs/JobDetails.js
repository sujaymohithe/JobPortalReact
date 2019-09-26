import React from 'react';
import styled from 'styled-components';

const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
`;

const Widget = styled.div`
    -webkit-box-flex: 0;
    position: relative;
    padding: 15px;
    box-sizing: border-box;
    width: 100%
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
    margin: 10px;
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
    white-space: normal;
    text-overflow: ellipsis;
    font-weight: bold;
    padding-left:10px;
    font-size: 14px;
    width: auto;
`
const CardblockPInline = styled(CardblockP)`   
    float: left;
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

const List = styled.ul`
  white-space: normal;
  list-style-type: square;
  list-style-position: outside;
  list-style-image: none;
  padding: 10px 20px;
  background-color: #fff;
`;

const ListItem = styled.li`
`;

class JobDetails extends React.Component {
    RequirementList(title) {
        return <ListItem>{title}</ListItem>

    }
    render() {
        const { isFetching, jobdetails } = this.props
        return (
            <div id="jobDetailsView">                
                {jobdetails.title && !isFetching &&
                    <Row>
                        <h2>Job Description</h2>
                        <Widget>
                            <Boxwidget>
                                <Cardheader>
                                    <Cardheader>{jobdetails.title}</Cardheader>
                                </Cardheader>
                                <Cardblock>
                                    <CardblockPInline>Employment Type - </CardblockPInline><CardblockPInline>{jobdetails.employment_type}</CardblockPInline>
                                </Cardblock>
                                <Cardblock>
                                    <CardblockPInline>Posted Date - </CardblockPInline><CardblockPInline>{jobdetails.posted_date}</CardblockPInline>
                                </Cardblock>
                                <Cardblock>
                                    <CardblockP>Technical & Professional requirements: </CardblockP>
                                    <div>
                                        {jobdetails.Requirement && jobdetails.Requirement.length > 0 &&
                                            <List>
                                                {jobdetails.Requirement.map(this.RequirementList, this)}
                                            </List>
                                        }
                                    </div>
                                </Cardblock>
                                <CardFooter>
                                    <Button as="a" primary>Apply</Button>
                                </CardFooter>
                            </Boxwidget>
                        </Widget >
                    </Row>}
            </div>
        );
    }
}

export default JobDetails;