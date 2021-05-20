
import renderer from 'react-test-renderer';
import RelatedTopics from './RelatedTopic.js';


describe('My compnent', () => {
    const testProps = [
        {
            "name": "react",
            "stargazerCount": 51339
        },
        {
            "name": "vue",
            "stargazerCount": 37685
        },
    ];

    it('it works', () => {
        const tree = renderer.create(<RelatedTopics relName = {testProps[0].name} relCount = {testProps[0].stargazerCount} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
