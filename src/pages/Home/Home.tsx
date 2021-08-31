import Banner from 'components/home/Banner';
import Products from 'components/home/Products';
import { IProduct } from 'Models/types';
import ProductService from 'services/ProductService';
import useAsync from 'hooks/useAsync';

const Home = () => {
  // const [products, setProducts] = useState<IProduct[]>([] as IProduct[]);

  // useEffect(() => {
  //  ProductService.getProducts().then(res => setProducts(res))
  // }, [])

  const { data, isLoading } = useAsync<IProduct[]>(ProductService.getProducts); // custom hook

  return (
    <div>
      <Banner />
      <Products products={data} isLoading={isLoading} />
    </div>
  );
};

export default Home;
