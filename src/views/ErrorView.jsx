import BasicCardComponent from "../components/general/BasicCardComponent";

export default function ErrorView() {
    return (
        <div className="flex justify-content-center mt-8">
            <BasicCardComponent 
                title="Ooops"
                content={ <img src="not-found.svg" className="h-20rem w-20rem" />}
            />
        </div>
    );
}