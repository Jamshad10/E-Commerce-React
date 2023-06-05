import React from 'react';
import { Carousel } from 'react-bootstrap';
import Categories from './Categories';
import Footer from './Footer';

function Home() {
  return (
    <>
    <div>
    <Carousel>
      <Carousel.Item>
        <img
          style={{
            height: '600px',
            width: '100vw'
          }}
          className="d-block w-100"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/08b6d354987911.5971a0fd31e99.jpg"
          alt="First slide"
        />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{
            height: '600px',
            width: '100vw'
          }}
          className="d-block w-100"
          src="https://scontent.fcok6-1.fna.fbcdn.net/v/t39.30808-6/272874569_4871253316275329_7063222051417194250_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_ohc=W0R5h1l_s6YAX8tjKTO&_nc_ht=scontent.fcok6-1.fna&oh=00_AfBuVGzKQef5TbFiN53xKjAYMUuKbmSK23C0pRebs8YrBw&oe=647BCDCA"
          alt="Second slide"
        />

        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{
            height: '600px',
            width: '100vw'
          }}
          className="d-block w-100"
          src="https://m.media-amazon.com/images/I/71X7r0uB6wL._SL1277_.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    <div>
    <Categories/>
    </div>
    <Footer/>
    </>
  )
}

export default Home