import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { CarouselComponent } from '../../components';
import {Stack, Skeleton} from '@mui/material'
import { Button, Card, Media,Image,Heading,Content } from 'react-bulma-components';




class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ loading: false })
        }, 5000)
    }

        login = (e) => {
      
            this.setState({
                [e.target.name]: e.target.value
            })
        }
    
    render() {
        return (
            
            <Container>
                
                <h1>Welcome to My App Parkir</h1>
                <div style={{
                display: "flex",
                justifyContent: "center"
                }}>
                    {this.state.loading ?
                        <Stack spacing={1}>
                            <Skeleton variant="rectangular" width={600} height={400} />
                        </Stack>
                        :
                        <div style={{
                            width: 1200,
                            height: 500
                        }}>
                            <CarouselComponent />
                        </div>
                    }
                </div>
                <div style={{
                    margin: 50,
                    marginTop:200
                    
                }}>
                    
                    
                    <Card style={{ width: 300, margin: 'auto' }}>
                    <h2> Framework with bulma</h2>
                        
 <Card.Content>
   
        <Media>
          <Media.Item renderAs="figure" align="left">
            <Image
              size={64}
              alt="64x64"
              src="http://bulma.io/images/placeholders/128x128.png"
            />
          </Media.Item>
          <Media.Item>
            <Heading size={4}>John Smith</Heading>
            <Heading subtitle size={6}>
              @johnsmith
            </Heading>
          </Media.Item>
        </Media>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          iaculis mauris. <a>@bulmaio</a>.<a href="#1">#css</a>{' '}
          <a href="#2">#responsive</a>
          <br />
          <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </Content>
      </Card.Content>
                </Card>
                <Button color="primary">My Button</Button>
                </div>
            </Container>
        );
    }
                
}

export default Home;