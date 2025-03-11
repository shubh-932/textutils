import { useContext } from 'react';
import Operation from '.././components/Operation';
import TextForm from '.././components/TextForm';
import TextSummary from '.././components/TextSummary';
import { TextProvider } from '.././contexts/TextContext';
import { ColorThemeContext } from '../contexts/ColorThemeContext';
import { setBodyColor } from '../utils/colorUtils';

export default function Home({ showNotif }) {
   
    document.title = "TextUtils - Word Counter | Character Counter | Uppercase to Lowercase | Lowercase to Uppercase"

    const [colorTheme] = useContext(ColorThemeContext);
    
    setBodyColor(colorTheme);

    return (
        <TextProvider>
            <TextForm heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces" />
            <Operation showNotif={showNotif} />
            <TextSummary />
        </TextProvider>
    )
}
