import { IProduct } from 'Models/types';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import imageUrlParser from 'utils/imageUrlParser';

interface IProps {
  product: IProduct;
}

const Product = ({ product }: IProps) => {
  console.log(product);

  const { name, image, _id } = product;
  return (
    <Col md={3} className="mb-3">
      <Link to={`/product/${_id}`}>
        <Card>
          <Card.Img variant="top" src={imageUrlParser(image)} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default Product;
