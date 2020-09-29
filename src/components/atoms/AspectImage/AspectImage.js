import React from 'react';
import AspectRatio from '../AspectRatio/AspectRatio';
import Image from '../Image/Image';

export default React.forwardRef(({ ratio, ...props }, ref) => (
  <AspectRatio ratio={ratio}>
    <Image
      ref={ref}
      {...props}
      __css={{
        objectFit: 'cover',
      }}
    />
  </AspectRatio>
))