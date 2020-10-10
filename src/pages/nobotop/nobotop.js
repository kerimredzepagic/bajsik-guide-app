import React, { useEffect, useState } from 'react';
import {Route, Link} from 'react-router-dom';

import '../nobotop/nobotop.css';

import Product from '../../compontents/product/product';
import Cart from '../../compontents/cart/cart';
import {NOBORadijatori} from './nobo-top-list';

const Nobotop = (props) => {

  const [vrijednostSlidera, setVrijednostSlidera] = useState({
    slider: 50
  });

  const [potrebnaSnaga, setPotrebnaSnaga] = useState({
    snaga: 3.5
  });

  const[cart,setCart] = useState({
    cartItems:[],
    snagKartice: 0
  })

  const[allproducts, setProduct] = useState({
    products: NOBORadijatori.NOBOTOP
  });

  const handleChange = (event) => {
    setVrijednostSlidera({
      slider: event.target.value
    })
    if (event.target.value <= 9){
      setPotrebnaSnaga({
        snaga: 0.5-cart.snagKartice
      })
    }
    if (event.target.value>9 && event.target.value <= 12){
      setPotrebnaSnaga({
        snaga: 0.75-cart.snagKartice
      })
    } 
    if (event.target.value>12 && event.target.value <= 15){
      setPotrebnaSnaga({
        snaga: 1-cart.snagKartice
      })
    } 
    if (event.target.value>15 && event.target.value <= 19){
      setPotrebnaSnaga({
        snaga: 1.25-cart.snagKartice
      })
    } 
    if (event.target.value>19 && event.target.value <= 23){
      setPotrebnaSnaga({
        snaga: 1.5-cart.snagKartice
      })
    } 
    if (event.target.value>23 && event.target.value<=30){
      setPotrebnaSnaga({
        snaga: 2-cart.snagKartice
      })
    } 
    if (event.target.value>30 && event.target.value<=39){
      setPotrebnaSnaga({
        snaga: 2.5-cart.snagKartice
      })
    } 
    if (event.target.value>39 && event.target.value<=42){
      setPotrebnaSnaga({
        snaga: 2.75-cart.snagKartice
      })
    }
    if (event.target.value>42 && event.target.value<=45){
      setPotrebnaSnaga({
        snaga: 3-cart.snagKartice
      })
    }
    if (event.target.value>45 && event.target.value<=49){
      setPotrebnaSnaga({
        snaga: 3.25-cart.snagKartice
      })
    }
    if (event.target.value>49 && event.target.value<=53){
      setPotrebnaSnaga({
        snaga: 3.5-cart.snagKartice
      })
    }
    if (event.target.value>53 && event.target.value<=60){
      setPotrebnaSnaga({
        snaga: 4-cart.snagKartice
      })
    }
    if (event.target.value>60 && event.target.value<=69){
      setPotrebnaSnaga({
        snaga: 4.5-cart.snagKartice
      })
    } 
    if (event.target.value>69 && event.target.value<=72){
      setPotrebnaSnaga({
        snaga: 4.75-cart.snagKartice
      })
    }
    if (event.target.value>72 && event.target.value<=75){
      setPotrebnaSnaga({
        snaga: 5-cart.snagKartice
      })
    }
    if (event.target.value>75 && event.target.value<=79){
      setPotrebnaSnaga({
        snaga: 5.25-cart.snagKartice
      })
    }
    if (event.target.value>79 && event.target.value<=83){
      setPotrebnaSnaga({
        snaga: 5.5-cart.snagKartice
      })
    }
    if (event.target.value>83 && event.target.value<=90){
      setPotrebnaSnaga({
        snaga: 6-cart.snagKartice
      })
    }
    if (event.target.value>90 && event.target.value<=100){
      setPotrebnaSnaga({
        snaga: 6.5-cart.snagKartice
      })
    }
  };

  return (
    <div className = "nobotop">
      <div className = "nobotop-sadrzaj">
        <div className = "nobotop-sadrzaj-logo">
          <div className = "nobotop-sadrzaj-logo-slika"></div>
        </div>
        <div className = "nobotop-sadrzaj-uputa">
          <p>Molimo Vas da pomjerite slider na kvadraturu Vašeg objekta (1 - 100 m^2):</p>
        </div>
        <div className = "nobotop-sadrzaj-slider">
          <input 
            className="slider"
            id="typeinp" 
            type="range" 
            min="1"
            max="100"
            defaultValue={vrijednostSlidera.slider}
            step="1"
            onChange = {(event) => handleChange(event)}
          />
        </div>
        <div className = "nobotop-sadrzaj-infoholder">  
          <div className = "nobotop-sadrzaj-kvadratura">
            <h5>Vaša trenutna unesena kvadratura objekta iznosi:</h5>
            <div className = "nobotop-sadrzaj-kvadratura-info">
                <h3>{vrijednostSlidera.slider}</h3>
                <h4>m^2</h4>
            </div>
          </div>
          <div className = "nobotop-sadrzaj-kvadratura">
          <h5>Potrebna snaga za zagrijavanje Vaše prostroije iznosi:</h5>
            <div className = {potrebnaSnaga.snaga<=0 ? "green" : "nobotop-sadrzaj-kvadratura-info"}>
              <h3>
                {
                  potrebnaSnaga.snaga<0 ? 0 : potrebnaSnaga.snaga
                }
              </h3>
              <h4>kW</h4>
            </div>
        </div>
        </div>
        <div className = "nobotop-sadrzaj-proizvodi">
          <div className = "nobotop-sadrzaj-proizvodi-naslov">
            <h1>Naši NOBO Top radijatori: </h1>
            <p>Dodavanjem proizvoda u izabrane proizvode smanjujete broj potrebne snage(kW) za Vaše prostorije</p>
          </div>
          <div className = "nobotop-sadrzaj-proizvodi-spisak">
          {
            allproducts.products.map((product,index) => {
              return <Product key={product.id} id={product.id} name={product.name} img={product.img}/>
            })
          }
          </div>
        </div>
        <div className = "nobotop-sadrzaj-korpa">
          <h1>Vaši izabrani proizvodi: </h1>
          <div className = "nobotop-sadrzaj-korpa-izabrano">
          {
            cart.cartItems.map((item, index) => {
              return <Cart
                key = {item[0].id}
                id = {item[0].id}
                name = {item[0].name}
                value = {item[0].value}
                link = {item[0].link}
              />
            })
          }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nobotop;