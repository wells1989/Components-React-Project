import useNavigation from "../hooks/use-navigation";
import classNames from "classnames";

function Link({ to, children, className, activeClassName }) { // to = path, children = component to show etc
    
    const { navigate, currentPath } = useNavigation();

    const classes = classNames(
        'text-blue-500',
        className,
        currentPath === to && activeClassName
    ); // to allow extra classNames to adjust styling, and if currentPath === to, adds some styling

    const handleClick = (event) => {
        if (event.metaKey || event.ctrlKey) return; // if ctrl key down opens new tab

        event.preventDefault(); // stops the total page refresh
        
        navigate(to);
    }
    
    return <a className={classes} href={to} onClick={handleClick}>{children}</a>
}

export default Link;