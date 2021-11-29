import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function CardSlider() {
  return (
    <div style={{background:"grey", padding:"5%"}}>
      <Carousel variant="dark" indicators={false}>
        <Carousel.Item>
        <CardGroup style={{display:"flex", gap:"40px", jusifyContent:"space-around"}}>
          <Card className="bg-dark text-white" style={{height:"300px", width:"300px"}}>
                <Card.Img src="./cardslider/art-and-crafts-collection.webp" alt="Card image" />
                  <Card.ImgOverlay>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a natural
                      lead-in to additional content. This content is a little bit
                      longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                  </Card.ImgOverlay>
           </Card>
          <Card className="bg-dark text-white" style={{height:"300px", width:"300px"}}>
            <Card.Img src="./cardslider/comedy-shows-collection.webp" alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
                </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card>
          <Card className="bg-dark text-white" style={{height:"300px", width:"300px"}}>
            <Card.Img src="./cardslider/cooking-collection.webp" alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
                </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card> 
          <Card className="bg-dark text-white" style={{height:"300px", width:"300px"}}>
            <Card.Img src="./cardslider/dance-collection.webp" alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
                </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </CardGroup>
        </Carousel.Item>


        <Carousel.Item>
        <CardGroup style={{display:"flex", gap:"40px", jusifyContent:"space-around"}}>
          <Card className="bg-dark text-white" style={{height:"300px", width:"300px"}}>
                <Card.Img src="./cardslider/esports-collection.webp" alt="Card image" />
                  <Card.ImgOverlay>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a natural
                      lead-in to additional content. This content is a little bit
                      longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                  </Card.ImgOverlay>
           </Card>
          <Card className="bg-dark text-white" style={{height:"300px", width:"300px"}}>
            <Card.Img src="./cardslider/fitness-collection.webp" alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
                </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card>
          <Card className="bg-dark text-white" style={{height:"300px", width:"300px"}}>
            <Card.Img src="./cardslider/interactive-games-collection.webp" alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
                </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card> 
          <Card className="bg-dark text-white" style={{height:"300px", width:"300px"}}>
            <Card.Img src="./cardslider/kids-collection.webp" alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
                </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </CardGroup>
        </Carousel.Item>


        <Carousel.Item>
        <CardGroup style={{display:"flex", gap:"40px", jusifyContent:"space-around"}}>
          <Card className="bg-dark text-white" style={{height:"300px", width:"300px"}}>
                <Card.Img src="./cardslider/music-shows-collection.webp" alt="Card image"/>
                  <Card.ImgOverlay>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a natural
                      lead-in to additional content. This content is a little bit
                      longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                  </Card.ImgOverlay>
           </Card>
          <Card className="bg-dark text-white" style={{height:"300px", width:"300px"}}>
            <Card.Img src="./cardslider/self-improvement-collection.webp" alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
                </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card>
          <Card className="bg-dark text-white" style={{height:"300px", width:"300px"}}>
            <Card.Img src="./cardslider/theatre-shows-collection.webp" alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
                </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card> 
          <Card className="bg-dark text-white" style={{height:"300px", width:"300px"}}>
            <Card.Img src="./cardslider/workshops-collection.webp" alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
                </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </CardGroup>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CardSlider;
