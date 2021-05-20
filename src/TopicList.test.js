
import renderer from 'react-test-renderer';
import TopicsList from './TopicsList.js';

describe('My compnent', () => {
    const testProps =
    {
        "data": {
            "topic": {
                "relatedTopics": [
                    {
                        "id": "MDU6VG9waWNhbmd1bGFy",
                        "name": "angular",
                        "stargazerCount": 31274,
                        "relatedTopics": [
                            {
                                "name": "react",
                                "stargazerCount": 51339
                            },
                            {
                                "name": "vue",
                                "stargazerCount": 37685
                            },
                            {
                                "name": "azure-functions",
                                "stargazerCount": 15
                            },
                            {
                                "name": "frontend",
                                "stargazerCount": 21594
                            },
                            {
                                "name": "backend",
                                "stargazerCount": 276
                            },
                            {
                                "name": "typescript",
                                "stargazerCount": 18711
                            },
                            {
                                "name": "asp",
                                "stargazerCount": 61
                            },
                            {
                                "name": "cli",
                                "stargazerCount": 16199
                            },
                            {
                                "name": "firebase",
                                "stargazerCount": 15240
                            },
                            {
                                "name": "spring-boot",
                                "stargazerCount": 16830
                            }
                        ]
                    },
                ]
            }
        }
    }



                    it('it works', () => {
                        const tree = renderer.create(<TopicsList key={testProps.data.topic.relatedTopics[0].id}  name={testProps.data.topic.relatedTopics[0].name} count={testProps.data.topic.relatedTopics[0].stargazerCount} 
                            related = {testProps.data.topic.relatedTopics[0].relatedTopics} />).toJSON();
                        expect(tree).toMatchSnapshot();
                    });
            });
