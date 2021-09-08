import useAsync from 'hooks/useAsync';
import { IProduct } from 'Models/types';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ProductService from 'services/ProductService';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from 'redux/actions/cartAction';

interface IParams {
  id: string;
}

const ProductDetails = () => {
  const { id } = useParams<IParams>();
  const getProduct = useCallback(() => {
    return ProductService.getProductByID(id);
  }, [id]);

  const dispatch = useDispatch();

  const { data, isLoading, isSuccess, isError, error } =
    useAsync<IProduct>(getProduct);

  // const {name, image, price, description} = (data || {}) as IProduct
  return (
    <div className="product__details__component my-3">
      <Container>
        <div className="wrapper bg-white rounded border p-5">
          {isLoading && <h3>Loading...</h3>}
          {isSuccess && (
            <Row>
              <Col md={4}>
                <img src={data ? data.image : ''} alt={data?.name} />
              </Col>
              <Col md={8}>
                <h3 className="mb-3">{data?.name}</h3>
                <h1 className="">৳ {data?.price}</h1>
                <button
                  onClick={() => dispatch(addToCart(data as IProduct))}
                  className="btn btn-primary"
                >
                  <AiOutlineShoppingCart /> Add to Cart
                </button>
                <p className="mt-5">{data?.description}</p>
              </Col>
            </Row>
          )}
          {isError && <h1>{error}</h1>}
        </div>
      </Container>
    </div>
  );
};

export default ProductDetails;
