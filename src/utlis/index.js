
import toast from 'react-hot-toast'

// get all coffees from local storage
const getAllFavorites = () => {
  const all = localStorage.getItem('favorites')

  if (all) {
    const favorites = JSON.parse(all)
    console.log(favorites)
    return favorites
  } else {
    console.log([])
    return []
  }
}

// add a coffee to local storage
const addFavorite = product => {
  // get all previously saved coffee data
  const favorites = getAllFavorites()
  const isExist = favorites.find(item => item.product_id == product.product_id)
  if (isExist) return toast.error('Product already exists!')

  favorites.push(product)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  toast.success('Successfully added!')
}

// remove a coffee from local storage
const removeFavorite = product_id => {
  // get all previously saved coffee data
  const favorites = getAllFavorites()
  const remaining = favorites.filter(product => product.product_id!= product_id)
  localStorage.setItem('favorites', JSON.stringify(remaining))
  toast.success('Successfully Removed!')
}

export { addFavorite, getAllFavorites, removeFavorite }