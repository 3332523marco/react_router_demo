import React from 'react';

class Page1 extends React.Component {
    componentDidMount () {
        console.log('mount');
    }

    componentWillUnmount () {
        console.log('un mount');
    }

    render () {
        return (
            <h3>This is React_router_demo page.</h3>
        );
    }
};

export default Page1;
