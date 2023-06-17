
import Navbar from '../navbar/navbar';
import ItemList from '../itemList/itemList';

function itemListContainer() {
  return (
    <>
    <Navbar />
    <div className='d-flex mt-5'>
    <ItemList />
    </div>
    </>
  )
}

export default itemListContainer;