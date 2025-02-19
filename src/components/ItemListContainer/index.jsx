import './style.css'; 

export const ItemListContainer = ({ greeting }) => {
    return (
        <div className="container mt-4 p-4 bg-light rounded shadow">
            <h2 className="text-center display-4 fw-bold" style={{ color: '#d63384' }}>
                {greeting}
            </h2>
        </div>
    );
};