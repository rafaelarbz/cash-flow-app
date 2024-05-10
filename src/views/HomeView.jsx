import BasicCardComponent from '../components/general/BasicCardComponent';
export default function HomeView() {
    return (
        <div className="flex justify-content-center mt-5">
            <BasicCardComponent 
                title="Cookies e travessuras ?"
                content={ <img src="home.svg" className="h-20rem w-20rem" />}
            />
        </div>
    );
}