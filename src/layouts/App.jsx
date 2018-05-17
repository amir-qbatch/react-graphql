import React, { Component } from 'react';
import { Layout } from 'antd';
import { withRouter } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Slider from './Slider';
import BreadCrumbs from '../components/BreadCrumbs';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: false,
      user: {}
    };
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    const { Content } = Layout;
    return (
      <Layout> 
        <Slider {...this.state} />
        <Layout>
          <Header {...this.state} toggle={this.toggle}/>
            <div id="myAppContainer">
              <Content className="content-container">
                <BreadCrumbs currentPosition={'Dashboard'} /> 
                {React.cloneElement(this.props.children, {...this.props})}
              </Content>
            </div>
            <Footer />
        </Layout>
      </Layout>
    )
  }
}

export default withRouter(App);
