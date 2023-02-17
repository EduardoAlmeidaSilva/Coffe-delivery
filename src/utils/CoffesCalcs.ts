export function addQtdCafeUtil(index: number, cafes: any[]) {
  const newCafes: any[] = [];
  let addCarrinho: number = 0;
 
  cafes.map((cafe: any, indexb: number) => {
    if (index === indexb) {
      cafe.qtd += 1;
     
    }
   
    addCarrinho += cafe.qtd;
    newCafes.push(cafe);
  });
  let valorCafes: number = addCarrinho;
  valorCafes *= 9.9;
  localStorage.setItem("valor-cafe", JSON.stringify(valorCafes));
  localStorage.setItem("total-carinho", JSON.stringify(addCarrinho));
  localStorage.setItem("coffe-delivery", JSON.stringify(newCafes));

  return {
    cafes: newCafes,
    quantidadeCarinho: addCarrinho,
    refresh: valorCafes,
  };
}

export function removeQtdCafeUtil(index: number, cafes: any[]) {
  const newCafes: any[] = [];
  let rmvCarinho: number = 0;
 
  cafes.map((cafe: any, indexb: number) => {
    if (index === indexb) {
      if (cafe.qtd > 0) {
        
        cafe.qtd -= 1;
      }
    }
   
    rmvCarinho += cafe.qtd;
    newCafes.push(cafe);
  });

  let valorCafes: number = rmvCarinho;
  valorCafes *= 9.9;
 
  localStorage.setItem("valor-cafe", JSON.stringify(valorCafes));
  localStorage.setItem("total-carinho", JSON.stringify(rmvCarinho));
  localStorage.setItem("coffe-delivery", JSON.stringify(newCafes));

  return {
    cafes: newCafes,
    quantidadeCarinho: rmvCarinho,
    refresh: valorCafes,
  };
}

export function formatMoney(conta: number) {
  return "R$ " + conta.toFixed(2).replace(".", ",")
}
