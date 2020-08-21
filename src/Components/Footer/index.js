import React from 'react';
import './index.less';

export default class Footer extends React.Component {

    state = {
        year: ''
    }

    componentDidMount() {
        const year = this.getYear();
        this.setState({
            year
        })
    }

    getYear() {
        return new Date().getFullYear();
    }

    render() {
        return (
            <div className="footer">
                &copy;{this.state.year} Zengwei Xu
            </div>
        )
    }

}