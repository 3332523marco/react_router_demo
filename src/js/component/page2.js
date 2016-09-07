import React from 'react';

class Page2 extends React.Component {
    render () {
        return (
            <div>
                <h3>This is page2.</h3>
                <p>The page2 id is&nbsp;
                    <b style={{color: 'red'}}>{this.props.params.id}</b>
                </p>
            </div>
        );
    }
};

export default Page2;
