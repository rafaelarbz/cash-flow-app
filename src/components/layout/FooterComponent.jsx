import { APP_NAME } from "../../utils/application";

export default function FooterComponent() {
    const currentYear = new Date().getFullYear();

    return (
        <span>{APP_NAME} &copy; {currentYear}</span>
    );
}