export const fetchHotelsFromApi = async () => {
  try {
    const res = await fetch(`http://engine.hotellook.com/api/v2/cache.json?location=Moscow&currency=rub&checkIn=&checkOut=2023-04-06&limit=20`)
    const data = await res.json()
    console.log(data,'fetchHoteldata')
    return data
  } catch (error) {
    console.error(error,'err')
  }
}
