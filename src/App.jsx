import axios from "axios";
import "./App.css";
import SearchHeader from "./SearchHeader";
import searchImages from "./api";
import { useState } from "react";
import ImageList from "./components/imageList";

function App() {
  const [images, setImages] = useState([]);
  //term değeri SearchHeader daki form onSubmit çalıştığında searchProp propertisini doldurduğu değeri alır.
  //Ana formdan alt form mantığının tam tersi, alt formdan ana forma veri gönderme işlemi
  //alt formda onSubmit te searchProp u dolduruyor, bu formda da searchProp (isimler aynı zaten) handleSubmit e gönderiyor.
  //handleSubmit te de term ile bunu alıyor, term yerine baska bir şey de yazılabilirdi.
  //Kısacası, alt form TETİKLENDiğinde (onSubmit) prop u doldurması için kod yazdık ve o prop u ANA form da okuttuk.
  const handleSubmit = async (term) => {
    //debugger;
    //console.log(term);
    const result = await searchImages(term);
    //Array liste gelen değer set edildi.
    setImages(result);
  };

  return (
    <div className="App">
      <SearchHeader searchProp={handleSubmit} />
      <ImageList imagesPlaceholder={images} />
    </div>
  );
}

export default App;
