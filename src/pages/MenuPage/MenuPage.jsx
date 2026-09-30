import React from 'react';
import { menuSections } from '../../data/cardapio';
import './MenuPagePDF.css';

export const CardapioPage = () => {
  return (
    <div className="menu-pdf-container">
      {/* Cabeçalho do Cardápio Físico */}
      <div className="menu-pdf-header">
        <h1>CAFÉ COM LEITE</h1>
        <p>Criando laços e memórias através do sabor. Desde 2019.</p>
      </div>

      {/* Renderização das Seções do Cardápio */}
      {menuSections.map((section) => (
        <div key={section.id} className="menu-pdf-section">
          <h2>{section.titulo}</h2>
          {section.subtitulo && <p className="section-sub">{section.subtitulo}</p>}
          
          <div className="menu-pdf-grid">
            {section.itens.map((item, index) => (
              <div key={index} className="menu-pdf-item">
                <div>
                  <div className="item-top">
                    <h3>{item.nome}</h3>
                    {item.preco && <span className="price">{item.preco}</span>}
                  </div>
                  {item.desc && <p className="item-desc">{item.desc}</p>}
                </div>
                {item.detalhe && <span className="item-detalhe">{item.detalhe}</span>}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardapioPage;