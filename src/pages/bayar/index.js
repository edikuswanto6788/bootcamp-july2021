import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import RowInput from '../../components/rowInput';



class Bayar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jenis: "",
            plat: "",
            price: 0,
            masuk: "",
            keluar:"",
        }
    }

    setValue = (ev) => {
        this.setState({
                [ev.target.name]: ev.target.value
        });
       }

    state = {
        Colornames: {

        }
    }
    parkirBayar = () => {
        const { jenis, plat, price, total, bayar, masuk, keluar } = this.state
        newParkir=[]
        const newParkir = {
            jenis, plat, price, bayar,masuk,keluar
        
        }
        this.push(newParkir)
        console.log(newParkir);
        if (jenis === "motor") {
            price = 2000;
        } else if (jenis === "mobil") {
            price = 4000;
        }
        total = price * masuk;
        bayar = bayar - total;

      
    }


    render() {
        return (
          
            <Container>
                
                <h1> Pembayaran Parkir </h1>
                <div className="login-containter">
                <RowInput
                            label="Jenis Kendaraan"
                            type="text"
                            name="jenis"
                        change={this.setValue}
                        
                            
                        /> Motor
                        <RowInput
                            label="No Plat"
                            type="text"
                            name="plat"
                            change={this.setValue}
                            
                        />
                        <RowInput
                            label="Harga"
                            type="number"
                            name="price"
                        change={this.setValue}
                        

                    />
                    <RowInput
                            label="Jam Masuk"
                            type="text"
                            name="masuk"
                            change={this.setValue}

                    />

                <RowInput
                            label="Jam Keluar"
                            type="text"
                            name="keluar"
                            change={this.setValue}
                            
                    />
                    <RowInput
                            label="Total Parkir"
                            type="text"
                            name="totalP"
                            change={this.setValue}
                            
                        />
                        <RowInput
                            label="Total Bayar"
                            type="text"
                            name="total"
                            change={this.setValue}
                            
                        />

                    <button onClick={this.parkirBayar}>Hitung</button>
                    
                </div>
                </Container>
        );
    }
                
}

        export default Bayar;