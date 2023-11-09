import useNavigation from "../hooks/use-navigation";

function Route({ path, children }) {
    const { currentPath } = useNavigation();

    if (currentPath === path) {
        return children;
    } // if currentPath matches the path prop shows the children elements etc, else shows nothing (below)

    return null;
}

export default Route;