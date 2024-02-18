import { RadioGroup } from '@headlessui/react';
import { IProduct } from '@models/ProductModel';
import React, { useState } from 'react';

interface SizeSelectorProps {
  product: IProduct;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const SizeSelector: React.FC<SizeSelectorProps> = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  return (
    <div className="mt-10">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-900">Размер упаковки</h3>
      </div>

      <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
        <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
        <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
          {product.sizes.map((size, index) => (
            <RadioGroup.Option
              key={`${size.id}-${index}`}
              value={size}
              className={({ active }) =>
                classNames(
                  'cursor-pointer bg-white text-gray-900 shadow-sm',
                  active ? 'ring-2 ring-indigo-500' : '',
                  'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                )
              }
            >
              {({ active }) => (
                <RadioGroup.Label as="span">{size.size}</RadioGroup.Label>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
}

export default SizeSelector;
