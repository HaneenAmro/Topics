import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const Shell = styled.div`
    margin-bottom: 2%;
`

const Span = styled.span`
    text-decoration: underline green;
    text-underline-position: under;
`

// this function to show the nested topic for each parent topic
function RelatedTopics(props) {
    return (
        <Shell>
        <Accordion>
            <AccordionSummary>
                <Typography>
                    <Span><strong>Topic Name:</strong>{props.relName}</Span>
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                <Span><strong>Stargazer count:</strong>{props.relCount}</Span>
                </Typography>
            </AccordionDetails>
        </Accordion>
        </Shell>

    )
}

export default RelatedTopics;