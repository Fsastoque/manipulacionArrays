const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ]

  const resp = orders.map(item => item.total)
  console.log('original' , orders);
  console.log('Resp', resp)

  const resp1 = orders.map(item =>
    {               
        return {
            ...item,//se hace copia al array original y se agrega un nuevo objeto 
            tax: .019
        };
    });
  console.log('original' , orders);
  console.log('Resp1', resp1)