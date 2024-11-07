const ErrorExample = () => {
    let count = 0;

    let increaseCount = () => {
        count = count + 1;
        console.log(count);
    };

    return (
        <div>
            <h2>Count = {count}</h2>
            <button type="button" className="btn" onClick={increaseCount}>
                Increase
            </button>
            
        </div>
    );
};

export default ErrorExample;
