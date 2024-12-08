import React, { useState, useContext } from 'react';
import { Card, CardContent, Typography, CardActions, Button, Box } from '@mui/material';
import { Book } from 'lucide-react';
import { UserContext } from "../UserContext";
import { CartContext } from "./CartContext";

const ProductCard = ({ product, name, description, price, category }) => {
    const [isAdded, setIsAdded] = useState(false);
    const { cartItems, fetchCart, addToCart } = useContext(CartContext);
    const { user } = useContext(UserContext);

  const handleAddToCart = () => {
    if (user) {
      addToCart(product);
      setIsAdded(true);
      setTimeout(() => setIsAdded(false), 1000);
    } else {
      alert("Please log in to add items to the cart.");
    }
  };
  return (
    <Card 
      sx={{
        maxWidth: 345,
        borderRadius: '10px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)'
        },
        padding: 2,
        backgroundColor: '#fff',
      }}
    >
      <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
        <Book style={{ color: '#710193', fontSize: 40 }} />
      </Box>
      <CardContent>
        <Typography variant="h5" component="div" fontWeight="bold" mb={1} color="#2c3e50">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={2}>
          {product.description}
        </Typography>
        <Typography
          variant="subtitle2"
          fontWeight="500"
          sx={{ backgroundColor: '#f5f5f5', padding: '4px 8px', borderRadius: '5px' }}
          mb={2}
        >
          Genre: {product.category}
        </Typography>
        <Typography variant="h6" fontWeight="bold" color="#710193">
          Ksh {product.price.toFixed(2)}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center' }}>
      <Button
        onClick={handleAddToCart}
        variant="contained"
        sx={{
          backgroundColor: '#710193',
          '&:hover': { backgroundColor: '#5c0178' }
        }}
      >
        {isAdded ? 'Added to Cart' : 'Add to Cart'}
      </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
