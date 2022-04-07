
function Pokemon( props ){
    console.log(props.pokemon);
    return(
        <div>
            <h2>{props.pokemon.name}</h2>
            
        </div>
    );
}

export default Pokemon;