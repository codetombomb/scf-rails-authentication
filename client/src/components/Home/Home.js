import ItemCard from "../ItemCard/ItemCard"

function Home({user, items, loggedIn}) {
  // debugger
  if(!loggedIn) return <div>You must be logged in</div>
  return (
    <div>
      {/* <h1>Welcome {user.username}!</h1> */}
      {/* {[<ItemCard />, <ItemCard />, <ItemCard />, <ItemCard />]} */}
      {items.map((item) => {
        return <ItemCard key={item.id} item={item}/>
      })}
    </div>
  )
}

// ItemCard({item: {desc: "", name: "", ...}})
export default Home