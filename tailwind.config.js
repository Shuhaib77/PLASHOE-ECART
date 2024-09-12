const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'home-bg':"url('https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-hero-image-bg.jpg')",
        'home-bg2':"url('https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-shop-men-image-thumbnail.jpg')",
         'home-bg3':"url('https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-shop-women-image-tumbnail.jpg')",
         'home-bg4':"url('https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-cta-image-bg.jpg')",
         'Login-bg':"url('https://images.pexels.com/photos/6630581/pexels-photo-6630581.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load')",
         'register-bg':"url('https://images.pexels.com/photos/5868629/pexels-photo-5868629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"
        
      }
    },
  },
  plugins: [],
});