import React from 'react';
import { Popover, Statistic, Row, Col } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import api from '../utils/api';


class Price extends React.Component {
    state = {
        most_recent: [],
        latestDailyPrice: [],
    }

    componentDidMount() {
        console.log(this.props)
        api.get(`/api/stocks/${this.props.symbol}/prices/most-recent/`)
            .then(res => {
                this.setState({
                    most_recent: res.data
                })
            })
        api.get(`/api/stocks/${this.props.symbol}/prices/most-recent/?interval=1d`)
            .then(res => {
                this.setState({
                    latestDailyPrice: res.data
                })
            })
    }

    render() {
        let change = this.state.most_recent.p_close / this.state.latestDailyPrice.p_close;
        if (change < 1) {
            change = (1 - change) * 100;
            return (
                <div className="site-statistic-demo-card" >
                    <Popover content={this.state.latestDailyPrice.date} title="Date of last close">
                        <Row gutter={25}>
                            <Col span={12}>
                                <Statistic
                                    title="Price"
                                    value={this.state.most_recent.p_close}
                                    precision={2}
                                    valueStyle={{ color: '#cf1322', fontSize: '18px' }}
                                    prefix={<ArrowDownOutlined />}
                                    suffix="$"
                                    style={{ width: '120%', height: '10%', fontSize: '5px', marginLeft: '-15%' }}
                                />
                            </Col>
                            <Col span={12} >
                                <Statistic
                                    title="Change %"
                                    value={-change}
                                    precision={2}
                                    valueStyle={{ color: '#cf1322', fontSize: '18px' }}
                                    prefix={<ArrowDownOutlined />}
                                    suffix="%"
                                    style={{ width: '120%', height: '10%', fontSize: '5px', marginLeft: '-15%' }}
                                />
                            </Col>
                        </Row>
                    </Popover>
                </div>
            );
        } else {
            change = (change - 1) * 100;
            return (
                <div className="site-statistic-demo-card" >
                    <Popover content={this.state.latestDailyPrice.date} title="Date of last close">
                        <Row gutter={25}>
                            <Col span={12}>
                                <Statistic
                                    title="Price"
                                    value={this.state.most_recent.p_close}
                                    precision={2}
                                    valueStyle={{ color: '#3f8600', fontSize: '18px' }}
                                    prefix={<ArrowUpOutlined />}
                                    suffix="$"
                                    style={{ width: '120%', height: '10%', fontSize: '5px', marginLeft: '-15%' }}
                                />
                            </Col>
                            <Col span={12} >
                                <Statistic
                                    title="Change %"
                                    value={change}
                                    precision={2}
                                    valueStyle={{ color: '#3f8600', fontSize: '18px' }}
                                    prefix={<ArrowUpOutlined />}
                                    suffix="%"
                                    style={{ width: '120%', height: '10%', fontSize: '5px', marginLeft: '-15%' }}
                                />
                            </Col>
                        </Row>
                    </Popover>
                </div>
            );
        }
    }
}

export default Price