export const FavoriteItems = (props) => {
    const { favorites } = props;

    return (
        <div>
            <h1 style={{textAlign: "center", margin:"20px"}}>Your Favorite Items</h1>
            {
            favorites.map(({id, name}) => (
                <h2 key={id} style={{textAlign: "center", margin:"20px"}}>
                    &#x2605;&#x2605; {name} &#x2605;&#x2605;
                </h2>
            ))
            }
        </div>
    )
}