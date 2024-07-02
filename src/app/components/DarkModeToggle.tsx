import * as React from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export const DarkModeToggle = () => {
    const [isDarkMode, setDarkMode] = React.useState(false)
    const toggleDarkMode = (checked: boolean) => {
        setDarkMode(checked)
        if (checked) {
            document.body.classList.remove('is-light');
            document.body.classList.add('is-dark');      
        } else {
            document.body.classList.remove('is-dark');
            document.body.classList.add('is-light');      
        }
    }

    React.useEffect(() => {
        const darkModeToggle = document.getElementById('darkModeToggle') as HTMLInputElement | null
        if (darkModeToggle){
            if (darkModeToggle.checked) {
                document.body.classList.add('is-dark')
            } else {
                document.body.classList.remove('is-light')
            }
        }
    })

    return(
        <DarkModeSwitch
        color="white"
        checked={isDarkMode}
        onChange={toggleDarkMode}
        aria-label="Dark Mode Toggle"
        />
    )
}