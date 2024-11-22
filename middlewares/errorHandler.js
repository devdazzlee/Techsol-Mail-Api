// middlewares/errorHandler.js

export default (err, req, res, next) => {
    console.error('Error:', err);
  
    res.status(500).json({
      error: 'An unexpected error occurred. Please try again later.',
    });
  };
  