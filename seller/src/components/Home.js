import React, { Component } from 'react'
import axios from 'axios'
import { Card, Button } from 'react-bootstrap'
import ModalDigmond from './ModalDigmond'

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allDataDigmo: [],
            show: false,
            showModel: false,
            index: '',
            imgPath: '',
            name: '',
            level: '',
        }
    }

    // componentDidMount = async () => {
    //     try {
    //         const getAllDataAxios = await axios.get(`http://localhost:8000/REQ`);
    //         const dataAxios = getAllDataAxios.data
    //         this.setState({
    //             allDataDigmo: dataAxios,
    //             show: true
    //         })
    //     } catch {
    //         console.log('oops APi is not had data');
    //     }
    // }


    componentDidMount = async (req, res) => {
        await axios.get('http://localhost:8080/REQ').then(res => {
            console.log(res.data);
            this.setState({
                allDataDigmo: res.data,
                show: true
            })
        }).catch(err => console.log(err))
        console.log(this.state.allDataDigmo);

    }

    deleteItemREQ = async (e, idx) => {
        e.preventDefault();
        const spacvicDelete = await axios.delete(`http://localhost:8080/deleteREQ/${this.state.allDataDigmo[idx]._id}`);
        this.setState({
            allDataDigmo: spacvicDelete.data
        })
    }

    updateDigimonREQ = (idx) => {
        this.setState({
            showModel: true,
            imgPath: this.state.allDataDigmo[idx].img,
            name: this.state.allDataDigmo[idx].name,
            level: this.state.allDataDigmo[idx].level,
            index: idx
        })
    }
    onClose = () => {
        this.setState({
            showModel: false
        })
    }
    updateImgPath = (e) => {
        this.setState({
            imgPath: e.target.value,
        })
    }
    updatename = (e) => {
        this.setState({
            name: e.target.value,
        })
    }
    updatelevel = (e) => {
        this.setState({
            level: e.target.value,
        })
    }
    UpdateData = async (e) => {
        e.preventDefault();
        const UpdateBody = {
            img: this.state.imgPath,
            name: this.state.name,
            level: this.state.level,
        }
        const updateDegURL = `http://localhost:8080/updateREQ/${this.state.allDataDigmo[this.state.index]._id}`;
        const updateDegAxios = await axios.put(updateDegURL, UpdateBody);
        this.setState({
            allDataDigmo: updateDegAxios.data,
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.show &&
                    this.state.allDataDigmo.map((item, idx) => {
                        return (
                            <Card key={item.name} style={{
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
                                    <Button variant="danger"
                                        onClick={(e) => this.deleteItemREQ(e, idx)}
                                    >Reject</Button>
                                    <Button variant="info"
                                        onClick={() => this.updateDigimonREQ(idx)}
                                    >Update</Button>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
                {
                    <ModalDigmond
                        showModel={this.state.showModel}
                        close={this.onClose}
                        img={this.state.img}
                        name={this.state.name}
                        level={this.state.level}
                        updateimg={this.updateimg}
                        updatename={this.updatename}
                        updatelevel={this.updatelevel}
                        UpdateData={this.UpdateData}
                    />
                }
            </div>
        )
    }
}

export default Home