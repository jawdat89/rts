import { Child, ChildAsFC } from './Child';

const Parent = () => {
    return <Child color='red' onClick={() => console.log('clicked')}>
        some text
    </Child>;
};

export default Parent;