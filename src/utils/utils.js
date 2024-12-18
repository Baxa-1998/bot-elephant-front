export const handleClick = (data, setElephantsData, handlePurchase) => {
  handlePurchase(data, setElephantsData, handleBuy);
};

export const handlePurchase = (data, setElephantsData, handleBuy) => {
  console.log(data);
  handleBuy(setElephantsData);

  setElephantsData((prevData) => {
    const updatedData = prevData.map((item) => {
      if (item.id === data.id) {
        return { ...item, purchased: true };
      }
      return item;
    });
    return updatedData;
  });
};

export const handleBuy = (setElephantsData) => {
  setElephantsData((prevData) => {
    const updatedData = [...prevData];
    const nextInactiveElephant = updatedData.find((item) => !item.active);
    if (nextInactiveElephant) {
      nextInactiveElephant.active = true;
     
    }
    return updatedData;
  });
};