import React, { Component } from 'react';
import { Card } from '../common'
import { Form, Button, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { yearSelection, facultySelection, genderSelection, resultSelection, search } from '../actions/academicactions'
import './Academic.css';
import Sidebar from './sidebar';

class Academic extends Component {
    onYearSelection = (e) => {
        let value = e.target.value;
        this.props.yearSelection(value);
    }
    onFacultySelection = (e) => {
        let value = e.target.value;
        this.props.facultySelection(value);
    }
    onGenderSelection(e) {
        let value = e.target.value;
        this.props.genderSelection(value);
    }
    onResultSelection(e) {
        let value = e.target.value;
        this.props.resultSelection(value);
    }
    onButtonPress() {

        const { year, faculty, gender, result } = this.props;
        this.props.search({ year, faculty, gender, result });
    }
    renderButton() {
        return (
            <div align="left" style={styles.row2Style}>
                <Button onClick={this.onButtonPress.bind(this)} >
                    Submit
                </Button>
            </div>
        );
    }
    render() {
        return (
            <div >
               {/* <Sidebar /> */}
                <Form>

                    <Card>
                        <Form.Row style={styles.row1Style} >
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Year</Form.Label>
                                <Form.Control
                                    as="select"
                                    onChange={this.onYearSelection.bind(this)}
                                >
                                    <option value="">Choose..</option>
                                    <option value="2072">2072</option>
                                    <option value="2073">2073</option>
                                    <option value="2074">2074</option>
                                    <option value="2075">2075</option>

                                </Form.Control>

                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Faculty</Form.Label>
                                <Form.Control
                                    as="select"
                                    onChange={this.onFacultySelection.bind(this)}
                                >
                                    <option>Choose..</option>
                                    <option>BCT</option>
                                    <option>BEX</option>
                                    <option>BME</option>
                                    <option>BCE</option>
                                    <option>BGE</option>
                                    
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>



                        <Form.Row style={styles.rowStyle}>

                            <Form.Group as={Col} controlId="formGridCity"
                                onChange={this.onGenderSelection.bind(this)}
                            >
                                <Form.Label >Gender</Form.Label>

                                <Col sm={10}>
                                    <Form.Check
                                        type="radio"
                                        label="Male"
                                        name="formHorizontalRadios1"
                                        id="formHorizontalRadios1"
                                        value="M"

                                    />
                                    <Form.Check
                                        type="radio"
                                        label="Female"
                                        name="formHorizontalRadios2"
                                        id="formHorizontalRadios2"
                                        value="F"
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="Other"
                                        name="formHorizontalRadios3"
                                        id="formHorizontalRadios3"
                                        value="other"
                                    />
                                </Col>


                            </Form.Group>
                            <Form.Label>Result</Form.Label>
                            <Form.Group as={Col} controlId="formGridCity"
                                onChange={this.onResultSelection.bind(this)}
                            >

                                <Form.Label>
                                    <Col sm={10}>
                                        <Form.Check
                                            type="radio"
                                            label="Pass"
                                            name="formHorizontalRadios4"
                                            id="formHorizontalRadios4"
                                            value="pass"
                                        />
                                        <Form.Check
                                            type="radio"
                                            label="Fail"
                                            name="formHorizontalRadios5"
                                            id="formHorizontalRadios5"
                                            value="fail"
                                        />
                                    </Col>
                                </Form.Label>
                            </Form.Group>

                        </Form.Row>
                        {this.renderButton()}
                    </Card>
                </Form>
                   
</div>
            // </div>
        );
    }
}


const styles = {
    rowStyle: {
        paddingLeft: 20,
        paddingRight: 20
    },
    row1Style: {
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20
    },
    row2Style: {
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20
    },
}
const mapStateToProps = state => {
    return {
        year: state.academic.year,
        faculty: state.academic.faculty,
        gender: state.academic.gender,
        result: state.academic.result,
        collections:state.academic.collections
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        yearSelection: (value) => dispatch(yearSelection(value)),
        facultySelection: (value) => dispatch(facultySelection(value)),
        genderSelection: (value) => dispatch(genderSelection(value)),
        resultSelection: (value) => dispatch(resultSelection(value)),
        search: ({ year, faculty, gender, result }) => dispatch(search({ year, faculty, gender, result }))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Academic);
