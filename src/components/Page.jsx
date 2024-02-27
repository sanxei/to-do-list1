import { useState } from 'react'

const Page = () => {
  const [items, setItems] = useState([])


  function handleAddItems(item) {
    setItems((items) => [...items,item])
  }

  function handleDeleteItem(itemId) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId))
  }

  return (
    <> 
    <div className="bg-white flex flex-col w-96 h-96 rounded-xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
      <div className=' bg-kuning text-center text-white font-bold p-4 rounded- ' >
        <h1>Daily Needs</h1>
      </div>
      <div className="bg-tam h-screen text-white">
      <Form onAddItems={handleAddItems}/>
      <List items={items}  onDeleteItem={handleDeleteItem} /> 
      </div>
  </div>
  </>
  
  )
    
}
function Form({onAddItems}) {

  const [description, setDescription] = useState("")
  const [quantity, setQuantity] = useState(1)
  const [price, setPrice]= useState("")

  function handleSubmit(e) {
    e.preventDefault();

    if(!description || !price) return
    
    const newItem = {description, quantity, price: parseFloat(price),  id: Date.now()}
    console.log(newItem);

    onAddItems(newItem)

    setDescription("")
    setQuantity(1)
    setPrice("")

    
  }

  return (
    <form className=" flex items-center gap-3" onSubmit={handleSubmit}>
      <select className='bg-tam'
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 15}, (_, i) => i + 1).map((num) => (
          <option value={num}>{num}</option>
        ))}
      </select>
      <input className='bg-tam w-28'
        type="text"
        placeholder="Barang" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)}/>

      <input className='bg-tam w-28' 
      placeholder='Harga'
      value={price} 
      type='number' 
      onChange={(e) => setPrice(e.target.value)} />

      <button className='bg-green-600 w-fit px-3 rounded-md'>Add</button>
    </form>
  );
}

function List({items, onDeleteItem}) {
  return (
    <div>
      <ul className='flex flex-col'>
        <li className='mx-10'>
        {items.map((item) => (
          <Item item={item}  onDeleteItem={onDeleteItem}  />
        ))}
        </li>
        
      </ul>
    </div>
  );
}



function Item({ item, onDeleteItem}) {

  function handleDelete() {
    onDeleteItem(item.id)
  }

  function formatRupiah(angka) {
    var reverse = angka.toString().split('').reverse().join('');
    var ribuan = reverse.match(/\d{1,3}/g);
    ribuan = ribuan.join('.').split('').reverse().join('');
    return "Rp " + ribuan;
  }
  

  return (
    <li>
  
      <span>
        {item.quantity} - {item.description} -  {formatRupiah(item.price)}
      </span>
      <button className='bg-red-600 rounded-md px-2 my-1 mx-2' onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default Page

