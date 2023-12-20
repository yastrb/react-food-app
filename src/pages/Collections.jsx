import React from 'react';
import image1 from '../img/sushi.jpg';
import image2 from '../img/salmon.jpg';
import image3 from '../img/muffin.jpg';
import image4 from '../img/breakfast.jpg'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';


const collection = [
  {
    image: image1,
    title: "Sushi Combos for your Next Party"
  },
  {
    image: image2,
    title: "Everything Bagel"
  },
  {
    image: image3,
    title: "Cook Like a Chef"
  },
  {
    image: image4,
    title: "Exquisite Dinner Recipe Ideas"
  },
]

const Collections = () => {
  return (

    <div>
      <section className=' container mx-auto px-4 mb-8'>
        <h3 >Hand-Picked Collections</h3>
        <div className=" grid md:grid-cols-2 gap-3">
          {collection.map((item) => {
            return (
              <div className='' key={item.id}>
                <Card key={item.id}>
                  {/* <CardMedia
                    component="img"
                    image={item.image}
                  /> */}
                  <div className='relative  overflow-hidden lg:max-h-52 max-h-64 min-h-[20rem]'>
                    <img className=' absolute left-0 w-full h-full object-cover transition duration-700 hover:scale-110' src={item.image} alt={item.title} />
                  </div>
                  <CardContent>
                    <h5>{item.title}</h5>
                  </CardContent>
                  <CardActions>
                    <Button size="small">156 Recipes</Button>
                  </CardActions>
                </Card>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default Collections