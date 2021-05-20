
import { useQuery, gql } from "@apollo/client";
import TopicsList from './TopicsList.js';
import styled from 'styled-components';

// GraphQl query that fetch the topic and the related topics of each topic
const FILMS_QUERY = gql`
{
  topic(name: "react") {
        relatedTopics(first: 10) {
          id
          name
          stargazerCount
          relatedTopics(first: 10) {
            name
            stargazerCount      
          }
      }
  }
}`;

// Used styled Component for the styling
const Body = styled.body`
  background : rgb(59, 59, 59)
`;

const H1 = styled.h1`
  color: #fff;
  margin-left: 36%
`;

function App() {
  const { data, loading, error } = useQuery(FILMS_QUERY);
  
  //if statements if there is a data show loading if not throw err
  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>

  return (
    <Body>
      <div>
      <H1>Topics Realated to react</H1>
      <div>
        {data.topic.relatedTopics.map((topic) => (
          <TopicsList key={topic.id}  name={topic.name} count={topic.stargazerCount} 
            related = {topic.relatedTopics}
          />    
        ))}
      </div>
    </div>
    </Body>
  );
};

export default App;
