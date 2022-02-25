
import './tajweed.css'  
// Download the css file => https://github.com/aamirbhat382/Tajweed/blob/main/css/tajweed.css
import tajweed, {Tajweed}  from 'tajweed';

function App() {
let string = "۞ ٱللَّهُ نُورُ [h:9421[ٱ][l[ل]سَّمَ[n[ـٰ]و[n[َٲ]"; // 
let parseTajweed = new Tajweed()
let parseString = parseTajweed.parse("string",true)



  return (
    <div dangerouslySetInnerHTML={{__html:parseString )}}></div>

  );
}

export default App;
