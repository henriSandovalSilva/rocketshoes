import React from 'react';

import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-md-runner-2-masculino/26/D12-1407-026/D12-1407-026_zoom1.jpg"
          alt="Tênis"
        />

        <h3>Tênis</h3>
        <p>R$ 129,90</p>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />3
          </div>

          <p>ADICIONAR AO CARRINHO</p>
        </button>
      </li>
    </ProductList>
  );
}
