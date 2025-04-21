
export const getFavorites = () => {
const favorites = localStorage.getItem('favorites')
if(favorites) return JSON.parse(favorites)
    return []
}

export const addFavorite = doctor => {
    const favorites = getFavorites();
    const isExist = favorites.find(d=>d.id===doctor.id);
    if(isExist) return console.log('phone already added');
    favorites.push(doctor)
   
    localStorage.setItem('favorites', JSON.stringify(favorites))
}

export const removeFavorites = id => {
    const favorites = getFavorites();
    const remainingFavorites = favorites.filter(doctor=>doctor.id !== id); 
    localStorage.setItem('favorites', JSON.stringify(remainingFavorites))
 
}