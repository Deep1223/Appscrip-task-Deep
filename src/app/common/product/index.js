import Image from 'next/image';
import '../../styles/common/product.css';

const Products = ({ products }) => {
    const truncateName = (name) => {
        return name.length > 20 ? `${name.substring(0, 20)}...` : name;
    };

    return (
        <div className='items'>
            <div className='grid'>
                {products.map((product) => (
                    <div key={product.id} className='card'>
                        <div className='image-container'>
                            <Image
                                src={product.image}
                                alt={product.title}
                                className={`image ${product.rating.count === 0 ? 'out-of-stock' : ''}`}
                                width={200}
                                height={200}
                            />
                            <div className='new-product-label'>
                                {product.rating.rate > 4 ? 'NEW PRODUCT' : ''}
                            </div>
                            {product.rating.count === 0 && (
                                <div className='product-stock-div'>OUT OF STOCK</div>
                            )}
                        </div>
                        <div className='flex flex-jc-between product-desc-div'>
                            <div>
                                <h3 className='name'>{truncateName(product.title)}</h3>
                                <div className='actions'>
                                    <a href="javascript:void(0)" className='signin-div'>Sign in</a> or <a href="javascript:void(0)">Create an account</a> to see pricing
                                </div>
                            </div>
                            <div aria-rowspan={2} className='heart-div'>
                                <div className='heart'>
                                    {product.rating.rate > 4 ? '❤️' : '🤍'}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
