import React from 'react';
import Card from '../../components/Card/Card';
import './Block.css';


const products = [
	{
		title: 'manga',
		description: 'title',
		img: '',
	},

	{
		title: 'manga',
		description: 'title',
		img: '',
	},
	{
		title: 'manga',
		description: 'title',
		img: '',
	},

	{
		title: 'manga',
		description: 'title',
		img: '',
	},
	{
		title: 'manga',
		description: 'title',
		img: '',
	},

	{
		title: 'manga',
		description: 'title',
		img: '',
	},
	{
		title: 'manga',
		description: 'title',
		img: '',
	},

	{
		title: 'manga',
		description: 'title',
		img: '',
	},
	{
		title: 'manga',
		description: 'title',
		img: '',
	},

	{
		title: 'manga',
		description: 'title',
		img: '',
	},
	{
		title: 'manga',
		description: 'title',
		img: '',
	},

	{
		title: 'manga',
		description: 'title',
		img: '',
	},

]

function Block() {
  return (
    <section className='block-section'>
        <div className="card-sector">
            {products.map(product => (
                <Card 
                    img={product.img}
                    title={product.title} 
					description={product.description} />
			))}
        </div>
    </section>
  );
}

export default Block;
