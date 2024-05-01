const styleArgument = { fontSize: '100px', color: 'red' };

function HelloCGU() {
    return (
        <div className="App">
            <h1 style = { styleArgument }> hello CGU!!</h1>
        </div>
    );
}

export default HelloCGU;