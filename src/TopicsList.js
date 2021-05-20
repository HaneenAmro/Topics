import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import RelatedTopics from './RelatedTopic.js';
import styled from 'styled-components';


const Container = styled.div`
    width :70%;
    margin-left : 14%;;
    margin-bottom : 3%;
`;

const Span = styled.span`
    display: flex;
    justify-content: space-between;
    text-decoration: underline double green;
    text-underline-position: under;
`;

//This function to render the main topics the relate to react and each topic has nested topics
function TopicList(props) {
    return (
        <Container>
        <Accordion>
            <AccordionSummary>
                <Typography>
                    <Span><strong>Topic Name:</strong>{props.name} </Span>
                    <Span><strong>Stargazer count:</strong>{props.count} </Span>
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    <div>
                    <strong>Related Topics:</strong>
                        {props.related.map((topic) => (
                            < RelatedTopics relName = {topic.name} relCount = {topic.stargazerCount}  />
                        ))}
                    </div>
                </Typography>
            </AccordionDetails>
        </Accordion>
        </Container>
    )
}

export default TopicList;