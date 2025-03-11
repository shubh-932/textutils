import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { ColorThemeContext } from "../contexts/ColorThemeContext";
import { setBodyColor } from '../utils/colorUtils';
import { colorClass } from '../utils/colorUtils';

export default function About() {

  const [darkMode] = useContext(ThemeContext);
  const [colorTheme] = useContext(ColorThemeContext);

  document.title = "StringCraft - About"

  setBodyColor(colorTheme);

  const btnStyle = {
    backgroundColor: '#272727',
    color: 'white'
  }

  const collapseStyle = {
    backgroundColor: '#272727'
  }

  return (
    <div className="container my-3">
      <h3>About Us</h3>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" style={darkMode ? btnStyle : {}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <strong>Analyze Your Text</strong>
            </button>
          </h2>
          <div id="collapseOne" style={darkMode ? collapseStyle : {}} className={`accordion-collapse collapse show ${colorClass(colorTheme)}`} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              StringCraft gives you a way to analyze your text quickly and efficiently. Be it word count, character count or coverting raw text to any case, StringCraft is the place to visit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" style={darkMode ? btnStyle : {}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <strong>Free To Use</strong>
            </button>
          </h2>
          <div id="collapseTwo" style={darkMode ? collapseStyle : {}} className={`accordion-collapse collapse ${colorClass(colorTheme)}`} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              StringCraft is a free character counter tool that provides instant character count and word count statistics for a given text. It reports the number of words and characters. Thus, it is suitable for writing text with word/character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" style={darkMode ? btnStyle : {}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div id="collapseThree" style={darkMode ? collapseStyle : {}} className={`accordion-collapse collapse ${colorClass(colorTheme)}`} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              This word counter software works in any web browser such as Chrome, Firefox, Internet Explorer, Safari, Opera, etc. It suits to count characters in facebook, blogs, books,excel document, pdf document, essays, etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}