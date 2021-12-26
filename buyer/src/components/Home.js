import React, { Component } from 'react'
import axios from 'axios'
import { Card, Button } from 'react-bootstrap'
export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allDataDigmo: [],
            show: false,
        }
    }

    componentDidMount = async () => {
        try {
            const getAllDataAxios = await axios.get(`http://localhost:8000/getData`);
            const dataAxios = getAllDataAxios.data
            this.setState({
                allDataDigmo: dataAxios,
                show: true
            })
        } catch {
            console.log('oops APi is not had data');
        }
    }

    createFavCardItem = async (e, item) => {
        e.preventDefault();

        const dataBody = {
            name: item.name,
            img: item.img,
            level: item.level
        }
        await axios.post(`http://localhost:8000/createFAV`, dataBody)
    }
    render() {
        return (
            <div>
                {
                    this.state.show &&
                    this.state.allDataDigmo.map(item => {
                        return (
                            <Card style={{
                                width: '20rem',
                                display: 'inline-block',
                                margin: '15px',
                                border: '1px solid',
                                backgroundColor: '#B3C6F3'
                            }}>
                                <Card.Img variant="top" src={item.img} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text> {item.level} </Card.Text>
                                    <Button variant="primary"
                                        onClick={(e) => this.createFavCardItem(e, item)}
                                    >Add to Fav</Button>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </div>
        )
    }
}

export default Home
